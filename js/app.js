import { CandleView } from "./View/CandleView.js";
import { CandleController } from "./Controller/CandleController.js";
import { CandleModel } from "./Model/CandleModel.js";

const app = new CandleController(new CandleModel(), new CandleView());
