const express = require('express');
const cors = require('cors');
const appRoutes = require('./routes/index');
const app = express();
const db = require('./config/database'); 

// Add CORS middleware
app.use(cors());

app.use('/downloads', express.static('downloads'));

// Add JSON middleware
app.use(express.json());

// API routes
app.use(`/api`, appRoutes);

// Start the server
app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`));
