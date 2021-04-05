module.exports ={
    mydb: process.env.MONGODB_URI || "mongodb://adminTello:tellotello10@ds028559.mlab.com:28559/taskmanagertello" /*"mongodb://localhost/mytaskmanger" */,
    port:process.env.PORT || 5000,
    secret:"helloTello$"

}