const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000


/* motor de plantillas */

app.set('views', path.join(__dirname, 'views'))


app.engine('.hbs', engine({
    defaultLayout: "home",
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')


/*  rutas  */

app.use('/', require('./routes/router'));


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Servidor escuchando en el puerto: ${port}!`))


