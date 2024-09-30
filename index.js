const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

// pankajpal8967890080
// PS2I8f3xTWLPQSs4

app.use(express.json());
app.use(cors());


async function main() {
  await mongoose.connect('mongodb+srv://pankajpal8967890080:PS2I8f3xTWLPQSs4@veggify-react-app.xwojr.mongodb.net/veggify-react-app?retryWrites=true&w=majority&appName=veggify-react-app');
}

main().then(() => console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));

// routes
const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute")

app.use('/api', ItemRoutes)
app.use('/api/', CategoryRoutes)

app.get('/', (req, res) => {
  res.send('Veggify Recipe App Server is running!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})