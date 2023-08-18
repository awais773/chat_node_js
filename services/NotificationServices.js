const fetch = require('node-fetch');
const User = require("../model/User"); // Import your User model

const SERVER_API_KEY = 'AAAAIJFsTB0:APA91bFVOnp5FhwtQ6WSrcZYLJZYBI6r0FubjvC2hTyZmAnlT60JYC6uaBVOgXERRErepSlH4mwFb0iDp9wokn4GMZL3FqdVCt8MxLLL3IqaA4coRwIpqqHIA-7KWoHjQNclEqdzX39g';

const headers = {
  'Authorization': 'key=' + SERVER_API_KEY,
  'Content-Type': 'application/json',
};

exports.sendNotification = async (title, body) => {
  try {
    const users = await User.findAll({ attributes: ['device_token'] });
    const firebaseTokens = users.map(user => user.device_token);
    const notification = {
      title: title,
      body: body,
    };

    const data = {
      registration_ids: firebaseTokens,
      notification: notification,
    };

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };

    const response = await fetch('https://fcm.googleapis.com/fcm/send', options);
    const responseData = await response.json();
    console.log('Notification sent:', responseData);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};

///enter command 
// npm install node-fetch
