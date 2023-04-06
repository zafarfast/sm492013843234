const router = require('express').Router();

router.get('/',(req,res)=>{
  res.send("Hello from thoughts")
})

router.get('/:id',(req,res)=>{
  res.send(`Hello from thoughts by ID ${req.params.id}`)
})

router.post('/',(req,res)=>{
  res.send(`Hello from thoughts POST`)
})

router.post('/:id/reactions',(req,res)=>{
  res.send(`to create a reaction stored in a single thought's reactions array field  `)
})

router.put('/:id',(req,res)=>{
  res.send(`Hello from thoughts PUT by ID ${req.params.id}`)
})
router.delete('/:id',(req,res)=>{
  res.send(`Hello from thoughts DELETE by ID ${req.params.id}`)
})

router.delete('/:id/reactions',(req,res)=>{
  res.send(`DELETE to pull and remove a reaction by the reaction's reactionId value`)
})

module.exports = router;
