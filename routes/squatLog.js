import express from "express";
import { getSquatLog, postSquatLog } from "../models/squat_log.js";

const router = express.Router();

/* GET squat log listing. 
Data will come through as an array of objects
E.g. [{"id":1,"no_squats":15},{"id":2,"no_squats":18},{"id":3,"no_squats":22}]*/
router.get("/", async function (req, res, next) {
  const squatLog = await getSquatLog();
  res.json(squatLog);
});

//We're expecting the frontend to send a post request with the shape of {no_squats: integer},
//e.g. {no_squats: 30}
router.post("/", async function (req, res, next) {
  const newSquats = await postSquatLog(req.body.no_squats);
  res.json(newSquats);
}); 

//We're exporting it under the name router here, but importing it under the name squatLogRouter in app.js
export default router;
