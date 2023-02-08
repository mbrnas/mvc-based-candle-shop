
export class CandleController {
 
    constructor(model, view) {
        this.model = model;
        this.view = view;

        let properties = this.model.getProperties();
        this.view.renderSelects(properties);

        let firstSelectID = properties[0];
        this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));

        this.view.selects.forEach((select) => {
            select.addEventListener('change', this.handleSelectChange);
        });

        this.view.candleForm.addEventListener('submit', this.handleFormSubmit);

    }

   
    handleSelectChange = (event) => {
        let select = event.target;
        
        
        this.model[select.id] = select.value;
        this.model.resetNextProperties(select.id);
        console.log(this.model);

       
        this.view.resetNextSiblings(select.id);
        let nextSelect = select.nextElementSibling;
        if (select.selectedIndex > 0 && nextSelect) {
            this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
        }

        //2.2. Update the animalDiv 
        this.view.renderCandle();
    }

    handleFormSubmit = (event) => {
        //prevent the default action of a form (prevent submitting it)
        // event.preventDefault();
        this.model.persist();
    }
}

