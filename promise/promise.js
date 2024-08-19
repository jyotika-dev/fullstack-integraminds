//promise
const promise = new Promise((resolve, reject) => {
    const isSuccessful = true;
    if (isSuccessful) {
        resolve('Promise is resolved Successfully');
    } else {
        reject('Promise is rejected');
    }
});
promise.then((data) => {
    console.log(data);
})
    .catch((error) => {
        console.log(error);
    }
    );

//async-await
async function fetchData() {
    console.log("🚀 ~ fetchData ~ fetchData ~ Loading..");
    document.querySelector(".loading").style.display = "block";
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    const posts = await response.json();
    // const dḁta = await response.json();
    console.log("🚀 ~ fetchData ~ posts:", posts);

    posts.map((post) => {
        const postElement = document.querySelector("div");
        postElement.classList.add("card");
        postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        document.querySelector(".posts").appendChild(postElement);
    })


}
fetchData();