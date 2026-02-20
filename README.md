# Tic-Tac-Toe Project

This is a simple Tic-Tac-Toe game created with HTML, CSS, and JavaScript. The project also includes workflows for unit testing and deployment to GitHub Pages using GitHub Actions.

## Workflows

### 1. Run Tic-Tac-Toe Unit Tests
- **Trigger**: On every `push` or pull request to the `master` or `main` branch.
- **Details**: Runs browser-based unit tests using Puppeteer to ensure code integrity.
- **Failure Notification**: In case of failure, it sends a notification to the Telegram bot linked to the workspace.

### 2. Pages Build and Deployment
- **Trigger**: On every `push` to the `master` branch.
- **Details**: Builds the project and deploys it to GitHub Pages.
- **Failure Notification**: If the build or deployment fails, a notification is sent to the same Telegram bot.

## How Notifications Work
In case of failure during either unit tests or deployment, a Telegram message will be sent with brief details and a link to the GitHub Actions page for more information.

## Published Project
You can view the project here: [Tic-Tac-Toe on GitHub Pages](https://ovinokurov.github.io/tic-tac-toe/).