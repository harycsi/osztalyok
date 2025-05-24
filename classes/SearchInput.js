//Hozz létre egy SearchInput osztályt, ennek a példánya várjon egy tényleges input html elemet
//hozz létre az inputhoz egy gettert és settert
export default class SearchInput{
    constructor(element){
        this._element = element;
        this._value = '';
        this.handleOnInput();
    }

    get element(){
        return this._element;
    }

    set element(element){
        this._element = element;
    }

    set value(value){
        this._value = value;
    }

    get value(){
        return this._value;
    }
   
    handleOnInput(){
        this._element.addEventListener("input", (event) => {
            this.value = event.target.value;
        });
    }
}
