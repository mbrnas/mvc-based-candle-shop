/**
 * Represents the View. View holds refences to all GUI elements user interacts with.
 * The View exposes methods to interact with the view elements. 
 */
export class FormView {
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#form-candle-name');
    }

    /**
     * Creates form inputs based on the injected JS object with data.
     * 
     * @param {Object} dataObject - JS object containing input data for this form
     * @returns {undefined}
     */
    createInputs(dataObject) {
        let counter = 0;
        for (let property in dataObject) {
            if(counter <= 3){
                this.form.querySelector('fieldset').insertAdjacentHTML('afterbegin',
                `<label for = "${property}">${property}:</label>
                    <input name='${property}' 
                           value='${dataObject[property]}' 
                           type='text' id = "${property}" size='30'/>`);
            }
            counter++;
        }
        this.inputs = this.form.querySelectorAll('input[type=text]');
    }
}
/* <label for="fname">First name:</label>
<input type="text" id="fname" name="fname" placeholder="John" size="30"> */

