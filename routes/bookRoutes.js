const mongoose=require('mongoose')
const requireLogin =require ('../middlewares/requireLogin')
const Book=mongoose.model('books')


const passport = require('passport')

module.exports = app => {
    app.get('/api/books/:id',requireLogin,async (req,res)=>{
        const books=await Book.find({
          _user:req.params.id
        })
      
        
        res.send(books)
      })
      
      app.get('/api/books',async (req,res)=>{
        const books=await Book.find({
        })
        
        res.send(books)
      })
    app.post('/api/books/add/:id', async (req, res) => {
      
        const { title,pic,description } = req.body
        console.log(req.params.id);
        
        console.log(req.body);
        
        const book= new Book ({
          title,
          pic,
          description,
          _user:req.params.id
        })
        await book.save()
        res.send({})
    })
}

