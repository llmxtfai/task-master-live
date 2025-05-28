import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const PORT = process.env.PORT || 3000;
const TASKS_PATH = resolve(__dirname, '../tasks/tasks.json');
const pidFile = resolve(process.cwd(), '.board-server.pid');

app.use(express.static(path.join(__dirname, 'public')));

app.post('/shutdown', (req, res) => {
    res.send('Shutting down');
    io.close();
    httpServer.close(() => process.exit(0));
});

let tasksData = {};
function loadTasks() {
    try {
        const raw = fs.readFileSync(TASKS_PATH, 'utf8');
        tasksData = JSON.parse(raw);
    } catch (err) {
        console.error('Failed to read tasks:', err.message);
    }
}

loadTasks();
io.on('connection', (socket) => {
    socket.emit('tasks', tasksData);
});

fs.watch(TASKS_PATH, () => {
    loadTasks();
    io.emit('tasks', tasksData);
});

httpServer.listen(PORT, () => {
    fs.writeFileSync(pidFile, String(process.pid));
    console.log(`Board server running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    io.close();
    httpServer.close(() => process.exit(0));
});
