//114. JavaScript Object Find Index in Array

let users = [
    { id: 1, name: 'Alice' },   //0
    { id: 2, name: 'Bob' },     //1
    { id: 3, name: 'Charlie' }   //2
];

let user=users.findIndex(users=>users.name==="Charlie")
console.log(user)     //output 2