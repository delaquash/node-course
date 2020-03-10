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

// How to create middleware in node application

// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send('GET request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.send('Site is currently down')
// })


app.use(express.json());
app.use(userRouter);
app.use(userTask);





app.listen(port, () => {
    console.log("Server is up on " + port);
});

const Task = require('./models/task');
const User = require('./models/user');

const main = async () => {
    // const task = await Task.findById('5c2e505a3253e18a43e612e6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    const user = await User.findById()
    await user.populate('task').execPopulate()
    console.log(user.tasks)
}
main()



// How to create authentication tokens and also validate them
// const jwt = require('jsonwebtoken');

// const myJwtTokens = async () => {
//     const token = jwt.sign({_id: 'abc123' }, 'thisismynewcourse', { expiresIn: '14days' });
//     console.log(token);

//     // to verify a token
//    const verifyToken = jwt.verify(token, 'thisismynewcourse');
//    console.log (verifyToken);
// }


// How to encrypt a password

const bcrypt = require('bcrypt');

// const myFunction = async () => {
//     const password = 'Olaide0806496';
//     const hashedPassword = await bcrypt.hash (password, 8);

//     console.log(password);
//     console.log(hashedPassword);


//     // How to check if password provided by users is the same as the hashed password
//     const isMatch = await bcrypt.compare ('Olaide0806496', hashedPassword);
//     // if Olaide is changed to olaide, an error message showing false would be shown
//     console.log(isMatch);
// }
