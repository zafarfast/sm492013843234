const router = require('express').Router();
const Thought = require('../../models/Thought');

router.get('/',(req,res)=>{
  Thought.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
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
