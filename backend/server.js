const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log(err));

// Schema + Model
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String
});
const User = mongoose.model('User', userSchema,);

// Routes
app.post('/add-user', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send('User added');
});

app.get('/get-users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
