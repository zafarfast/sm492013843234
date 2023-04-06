const router = require('express').Router();
const Thought = require('../../models/Thought');
const User = require('../../models/User');

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
  Thought.findOne({ id: req.params.id }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
})

router.post('/',async (req,res)=>{
  const newThought = new Thought({ username: req.body.username, thoughtText: req.body.thoughttext });
  await newThought.save();


  await User.findOneAndUpdate(
   { username: req.body.username },
   { $addToSet: { thoughts: newThought._id }},
   { new: true })

   const tt = await User.findOne({username:req.body.username}).populate({path:'thoughts', select: '-__v'}).populate({path:'friends', select: '-__v'})
   if (tt)
   {
    res.send(200).json(tt)
   }
   else {
    res.send('Something went wrong')
   }
 
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
