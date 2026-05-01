const loadPost = () =>{
     const url = "https://jsonplaceholder.typicode.com/posts"

     fetch(url)
     .then(res=> res.json())
     .then(data=>{
          displayPosts(data);
     })
}


// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}



const displayPosts = (posts)=>{
     //Get the container and empty the container

      const postContainer = document.getElementById("post-container");
      postContainer.innerHTML = "";

      //2. loop iterate 
     posts.forEach((post) => {

         //3. create HTML element
          const postCard = document.createElement("div");
          //innerHTML 
          postCard.innerHTML = `<div class="post-card">
               <h2> ${post.title}</h2>
               <p> ${post.body}</p>
          </div>`

          //add  to the container
           postContainer.append(postCard);
     });

}

loadPost();