# Task Master Live [![GitHub stars](https://img.shields.io/github/stars/eyaltoledano/claude-task-master?style=social)](https://github.com/eyaltoledano/claude-task-master/stargazers)

[![CI](https://github.com/eyaltoledano/claude-task-master/actions/workflows/ci.yml/badge.svg)](https://github.com/eyaltoledano/claude-task-master/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/task-master-live.svg)](https://badge.fury.io/js/task-master-live)
[![Discord](https://dcbadge.limes.pink/api/server/https://discord.gg/taskmasterai?style=flat)](https://discord.gg/taskmasterai)
[![License: MIT with Commons Clause](https://img.shields.io/badge/license-MIT%20with%20Commons%20Clause-blue.svg)](LICENSE)

### By [@eyaltoledano](https://x.com/eyaltoledano) & [@RalphEcom](https://x.com/RalphEcom)

[![Twitter Follow](https://img.shields.io/twitter/follow/eyaltoledano?style=flat)](https://x.com/eyaltoledano)
[![Twitter Follow](https://img.shields.io/twitter/follow/RalphEcom?style=flat)](https://x.com/RalphEcom)

A task management system for AI-driven development with Claude, designed to work seamlessly with Cursor AI.

## Requirements

Task Master Live uses AI across several commands, requiring a separate API key. You can use a variety of models from different AI providers if you include their API keys.

At least ONE API key is required (adding more allows seamless switching):

- Anthropic API key
- OpenAI API key
- Google Gemini API key
- Perplexity API key
- xAI API key
- OpenRouter API Key

## Quick Start

### Option 1: MCP (Recommended)

#### 1. Add your MCP config:

| Editor       | Scope   | Linux/macOS Path                      | Windows Path                                      | Key          |
| ------------ | ------- | ------------------------------------- | ------------------------------------------------- | ------------ |
| **Cursor**   | Global  | `~/.cursor/mcp.json`                  | `%USERPROFILE%\.cursor\mcp.json`                | `mcpServers` |
|              | Project | `<project_folder>/.cursor/mcp.json`   | `<project_folder>\.cursor\mcp.json`             | `mcpServers` |
| **Windsurf** | Global  | `~/.codeium/windsurf/mcp_config.json` | `%USERPROFILE%\.codeium\windsurf\mcp_config.json` | `mcpServers` |
| **VS Code**  | Project | `<project_folder>/.vscode/mcp.json`   | `<project_folder>\.vscode\mcp.json`             | `servers`    |

##### MCP Config Example

```json
{
  "mcpServers": {
    "task-master-live": {
      "command": "npx",
      "args": ["-y", "--package=task-master-live", "task-master-live"],
      "env": {
        "ANTHROPIC_API_KEY": "YOUR_ANTHROPIC_API_KEY_HERE",
        "PERPLEXITY_API_KEY": "YOUR_PERPLEXITY_API_KEY_HERE",
        "OPENAI_API_KEY": "YOUR_OPENAI_KEY_HERE",
        "GOOGLE_API_KEY": "YOUR_GOOGLE_KEY_HERE",
        "MISTRAL_API_KEY": "YOUR_MISTRAL_KEY_HERE",
        "OPENROUTER_API_KEY": "YOUR_OPENROUTER_KEY_HERE",
        "XAI_API_KEY": "YOUR_XAI_KEY_HERE",
        "AZURE_OPENAI_API_KEY": "YOUR_AZURE_KEY_HERE"
      }
    }
  }
}
```

> 🔑 Replace placeholder API keys with your actual keys. Remove any you’re not using.

#### 2. Cursor Setup

Enable **Task Master Live** under Cursor ➝ Settings ➝ MCP tab.

#### 3. Model Configuration (Optional)

In your editor AI chat pane:

```
Change the main, research and fallback models to <model_name>, <model_name> and <model_name> respectively.
```

#### 4. Initialize in your Project

In the chat pane:

```
Initialize task-master-live in my project
```

#### 5. Add a PRD

Ensure you have `scripts/prd.txt` in your project folder. Example available at `scripts/example_prd.txt`.

#### 6. Common AI Chat Commands

- `Can you parse my PRD at scripts/prd.txt?`
- `What’s the next task I should work on?`
- `Can you help me implement task 3?`
- `Can you help me expand task 4?`

### Option 2: Using Command Line

#### Installation

```bash
npm install -g task-master-live
# OR
npm install task-master-live
```

#### CLI Commands

```bash
task-master-live init
task-master-live parse-prd your-prd.txt
task-master-live list
task-master-live next
task-master-live generate
task-master-live server start
```

Visit `http://localhost:3000` to view the task board.

Stop with:

```bash
task-master-live server stop
```

## Documentation

- [Configuration Guide](docs/configuration.md)
- [Tutorial](docs/tutorial.md)
- [Command Reference](docs/command-reference.md)
- [Task Structure](docs/task-structure.md)
- [Example Interactions](docs/examples.md)

## Troubleshooting

If `task-master-live init` hangs:

```bash
node node_modules/task-master-live/scripts/init.js
```

Or clone and run:

```bash
git clone https://github.com/eyaltoledano/claude-task-master.git
cd claude-task-master
node scripts/init.js
```

## Contributors

<a href="https://github.com/eyaltoledano/claude-task-master/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=eyaltoledano/claude-task-master" />
</a>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=eyaltoledano/claude-task-master&type=Timeline)](https://www.star-history.com/#eyaltoledano/claude-task-master&Timeline)

## License

Licensed under **MIT with Commons Clause**.

✅ Permitted:

- Use in personal/commercial/academic projects
- Modify and distribute
- Build products using Task Master Live

❌ Forbidden:

- Sell Task Master Live directly
- Offer it as a hosted service
- Create competitors based on the code

See [LICENSE](LICENSE) for details.
