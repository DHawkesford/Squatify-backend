import express from "express";
import { getSquatLog } from "../models/users.js";

const router = express.Router();

/* GET squat log listing. 
Data will come through as an array of objects
E.g. [{"id":1,"no_squats":15},{"id":2,"no_squats":18},{"id":3,"no_squats":22}]*/
router.get("/", async function (req, res, next) {
  const squatLog = await getSquatLog();
  res.json(squatLog);
});

export default router;
