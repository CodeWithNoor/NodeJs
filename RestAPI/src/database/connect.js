const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/userData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}).then(() => console.log("connect successfully"))
.catch((error) => console.log(error))