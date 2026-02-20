# 🕹️ Tic-Tac-Toe Project

Welcome to the **Tic-Tac-Toe** project! This is a simple and elegant browser-based implementation of the classic Tic-Tac-Toe game, featuring:

- ✨ **Interactive and customizable game board**
- 🎨 **Modern design with responsive UI**
- 📦 **Local dependencies** (no third-party CDN calls)
- 📱 **Real-time Telegram notifications for CI/CD pipelines**

---

### 📃 Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Github Actions CI/CD Pipeline](#ci-cd-pipeline-details)
- [Live Demo](#live-demo)
- [Tech Stack](#tech-stack)

---

## ✨ Features

- **Simple yet interactive gameplay:** A user-friendly interface using HTML, JavaScript, and CSS.
- **Custom animations:** Dynamic modal notifications for game events such as victory, loss, or a tie.
- **Error-free code quality:** All JavaScript is linted against modern ESLint configurations.
- **Continuous Integration/Deployment (CI/CD):** Automates the process of testing and deploying the project.

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ovinokurov/tic-tac-toe.git
   ```

2. Navigate into the directory:
   ```bash
   cd tic-tac-toe
   ```

3. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```

4. Start a local development server:
   ```bash
   npm start
   ```

---

## 🚀 Usage

1. Open `index.html` in your favorite browser.
2. Start playing the game! Enjoy the smooth animations and modern UI.

---

## 🛡️ CI/CD Pipeline Details

Our Tic-Tac-Toe project is set up with GitHub Actions for CI/CD. Below is an overview:

### 🔄 Workflow Steps

1. **Run Unit Tests:**
  - Automated with Puppeteer-based browser testing.
  - Ensures the game logic is error-free before deploying updates.

2. **Deploy to GitHub Pages:**
   - Automatically takes place upon a successful push to the `master` branch.
   - The game is built and published to the GitHub Pages server.

3. **Telegram Notifications**:
   - Errors in any workflow step trigger an automatic Telegram message notification with details and a link to the GitHub Actions log.
   - Successful workflows send a confirmation message with the deployment link.

### 📊 Details

| **Step**            | **Description**                                   | **Time Taken** |
|---------------------|--------------------------------------------------|----------------|
| Checkout repository | Clones the repository to the GitHub Actions runner. | <2 seconds     |
| Set up Node.js      | Installs Node.js version 18.                      | ~5 seconds     |
| Install dependencies | Runs `npm install` for project dependencies.    | ~10 seconds    |
| Build website       | Executes `npm run build` and prepares files for deployment. | ~5 seconds     |
| Deployment          | Pushes the build to the `gh-pages` branch.       | ~10 seconds    |

---

**Example notifications sent to Telegram:**

- ✅ Success: `Build and Deployment Successful! Check it here: [Live Demo](https://ovinokurov.github.io/tic-tac-toe/)`
- ❌ Failure: Details are provided with a direct link to the GitHub Actions log.

---

## 🌐 Live Demo
Check out the live demo of the Tic-Tac-Toe game directly on GitHub Pages:

👉 [Tic-Tac-Toe on GitHub Pages](https://ovinokurov.github.io/tic-tac-toe/)

---

## 🛠️ Tech Stack

- **HTML5, CSS3, JavaScript:** Base of the project.
- **SweetAlert2 (optional):** Initially used for modals, later replaced with built-in HTML/CSS modals.
- **GitHub Actions:** Automating testing and deployment.
- **Puppeteer:** Running browser-based unit tests.
- **Telegram Bot API:** Real-time notifications for workflow statuses.

Feel free to contribute, report issues, or suggest enhancements!