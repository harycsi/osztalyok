//tervrajza lesz az objektumnak
export default class Pokemon{   //default használata, ha csak 1 clas van itt
    
    constructor(name, img, dittoAPI){   //inicializálja az adattagokat (létrehozza)
        this._name = name;  
        this.img = img;
        this.dittoAPI = 'https://pokeapi.co/api/v2/pokemon/ditt23o';
    }

    set name(name){     //átírja az adatot
        this._name = name;
    } 
    get name(){     //lekéri az adatot
        return this._name;
    }

    set img(img){
        this._img= img;
    }

    get img(){
        return this._img;
    }

    toString(){        //bemutatkozó metódus
        console.log(`Szia, a nevem ${this.name}\nA képem: ${this.img}`)
    }


    fetchPokemon(){
        fetch(this.dittoAPI).then(async(response) =>{
            const pokemon = await response.json()
            console.log(pokemon)
            const pokemonKepe = pokemon.sprites.front_default
            this.img= document.createElement("kep")
            img.src = pokemonKepe
            document.body.append(img)
        })
    }
}

//const pokemon = new Pokemon('Pikachu');  //példányosítás
//console.log(pokemon.name);
//pokemon.name = "Péterke"
//console.log(pokemon.name)
const pokemon = new Pokemon("Pikachu", "placeholder");
pokemon.toString()

