const router = require('express').Router();
const User = require('../../models/User');
const Thought = require('../../models/Thought');

router.get('/',(req,res)=>{
  User.find({}).populate({ path: 'friends', select: '-__v' }).then((result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }});

})

router.get('/:id',(req,res)=>{
  User.findOne({ id: req.params.id }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
})

router.post('/',async (req,res)=>{
  const newUser = new User({ username: req.body.username, email: req.body.email });
  newUser.save();
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
})

router.post('/:userId/friends/:friendId',async (req,res)=>{
  const friend = await User.findOne({_id:req.params.friendId})
  const user = await User.findOne({_id:req.params.userId})
  
  user.friends.push(friend._id)

  User.findOneAndUpdate(
     { id: user.id },
    // Replaces name with value in URL param
    { friends: user.friends },
    // Sets to true so updated document is returned; Otherwise original document will be returned
    { new: true },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Updated: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ message: 'something went wrong' });
      }
    }
  );
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
