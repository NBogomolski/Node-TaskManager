const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path')

const hbsHelpers = require('./config/hbs_helpers')
const connectDb = require('./config/db')

const PORT = 5000

//routing
const indexRouter = require('./routes/index_router')
const newTaskRouter = require('./routes/new_task_router')
const wrongInputRouter = require('./routes/wrong_input_router')
const updateTaskRouter = require('./routes/update_task')
const deleteTaskRouter = require('./routes/delete_task')

app.set('view engine', 'hbs')
app.set('views', __dirname+'/views')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use(indexRouter)
app.use(newTaskRouter)
app.use('/wrong-input', wrongInputRouter)
app.use(updateTaskRouter)
app.use(deleteTaskRouter)

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("listening on port 5000", new Date().toLocaleTimeString());
        // console.info("dirname is " + __dirname);
    });
}).catch((err) => {
    console.error(err)
});