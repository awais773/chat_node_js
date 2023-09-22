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


wss.on("connection", (ws, req) => {
    console.log("User connected");

    
    ws.send( " User connected"+ req.params.user_id);

    console.log(req.params.user_id);
    var userID = req.params.user_id //get userid from URL ip:6060/userid
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
                // const message = {
                //     notification: {
                //         title: 'Test notification',
                //         body: datastring
                //     },
                //     token: 'dCbH4pNNTiOFcH10G0_emA:APA91bEETF9Kq7nKX--2ClYuSRynjr9cAUr0fUeu5oEgQ10BTITL7qaKaAIrQa8E4h9IweureTsfobIla8QxAUgg7JWsinq_Okc-5DdGsCvfALtoDCLMqaxWzGb9jAh0o0QotfMU3-LI'
                // };
                // // Send the message to the device with the given registration token
                // messaging.send(message)
                //     .then((response) => {
                //         console.log('Successfully sent message:', response);
                //     })
                //     .catch((error) => {
                //         console.log('Error sending message:', error);
                //     });
                console.log("No reciever user found.");
                ws.send(data.remoteId +  " No reciever user found:error");
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
        console.log("User disconnected");
        ws.send( " User connected"+ req.params.user_id);

        // users.delete(userId);
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