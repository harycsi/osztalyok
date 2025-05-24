export default class Button{
    constructor(element, callback){
        this.element = element;
        this.callback = callback;
        this.handleClick();
    }

    handleClick(){
        this.element.addEventListener("click", () => {
            this.callback();        //a callback-et mindig meg lehet változtatni
        });
    }
}