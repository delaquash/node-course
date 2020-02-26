const express = require("express");
require('./db/mongoose');
//

// This require function isnt used because Router is been used
// const User = require('./models/user');
// const Task = require('./models/task');


const userRouter = require('./routers/user');
const userTask = require('./routers/task');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(userRouter);
app.use(userTask);


app.listen(port, () => {
    console.log("Server is up on " + port);
})
