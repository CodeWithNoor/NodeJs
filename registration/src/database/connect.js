const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/userDB`,
{useNewUrlParser: true, useUnifiedTopology: true, family: 4})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));