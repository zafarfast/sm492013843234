const router = require('express').Router();
const User = require('../../models/User');
const Thought = require('../../models/Thought');

router.get('/',(req,res)=>{
  User.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

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

router.post('/',(req,res)=>{
  const newUser = new User({ username: req.params.username, email:req.params.username });
  newUser.save();
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
})

router.post('/:userId/friends/:friendId',(req,res)=>{
  const friend = user.find({id:req.params.friendId})
  const user = user.find({id:req.params.userId})
  User.findOneAndUpdate(
     { id: req.params.userId },
    // Replaces name with value in URL param
    { friends: [...user.id] },
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
