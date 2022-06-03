const express = require("express")
const app = express();

const dotenv = require("dotenv")
const routes = require("./routes/userRoutes")

dotenv.config()
app.use(express.json())

const path = require('path')
const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use("/clients", routes)

app.get("/", (req, res) => {
  res.render('Home')
})

app.listen(3000, ()=>{
  console.log('Server running at 3000')
})