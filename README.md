# Project Description
In this project, we integrate the Forkscanner tool with a Bitcoin wallet of our choice. Forkscanner allows for the monitoring of multiple Bitcoin nodes for a variety of anomalies such as nodes lagging behind, inflated blocks, stale blocks, and transactions from user-specified addresses. The integration of Forkscanner with a Bitcoin wallet provides notifications for specified addresses that are monitored by Forkscanner.

# About the Project
In this project, we integrate the Forkscanner tool with a Bitcoin wallet of our choice. Forkscanner allows for the monitoring of multiple Bitcoin nodes for a variety of anomalies such as nodes lagging behind, inflated blocks, stale blocks, and transactions from user-specified addresses. The integration of Forkscanner with a Bitcoin wallet provides notifications for specified addresses that are monitored by Forkscanner.

# Directory Structure
- node_modules/ - Contains all the dependencies for the project.
- public/ - Contains static assets such as images, CSS files, and JavaScript files for the client-side.
- views/ - Contains views that are rendered on the server-side using EJS templates.
- client/ - Contains all client-side scripts including components, modules, and styles.
- dist/ - Contains the compiled files.
- styles/ - Contains the main SCSS file.
- src/ - Contains all server-side scripts including config, controllers, models, routes, and views.
- package-lock.json - Contains the exact version of the dependencies installed.
- package.json - Contains the project's metadata and dependencies.
- README.md - Contains the project's documentation.

```bash
.
│
├── node_modules/
├── public/
│   ├── images/
│   ├── css/
│   │   ├── style.css
│   ├── js/
│   │   ├── script.js
│   ├── index.html
├── views/
│   ├── nodeView.ejs
├── client/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   ├── modules/
│   │   ├── api.js
│   │   ├── utils.js
│   ├── styles/
│   │   ├── main.scss
│   ├── index.js
├── dist/
│   ├── bundle.js
│   ├── index.html
├── styles/
│   ├── main.scss
├── src/
│   ├── config/
│   │   ├── forkscanner.js
│   │   ├── wallet.js
│   ├── controllers/
│   │   ├── nodeController.js
│   ├── models/
│   │   ├── nodeModel.js
│   ├── routes/
│   │   ├── nodeRoutes.js
│   ├── views/
│   │   ├── nodeView.ejs
│   ├── app.js
├── package-lock.json
├── package.json
└── README.md

```

# Installation Instructions

## Prerequisites
- [x] Node.js
- [x] Bitcoin wallet
- [x] Forkscanner

## Setup
1. Clone the repository to your local machine.
2. Navigate to the root of the project in the terminal.
3. Run npm install to install the required dependencies.
4. In the src/config directory, update the forkscanner.js and wallet.js files with the required configuration settings for Forkscanner and your Bitcoin wallet            respectively.
5. Run npm run dev to start the development server.

## Testing
Run npm run test to run the test suite.

# Usage Instructions
1. Navigate to the URL where the development server is running.
2. Add the addresses you want to monitor in the input field and click the "Add" button.
3. Wait for notifications on the wallet when transactions occur on the monitored addresses.
