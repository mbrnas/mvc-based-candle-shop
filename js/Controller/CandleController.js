export class CandleController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        let selectIDs = this.model.getProperties();
        this.view.renderSelects(selectIDs);

        

        this.view.candleForm.addEventListener('submit', this.handleFormSubmit);


    }

    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        console.log('Hello World');
        event.preventDefault();
    }

}