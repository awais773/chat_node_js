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



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ab-chat-ca7a7.firebaseio.com'
});

const messaging = admin.messaging();

wss.on("connection", (ws, req) => {
    console.log("User connected");
    console.log(req.headers.user);
    var userID = req.headers.user //get userid from URL ip:6060/userid
    webSockets[userID] = ws //add new user to the connection list
    ws.on('message', message => { //if there is any message
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
                const message = {
                    notification: {
                        title: 'Test notification',
                        body: data?.text,
                        // how can i send ma json data to notification 
                    },
                    android: {
                        notification: {

                            channel_id: "my_channel_id",
                        }
                    },
                    token: 'cUOl9Ru_TRy-QyxCWwvied:APA91bF-S8xQUhdUtHU3nrlMeje69Ug2e2pHjy3rO2yfNRJB7K9KCmceleZoqwmWml2F6bA_Wk9xAyIQbpy91z5LVppQ6r1pITlvtJGZRM5jCVsOvSoRxB6U_G8pcA9YG00IW8aVYPyk',
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
                ws.send(data.cmd + ":No reciever user found");
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