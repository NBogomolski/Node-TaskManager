const router = require("express").Router();

router.get('/', (req, res) => {
    res.render("new/wrong_input")
})

router.post('/back', (req, res) => {
    res.redirect('/')
}) 

module.exports = router