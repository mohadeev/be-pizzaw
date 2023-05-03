import mongoose from "mongoose";

const ingredSchema = mongoose.Schema(
  {
    objectData: {
      type: Object,
      default: {
        bread: {
          type: Object,
        },
        cheeses: { type: Object },
        meat: { type: Object },
        vegetable: { type: Object },
        herbs: { type: Object },
      },
    },
  },
  { timestamps: true }
);

const ingredModal = mongoose.model("ingred", ingredSchema);
export default ingredModal;
