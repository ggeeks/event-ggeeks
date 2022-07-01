const express = require('express')
const router = express.Router()

const SkribblSolo = require('../models/skribbl.js')

router.post('/skribbl', (req, res) => {
  const skribbl = new SkribblSolo({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    institute: req.body.institute,
    discord: req.body.discord,
  })
    skribbl.save().then(data =>{
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
})

module.exports = router
