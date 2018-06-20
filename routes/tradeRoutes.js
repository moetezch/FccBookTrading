const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Trade = mongoose.model('trades')
const Book=mongoose.model('books')


module.exports = app => {
  app.post('/api/tradeRequest', async (req, res) => {
    console.log(req.body);
    const { senderID, senderBookTitle, receiverID, receiverBookTitle } = req.body

    const trade = new Trade({
      "sender._user": senderID,
      "sender.bookTitle": senderBookTitle.bookTitle,
      "receiver._user": receiverID,
      "receiver.bookTitle": receiverBookTitle,
       status: "Pending"
    })
    await trade.save()
    res.send({})
  })

  app.post('/api/tradeResponse/:id', async (req, res) => {
    const query = { _id: req.params.id }
    console.log(req.params.id);
    
    console.log(req.body.answer);
    Trade.updateOne(query,
      { $set: {"status":req.body.answer } },
           (err, result) => {
     if (err) {
         return console.log(err);
     }
     res.sendStatus(200);
 })

  })

  app.get('/api/trade/received', async (req, res) => {
   // console.log(req.user.id);

    const trade=await Trade.find({
      "receiver._user":req.user.id

    })

    res.send(trade)
  })
  app.get('/api/trade/sent', async (req, res) => {
    //console.log(req.user.id);

    const trade = await Trade.find({
      "sender._user": req.user.id

    })

    res.send(trade)
  })
}

