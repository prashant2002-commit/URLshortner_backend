const {nanoid} = require('nanoid')
const URL = require('../model/url')

async function handleGenerateShortURL(req,res){
    const body = req.body
    if(!body.url){
        return res.status(400).json({msg: 'url is required'})
    }
    const shortId = nanoid(8)  //8 in the parameter is the length 
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    })
    return res.render('home',{id: shortId})
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    return res.json({totalClicks: result.visitHistory.length, 
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateShortURL,
    handleGetAnalytics
}
