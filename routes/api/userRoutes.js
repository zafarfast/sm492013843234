const router = require('express').Router();
const User = require('../../models/User');
const Thought = require('../../models/Thought');

router.get('/',(req,res)=>{
  res.send("Hello from Users")
})

router.get('/:id',(req,res)=>{
  res.send(`Hello from GET users by ID ${req.params.id}`)
})

router.post('/',(req,res)=>{
  res.send(`Hello from Users POST`)
})

router.post('/:userId/friends/:friendId',(req,res)=>{
  res.send(`to add a new friend to a user's friend list  `)
})


router.put('/:id',(req,res)=>{
  res.send(`Hello from User PUT by ID ${req.params.id}`)
})
router.delete('/:id',(req,res)=>{
  res.send(`Hello from User DELETE by ID ${req.params.id}`)
})

router.delete('/:userId/friends/:friendId',(req,res)=>{
  res.send(`to delete a  friend from a user's friend list  `)
})

module.exports = router;
