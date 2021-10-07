const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const clusterConnection =
  'mongodb+srv://Dirwin:1234@cluster0.gvcxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const { Schema } = mongoose;

const pirateSchema = new Schema({
  name: String,
  age: Number
});

const Pirate = mongoose.model('Pirate', pirateSchema);

app.use(cors());
app.use(express.json());

app.post('/pirates', (request, response) => {
  const { pirate } = request.body;
  Pirate.create(pirate).then(pirate => response.send(pirate));
});

app.get('/pirates', (_, response) => {
  Pirate.find({}).then(pirates => response.send(pirates));
});

mongoose
  .connect(clusterConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB has been connected'))
  .catch(console.error);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
