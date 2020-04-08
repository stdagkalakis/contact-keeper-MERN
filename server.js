const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

//Init Middleware
app.use(express.json({ extened: false }));

app.get('/', (res, req, err) =>
  res.status(200).json({ msg: 'Welcome to contact keeper api' })
);

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
