const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const PORT = 5000;
const schema = require("./schema/schema");
const app = express();
const Project = require("./models/Client");

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://localhost:27017/brad");

  console.log(`${conn.connection.host}!!!!!!`);
};
connectDB();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, async () => await Project.find());
