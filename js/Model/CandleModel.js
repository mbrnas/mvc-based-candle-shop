import { selectData } from "../store/selectData.js";
/**
 * Represents the application model. The model contains the data, the information
 * regarding the animal such as: type and color. The model can obtain data either
 * from a database or files, which could be located locally or externally. This
 * class holds a reference to an exernal file that contains data for select options.
 *
 * The model does not talk directly to a view, instead is made available to a
 * controller which accesses it when needed.
 */
export class CandleModel {
  static store = selectData;
  /**
   * Creates an object representing the animal model.
   *
   * @returns {AnimalModel} The object representing the animal model.
   */
  constructor() {
    this.size = "undefined";
    this.color = "undefined";
    this.scent = "undefined";
  }
  /**
   * Returns an array of this object's properties names.
   * The returned array is used by View to dynamically render the selects.
   * For each Model property, a select is being rendered in View.
   *
   * @returns {Array} array of property names (strings)
   */

  getProperties() {
    return Object.keys(this);
  }
  /**
   * Gets the data from the external resource to be used as select options.
   *
   * @param {String} selectID - select ID
   * @returns {Array} array of select's options (strings)
   */

  getOptions(selectID) {
    let options;
    switch (selectID) {
      case "size":
        options = Object.keys(CandleModel.store);
        break;

      case "color":
        options = Object.keys(CandleModel.store[this.size]);
        break;

      case "scent":
        options = Object.keys(CandleModel.store[this.size][this.color]);
        break;
    }

    return options;
  }
  /**
   * Resets this object's properties to "undefined". Not all properties are
   * going to be reset, only those that are listed after the property defined
   * by this method parameter.
   *
   * @param {type} property - property from which the reset starts.
   */

  resetNextProperties(property) {
    let properties = Object.keys(this);
    let index = properties.indexOf(property);
    while (++index < properties.length) {
      this[properties[index]] = "undefined";
    }
  }
  /**
   * Stores animal data accross browser sessions. Window.localStorage is used
   * to store the model as a JSON string under the key 'animal'.
   *
   * @returns {undefined}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON}
   */

  persist() {
    localStorage.setItem("candle", JSON.stringify(this));
    //Let's test if this is stored. Delete this from your project:
    //        let animal = localStorage.getItem('animal');
    //        console.log(animal === null ? 'No animal found in local storage' : JSON.parse(animal));
    //        console.log(animal === null ? 'No animal found in local storage' : animal);
  }
}
