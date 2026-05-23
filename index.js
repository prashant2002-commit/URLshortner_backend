const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const { connectToMongoDB } = require('./connect')
const {restrictToLoggedinUserOnly,checkAuth} = require('./middleware/auth')
const URL = require('./model/url')

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const app = express()
PORT = 4000

connectToMongoDB('mongodb://localhost:27017/short-url');

app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())


app.use('/url',restrictToLoggedinUserOnly, urlRoute)
app.use('/user',userRoute)
app.use('/',checkAuth,staticRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    });
    if (!entry) {
        return res.status(404).send('Short URL not found');
    }
    res.redirect(entry.redirectUrl)
})



app.listen(PORT, () => console.log('server started '))