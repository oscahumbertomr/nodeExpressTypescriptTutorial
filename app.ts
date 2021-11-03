import * as express from "express";
import Pokemon from './pooPokemon/Pokemon/class/Pokemon';
import FirePokemon from './pooPokemon/Pokemon/class/FirePokemon'
import MovesTypes from "./pooPokemon/Pokemon/types/MovesTypes";
// import * as bodyParser from 'body-parser';
const app = express();
const port = 3032; // default port to listen

app.use(express.json());
// app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));//Content-Type: application/x-www-form-urlencoded

app.get('/pokemon',(req,res)=>{
    const pikachu: Pokemon = new Pokemon(1,'pikachu',['lol','lol2'],['arriba','abajo'],1200,500,100,800)
    pikachu.setHp = -100;
    pikachu.Attack(['left','right','up','down','never used'])
    pikachu.Run_Fly(['flying','swiming'])
    console.table(pikachu.toString())
    res.send(`Your pokemon is: ${pikachu.pokemonName}, all description: ${pikachu.toString()}`)
})

app.get('/charmander',(req,res)=>{
    const charmander: FirePokemon = new FirePokemon(1,'pikachu',['lol','lol2'],[MovesTypes.MOVES.UP,MovesTypes.MOVES.DOWN],1200,500,100,800)
    charmander.setHp = -100;
    charmander.Attack([MovesTypes.MOVES.LEFT,MovesTypes.MOVES.RIGHT,MovesTypes.MOVES.UP,MovesTypes.MOVES.DOWN,'never used'])
    charmander.setAtack = 20;
    charmander.Run_Fly(['flying','swiming'])
    console.table(charmander.toString())
    res.send(`Your pokemon is: ${charmander.pokemonName}, all description: ${charmander.toString()}`)
})

app.get('/',(req,res)=>{
    console.log(req.query)
    if(req.name){
        res.send(`your name ${req.name}`)
    }
    res.send('aoko')
})

app.get('/order/:name',(req,res)=>{
    console.log(req.query)
    if(req.name){
        res.send(`your name ${req.name}`)
    }
    res.send('aoko')
})

app.post('/cats', function(req, res) {
  if(!req.body){
    res.send('error',421)
  }
  const cat_id = req.body.id ?? null;
  const token = req.body.token ?? null;
  const geo = req.body.geo ?? null;

  res.send({
    'user_id': cat_id,
    'token': token,
    'geo': geo
  });
});

app.listen(port,()=>{
    console.log(`App runnin at http://localhost:${port}/`);
    
})