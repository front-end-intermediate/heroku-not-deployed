const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require('path');
require("dotenv").config();

const recipeModel = require("./api/recipe.model");
const recipeControllers = require("./api/recipe.controllers");

const app = express();

app.use(fileUpload());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

const dataBaseURL = process.env.DATABASE;

app.get("/api/recipes", recipeControllers.findAll);
app.get("/api/recipes/:id", recipeControllers.findById);
app.post("/api/recipes", recipeControllers.add);
app.post("/api/upload", recipeControllers.upload);
app.put("/api/recipes/:id", recipeControllers.update);
app.delete("/api/recipes/:id", recipeControllers.delete);
app.get("/api/import", recipeControllers.import);
app.get("/api/killall", recipeControllers.killall);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(dataBaseURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5020;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
