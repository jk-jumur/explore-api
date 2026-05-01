const loadPost =()=>{
     const url ="https://jsonplaceholder.typicode.com/posts"

     fetch(url)
     .then (res=>res.json())
     .then(data=>{
        //  console.log(data);
        displayPosts(data);
     });

};
        // array of object

   const displayPosts = (posts)=>{
    //  console.log(posts);
    // for(let i =0; i<posts.length; i++){
    //       console.log(posts[i]);
    // }

    // for(let post of posts){
    //       console.log(post);
    // }


    // 1.Get  the Container

    const postContainer = document.getElementById("post-container");
    console.log(postContainer);

    //2. loop iterate
     posts.forEach(post=>{
        //    console.log(post.body);
        //   console.log(post.title)
        //    console.log(post.id)

        //3. create  HTML element
        const li = document.createElement("li");
        li.innerText = post.title;
        // console.log(li);

        //4. add li into container
        postContainer.appendChild(li)
    })
}