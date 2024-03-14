const express = require('express');
const cors = require('cors');
const http = require("http");
const WebSocket = require("ws");
const appRoutes = require('./routes/index');
const db = require('./config/database');
const admin = require('firebase-admin');
const serviceAccount = require('./ab-chat-ca7a7-firebase-adminsdk-g0sp7-c3408c6a1d.json');
const User = require('./model/User');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ab-chat-ca7a7.firebaseio.com'
});

const messaging = admin.messaging();
const url = require('url');

const groups = {}; // Map to store group members
const webSockets = {}; // Map to store WebSocket connections

// Function to add user to a group
function addUserToGroup(groupId, userId) {
    if (!groups[groupId]) {
        groups[groupId] = [];
    }
    if (!groups[groupId].includes(userId)) {
        groups[groupId].push(userId);
    }
}

// Function to remove user from a group
function removeUserFromGroup(groupId, userId) {
    if (groups[groupId]) {
        groups[groupId] = groups[groupId].filter(id => id !== userId);
        if (groups[groupId].length === 0) {
            delete groups[groupId];
        }
    }
}

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws, req) => {
    const reqUrl = url.parse(req.url, true);
    const userID = reqUrl.query.userID;

    webSockets[userID] = ws;

    ws.on('message', async message => {
        console.log('Received:', message);

        // Check if it's a JSON string
        try {
            var data = JSON.parse(message);
            
            // Check if it's a group message
            if (data.groupId && groups[data.groupId]) {
                // Broadcast message to all members of the group
                groups[data.groupId].forEach(memberId => {
                    const memberSocket = webSockets[memberId];
                    if (memberSocket && memberId !== data.author.id) {
                        memberSocket.send(message);
                    }
                });
            } else if (data.remoteId) {
                var boardws = webSockets[data.remoteId];
                if (boardws) {
                    boardws.send(message);
                    ws.send("success");
                } else {
                    const reciever = await User.findByPk(data.remoteId);
                    const sender = await User.findByPk(data.author.id);
                    const notification = {
                        notification: {
                            title: sender.name,
                            body: data?.text,
                            // how can i send ma json data to notification 
                        },
                        android: {
                            notification: {
                                channel_id: "my_channel_id",
                            }
                        },
                        token: reciever.deviceToken,
                        data: {
                            id: data.id,
                            text: data.text,
                            remoteId: data.remoteId,
                            status: data.status,
                            type: data.type,
                            author: data.author.id,
                        }
                    };
                    messaging.send(notification)
                        .then((response) => {
                            console.log('Successfully sent message:', response);
                        })
                        .catch((error) => {
                            console.log('Error sending message:', error);
                        });
                    ws.send("No receiver user found");
                }
            } else {
                console.log("Invalid message format.");
                ws.send("Invalid message format.");
            }
        } catch (error) {
            console.log("Error parsing JSON:", error);
            ws.send("Error: Invalid JSON data");
        }
    });

    ws.on("close", () => {
        console.log("User disconnected");
        // Remove user from all groups
        for (let groupId in groups) {
            removeUserFromGroup(groupId, userID);
        }
        delete webSockets[userID];
    });
});

// Add CORS middleware
app.use(cors());

app.use('/downloads', express.static('downloads'));

// Add JSON middleware
app.use(express.json());

// API routes
app.use(`/api`, appRoutes);

// Start the server
const port = process.env.PORT || 8004; // Use process.env.PORT if available, otherwise use port 8004
server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
