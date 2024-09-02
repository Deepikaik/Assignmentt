//111. How to Find Object from Array of Object in JavaScript

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

let user= users.find(user=>user.name==="Bob")
console.log(user)

let user1=users.find(user1=>user1.id===1)
console.log(user1)