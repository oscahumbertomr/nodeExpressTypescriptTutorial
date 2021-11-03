import * as http from 'http';

const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url === '/'){
    res.write('INDEX ALV test')
  }else if(req.url === '/test'){
    res.write('test page under construction')
  }
  // res.write('Holi to my api exaple with http modul')
  res.end()
});

server.listen(3030);