const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const clusterConnection =
  'mongodb+srv://Dirwin:1234@cluster0.gvcxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

mongoose
  .connect(clusterConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB has been connected'))
  .catch(console.error);

app.listen(PORT, console.log(`Listening on port ${PORT}`));
