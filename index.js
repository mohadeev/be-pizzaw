import Express from "express";
import dbConnect from "./db/dbConnect.js";
import ingredModal from "./db/schema/ingredModal.js";
import createAllIngreds from "./utils/createAllIngreds.js";

const app = Express();
const PORT = process.env.PORT || 5001;
dbConnect();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
createAllIngreds();
app.get("/api/pizza-ingredients", (req, res) => {
  ingredModal.find({}).then(async (ingreds) => {
    if (ingreds.length >= 1) {
      console.log(ingreds[0].objectData);
      res.json({ responseData: ingreds[0].objectData });
    }
  });
});
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
