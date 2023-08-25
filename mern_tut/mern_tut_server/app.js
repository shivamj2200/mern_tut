const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');
const routes = require("./routes");
// const books = require('./api/books');
const app = express();


// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// app.use('/api/books', books);
app.use("/api/books", routes);

const port = process.env.PORT || 4002;

app.listen(port, () => console.log(`Server running on port ${port}`));
