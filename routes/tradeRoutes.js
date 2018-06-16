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
  app.get('/api/trade/received', async (req, res) => {
    // console.log(req.user.id);

    // const trade=await Trade.find({
    //   "receiver._user":req.user.id

    // })

    res.send('ee')
  })
  app.get('/api/trade/sent', async (req, res) => {
    //console.log(req.user.id);

    const trade = await Trade.find({
      "sender._user": req.user.id

    })

    trade.map(async (trade)=>{
      const bookReceiver=await Book.find({
        _id:trade.receiver._book
      })
      const bookSender=await Book.find({
        _id:trade.sender._book
      })
    //  console.log(bookSender.title);
      
  //   console.log(bookReceiver.title);
     
    })
   // console.log(trade[0].receiver._book);

    res.send(trade)
  })
}

