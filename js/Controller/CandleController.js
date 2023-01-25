export class CandleController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.candleForm.addEventListener('submit', this.handleFormSubmit);


    }

    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        console.log('Hello World');
        event.preventDefault();
        this.view.renderCandle(this.model.size, this.model.color, this.model.scent);
    }

}