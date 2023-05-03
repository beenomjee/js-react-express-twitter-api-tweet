import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }

  console.log("Server listening on port " + port);
});
