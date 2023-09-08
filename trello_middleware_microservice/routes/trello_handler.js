const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const API_KEY = process.env.API_KEY

router.post('/card/:cardId/comment', async (req, res) => {
    // Get our API Key
    var token = req.query.token
    var cardId = req.params.cardId
    var body = req.body

    var fetch_response = await fetch(`https://api.trello.com/1/cards/${cardId}/actions/comments?` + new URLSearchParams({
        text: body.text,
        key: API_KEY,
        token: token
    }),
    {
        method: 'POST'
    })
    console.log(fetch_response)
    res.send(await fetch_response.json())
})

module.exports = router