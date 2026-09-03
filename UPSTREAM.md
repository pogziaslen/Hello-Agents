# Upstream learning reference

This project takes its learning direction from [Datawhale's Hello-Agents](https://github.com/datawhalechina/hello-agents), a community tutorial on building AI-native agents from first principles.

## What this reference covers

- Agent and LLM fundamentals
- ReAct, Plan-and-Solve, Reflection, and other classic patterns
- Frameworks, tools, context engineering, memory, MCP, and evaluation
- Multi-agent applications, deep research, and agentic reinforcement learning
- Community projects and interview preparation

The upstream repository is included as a Git submodule at `upstream/hello-agents` so this website repository stays lightweight and the original project history, attribution, and updates remain clear.

## License and attribution

The upstream project is distributed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**. Review the upstream `LICENSE.txt` before redistributing or adapting its material. This repository does not claim ownership of the upstream tutorial.

Pinned upstream commit: [`45dd84e`](https://github.com/datawhalechina/hello-agents/commit/45dd84e626a91997294ac8d4d44f18b29a411c6e)

## Clone with the reference

```bash
git clone --recurse-submodules https://github.com/jjyaoao-svg/Hello-Agents.git
```

Update the reference intentionally when needed:

```bash
git submodule update --remote --merge upstream/hello-agents
git add upstream/hello-agents
git commit -m "docs: update upstream learning reference"
```
