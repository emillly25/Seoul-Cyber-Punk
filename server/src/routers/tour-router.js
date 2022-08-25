import { Router } from "express";
import { tourController } from "../controllers/tourController.js";
import { upload } from "../middlewares/multer.js";

const tourRouter = Router();

tourRouter.get("/", tourController.output);
tourRouter.post("/", upload.single("src"), tourController.upload);
tourRouter.post("/img", upload.single("src"), tourController.uploadSub);
tourRouter.post("/create", tourController.create);

export { tourRouter };
