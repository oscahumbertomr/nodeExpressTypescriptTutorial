import Pokemon from "./Pokemon"

class FirePokemon extends Pokemon {
  
  private hasEvolved = false

  constructor(
    id : number,
    name : string,
    type : Array<string>,
    moves : Array<string>,
    hp : number,
    attack : number,
    defense : number,
    speed : number,
  ){
    //super -> execute constructor class from fahter class/ base class in this case is Pokemon Class
    super(
    id,
    name,
     type,
     moves,
     hp,
     attack,
     defense,
    speed
    )
  }

  set setHasEvolved(hasEvolved:boolean){
    this.hasEvolved = hasEvolved
  }

  get getHasEvolved() :boolean{
    return this.hasEvolved
  }

  set setAtack(newAtack : number){
    this.attack = newAtack
  }



}

export default FirePokemon