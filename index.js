const http = require('http')
const fs = require('fs')
const Server = http.createServer(userMupper)

function userMupper(req,res){
   switch(req.url){
       case '/todos': return todosHendler(req,res); break;
       default: notFoundHendler(req,res)
       

   }
}

 function notFoundHendler(req,res){
      res.writeHead(400,{
          'Content-Type' : 'application/json'
      })
      res.write(JSON.stringify({error: "todos not found"}))
      res.end()
 }

 function todosHendler(req,res){
     const todosFile = fs.createReadStream('./todos.json')
    res.writeHead(404,{
        'Content-Type' : 'application/json'
    })
    todosFile.on('data',(chunk)=>{
          res.write(chunk)
    })
    todosFile.on('end',()=>{
        res.end()
    })


}
 


Server.listen(6060,function(){
    console.log('Server ishlamoqda....')
})
