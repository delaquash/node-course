// CRUD operation in database
// When destructured using the destructuring method
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

const id = new ObjectID()
console.log(id.toHexString().length);
// console.log(id.getTimestamp());


// Updating a database
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    // Update a record or user in the database
   const db = client.db(databaseName);


   const updatePromise = db.collection('user').updateOne({
       _id: new ObjectID ("")
   }, {
       $set:{
           name: 'Emmanuel'
       }
   });

   updatePromise.then((result) => {
       console.log(result)
   }).catch((error) => {
       console.log(error)
   });


//    Another example about updating many record on DBS\
db.collection('task').updateMany({
   completed: false
}, {
    $set: {
        completed: true
    }
});

updateTask.then((result) => {
    console.log(result.modifiedCount)
}).catch((error) => {
    console.log(error)
})


// Reading database

//    Querying a database using the ID

db.collection('users').findOne({_id: new ObjectID("5c1113239cbfe605241f9071")}, (error, users) => {
        if (error) {
            return console.log('Unable to fetch user');
        }
        console.log (users);
});


// Task
db.collection('users').findOne({_id: new ObjectID("5c1113239cbfe605241f9071")}, (error, task) => {
            console.log(task);
});
db.collection("users").find({  completed: false }).toArray((error, task) => {
        console.log(task);
})


// To find an array of document

db.collection("users").find({ age: 27}).toArray((error, users) => {
        console.log(users)
})





   db.collection('users').insertOne({
       _id: id,
       name:'Olaide Emmanuel',
       age: 27
   }, (error, result) => {
       if(error) {
           return console.log ('Unable to insert user');
       }
       console.log(result.ops);
   })


db.collection('users').insertMany([
    {
    name: 'Olaide Emmanuel',
    title: 'Software Developer'
}, {
    name: 'Delaquarsh Olaide',
    title: 'Software developer'
}], (error, result) => {
    if (error) {
        return console.log('Unable to insert many users');
    }
    console.log(result.ops);
})
});

// Deleting a Database
db.collection('users').deleteMany({
    age: 27
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


// Another example when deleting a database
db.collection('users').deleteOne({
    description: 'Cleaning the house'
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

