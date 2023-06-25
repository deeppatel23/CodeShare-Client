# CodeShare

## A real-time code editor for collaborative code editing.

CodeShare is a simple real-time code editor that allows users to collaborate on code in real-time. The project is divided into two parts: a React client app and a Node.js server.

### React Client App
The React client app is a web app that allows users to edit code in real-time. The app uses Socket.IO to communicate with the Node.js server. This app is deployed on render: https://code-share-7wx9.onrender.com/

### Node.js Server
The Node.js server is responsible for managing the connections between users and for broadcasting code changes to all connected users. The server is also responsible for storing the code that is edited by users.

### Getting Started
To get started with CodeShare, you will need to install the following dependencies:

Node.js
npm
React
Socket.IO
Once you have installed the dependencies, you can start the project by running the following commands:
```
npm install
npm start
```

The project will start on port 3000. You can access the app at http://localhost:3000 on your local machine. To make your website work, you will be required to start your server and provide the endpoint in `socket.js` file.

### Screenshots
<img alt="Homepage" src="https://github.com/deeppatel23/CodeShare-Client/blob/main/screenshots/Screenshot%202023-06-25%20at%201.04.35%20PM.png" height = "300" width = "500" />
<img alt="Homepage" src="https://github.com/deeppatel23/CodeShare-Client/blob/main/screenshots/Screenshot%202023-06-25%20at%201.13.30%20PM.png" height = "300" width = "500" />
