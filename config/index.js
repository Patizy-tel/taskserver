module.exports ={
    mydb: process.env.MONGODB_URI || "mongodb+srv://tello:13dochesterSS@mydbs.boifr.mongodb.net/MyDbs?retryWrites=true&w=majority" /*"mongodb://localhost/mytaskmanger" */,
    port:process.env.PORT || 5000,
    secret:"helloTello$"

}