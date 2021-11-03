class Pokemon {
  
  private id : number
  private name : string
  private type : Array<string>
  private moves : Array<string>
  private hp : number
  protected attack : number
  private defense : number
  private speed : number

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
    this.id = id
    this.name = name
    this.type = type
    this.moves = moves
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.speed = speed
  }

  public toString() : string[] {
    return [
      `Pokemon ID: ${this.id}`,
      `Pokemon Name: ${this.name}`,
      `Pokemon Type: ${this.type}`,
      `Pokemon Moves: ${this.moves}`,
      `Pokemon Hp: ${this.hp}`,
      `Pokemon Attack: ${this.attack}`,
      `Pokemon Defense: ${this.defense}`,
      `Pokemon Speed: ${this.speed}`,
    ]
  }

  get pokemonName():string {
    return this.name
  }

  set setHp(hp : number){
    this.hp = hp
  }

  public Attack(moves: Array<string>) {
    let random = Math.round(Math.random()*3)
    console.log(`${this.name} used ${moves[random]}!`)
  }

  public Run_Fly(type: Array<string>){
    if(type.includes('flying')){
      console.log(`${this.name} is flying at speed of ${this.speed}`)
    }else{
      console.log(`${this.name} is running at speed of ${this.speed}`)
    }
  }
}

export default Pokemon