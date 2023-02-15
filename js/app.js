/**
 * This is application's entry point based on the MVC architectural pattern.
 * The controller that represents the brains of the application is being 
 * initialized and connects the model and the view. 
 * 
 * The controller is used to intermediate between the view and the model. 
 * The controller monitors user interaction with the view and communicates 
 * any changes to the model.
 * 
 * THE APP IS TREATED AS A MODULE.JavaScript modules are reusable pieces of code 
 * that can be exported from one script and imported for use in another script.
 * The functions or variables defined in a module are not visible outside, to other 
 * scripts, unless you explicitly export them. You can decide what to export - 
 * limit your export to those values which should be accessed by other parts of 
 * your app. There is exactly one module per file and one file per module.
 * Modules are useful for a number of reasons. By separating code with similar 
 * logic into files called modules, we can:
 *      - find, fix, and debug the code more easily;
 *      - reuse and recycle defined logic in different parts of our application;
 *      - keep information private and protected from other modules;
 *      - prevent pollution of the global namespace and potential naming collisions, 
 *        by cautiously selecting variables and behavior we load into a program.
 * @link 
 */

import { CandleView } from "./View/CandleView.js";
import { CandleController } from "./Controller/CandleController.js";
import { CandleModel } from "./Model/CandleModel.js";

import {FormView}           from './view/FormView.js';
import {FormController}     from './controller/FormController.js';
import {FormModel}          from './model/FormModel.js';


class App {
    constructor() {
         /*
         * Find which page is requested. The window.location.href is used to get 
         * the url. Then, we extract the page name from the url using a regular 
         * expression. The string's match() method retrieves the result of 
         * matching a string against a regular expression. Return value is an 
         * Array whose contents depend on the presence or absence of the global 
         * (g) flag, or null if no matches are found.
         */
        const url = window.location.href;           // e.g. http://localhost:8383/form.html
        let page = null; 
        
        if(url.match(/[a-z]+.html/)!=null){
            page = url.match(/[a-z]+.html/)[0];
        }
        // match returns an array of matches

        switch (page) {
                
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;

            case 'index.html':

            default:
                new CandleController(new CandleModel(), new CandleView());
                break;
        }
    }
}

const app = new App();
