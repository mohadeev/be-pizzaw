import ingredModal from "../db/schema/ingredModal.js";
import fs from "fs";

// Read the JSON file from disk
const jsonString = fs.readFileSync("/statics/ingreds.json", "utf-8");

const createAllIngreds = async () => {
  const data = JSON.parse(jsonString);
  ingredModal.find({}).then(async (ingreds) => {
    if (ingreds && ingreds.length > 0) {
      const tergetedChild = ingreds[0];
      const documentId = tergetedChild._id;

      try {
        const fillter = { _id: documentId };
        const update = tergetedChild;
        tergetedChild.objectData = data;
        await ingredModal.updateOne(fillter, update);
        console.log("Updated");
      } catch (error) {
        console.log(error);
      }
    } else if (ingreds.length <= 0) {
      ingredModal.create({});
      console.log("created");
    }
  });

  //   });
};
export default createAllIngreds;
