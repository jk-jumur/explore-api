
// const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
      
const loadData = () => {
       fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
};




// console.log("Explore API");

// const person = {
//       name: "JK",
//       fruit: "avocado",
//       dish: "chaomin",
//       friends: ["alim", "kalim", "lamim"],
//       isRich: true,
// };
// console.log(person);
// // JSON -> JS object with Notation
// //JSON.stringify -> JSON
// //JSON perse -> object 

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const perseJSON = JSON.parse(personJSON);
// console.log(perseJSON);