import mongoose from "mongoose";

//907xqqfAgAB7evp5
//moha-pizza

const connnection = {};
const conectUrl =
  "mongodb+srv://moha-project-pizza:ag1gyPycnZwzOXhY@cluster0.7lfbcqo.mongodb.net/?retryWrites=true&w=majority";
const dbConnect = async () => {
  console.log("db connetced");
  if (connnection.isConnected) {
    return;
  }
  const db = await mongoose.connect(conectUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  //

  connnection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
