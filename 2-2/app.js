let arr = [
        {
        name:"hulk",
        strength:100
        },
        {
        name:"piter",
        strength: 40
       },
        {
        name:"black panter",
        strength:80
       },
        {
        name:"flash",
        strength:50
       },
]

let man = [];

for (let users of arr){
  if(users.strength > 60){
    man.push(users)
  }
}

console.log(man);
