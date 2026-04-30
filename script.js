
// const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
      
const loadData = () => {
       fetch("https://jsonplaceholder.typicode.com/todos/1")
        //promise of response
      .then((response) => response.json())
      //promise of json data
      .then((data) => console.log(data));
};


const loadPost=()=>{
       const url = "https://jsonplaceholder.typicode.com/posts";

       fetch(url)
       .then((res)=>res.json())
       .then((json) => {
            console.log(json);
            displayPost(json);
       });
};


const displayPost =(posts)=>{
      //  console.log(posts);
       posts.forEach(post=>{
           console.log(post);  
       })

            

            
       
}




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