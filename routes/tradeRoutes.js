const mongoose=require('mongoose')
const requireLogin =require ('../middlewares/requireLogin')
const Trade = mongoose.model('trades')



module.exports = app => {
  app.post('/api/tradeRequest', async (req, res) => {
      console.log(req.body);
      const { senderID,senderBookID,receiverID,receiverBookID } = req.body
    
    const trade= new Trade ({
      "sender._user":senderID,
      "sender._book":senderBookID.bookId,
      "receiver._user":receiverID,
      "receiver._book":receiverBookID,
      status:"pending"
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
  console.log(req.user.id);
  
  const trade=await Trade.find({
    "sender._user":req.user.id

  })
  console.log(trade);
  
  res.send(trade)
})
  }

