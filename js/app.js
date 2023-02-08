import { CandleView } from "./View/CandleView.js";
import { CandleController } from "./Controller/CandleController.js";
import { CandleModel } from "./Model/CandleModel.js";

import {FormView}           from './view/FormView.js';
import {FormController}     from './controller/FormController.js';
import {FormModel}          from './model/FormModel.js';

class App {
    constructor() {
        
        const url = window.location.href;           // e.g. http://localhost:8383/form.html
        const page = url.match(/[a-z]+.html/)[0];   // match returns an array of matches

        switch (page) {
            case 'index.html':
                new CandleController(new CandleModel(), new CandleView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }
    }
}

const app = new App();
