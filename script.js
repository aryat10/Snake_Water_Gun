let user  = prompt("Enter your choice");
let cpuI = Math.floor(Math.random()*3);
let cpu = ["S" , "W" , "G"];


const game (user, cpu) {
  if(cpu==user)
    return "Choices matched"
  else if(cpu=='S'&& user=='W')
    return "cpu"
  else if(cpu=='S'&& user=='G')
    return "user"
  else if(cpu=='W'&& user=='S')
    return "cpu"
  else if(cpu=='W' && user=="G")
    return "cpu"
  else if(cpu=='G' && user=="S")
    return "You lose...hahahaha!!"
  else if(cpu=='G' && user=="W")
    return "user" // no change required
}

let result=game(cpu,user)
document.write(`Your choice:${user} and Opponent choice:${cpu}`)
document.write(`The Winner is ${result}`)   
