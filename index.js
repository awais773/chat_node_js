const express = require('express');
const cors = require('cors');
const http = require("http");
const WebSocket = require("ws");
const appRoutes = require('./routes/index');
const db = require('./config/database');
const app = express();
const server = http.createServer(app);



const wss = new WebSocket.Server({ server });



const users = new Map();
var webSockets = {}
const admin = require('firebase-admin');
const serviceAccount = require('./ab-chat-ca7a7-firebase-adminsdk-g0sp7-c3408c6a1d.json');
const User = require('./model/User');



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ab-chat-ca7a7.firebaseio.com'
});

const messaging = admin.messaging();
const url = require('url');

wss.on("connection", (ws, req) => {
    const reqUrl = url.parse(req.url, true);
    const userID = reqUrl.query.userID; // Assuming the URL is in the format "/userid"
    // webSockets[userID] = ws; 

    // var userID = req.headers.user //get userid from URL ip:6060/userid
    webSockets[userID] = ws //add new user to the connection list
    ws.on('message', async message => { //if there is any message
        var datastring = message.toString();
        console.log(datastring);

        if (datastring.charAt(0) == "{") {
            datastring = datastring.replace(/\'/g, '"');
            var data = JSON.parse(datastring)
            // if (data.auth == "chatapphdfgjd34534hjdfk") {
            // if (data.cmd == 'send') {
            console.log("data.remoteId", data.remoteId);
            var boardws = webSockets[data.remoteId] //check if there is reciever connection
            if (boardws) {
                boardws.send(datastring); //send message to reciever
                ws.send("success");
            } else {
                const reciever = await User.findByPk(data.remoteId);
                const sender = await User.findByPk(data.author.id);
                const message = {
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
                messaging.send(message)
                    .then((response) => {
                        console.log('Successfully sent message:', response);
                    })
                    .catch((error) => {
                        console.log('Error sending message:', error);
                    });
                console.log("No reciever user found.");
                ws.send("No reciever user found");
            }
            // } else {
            //   console.log("No send command");
            //   ws.send(data.cmd + ":error");
            // }
            // } else {
            //   console.log("App Authincation error");
            //   ws.send(data.cmd + ":error");
            // }
        } else {
            console.log("Non JSON type data");
            ws.send(data.cmd + ":error");
        }
    })
    ws.on("close", () => {
        console.log("User disconnected", users);
        delete webSockets[userID] //remove user connection
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