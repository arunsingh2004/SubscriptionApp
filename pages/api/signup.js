import User from "../../models/user";
import connectDb from "../../middleware/moongose";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    console.log(req.body);
    let u = new User(req.body);
    await u.save();
    res.status(200).send({ success: "success" });
  } else {
    res.status(400).send({ error: "error" });
  }
};
export default connectDb(handler);
