const cards = [
    {
        "id": "card1",
        "author": "Alexander Nguyen",
        "title": "The resume that got a software engineer a $300,000 job at Google.",
        "description": "1-page. Well-formatted.",
        "cardImgUrl": "https://medium.com/gitconnected/the-resume-that-got-a-software-engineer-a-300-000-job-at-google-8c5a1ecff40f?source=explore---------0-109--------------------1d3e2474_e514_4026_a2fb_5c6b8789a5f7-------15",
        "authorImgUrl": "https://medium.com/@alexcancode?source=explore---------0-109--------------------1d3e2474_e514_4026_a2fb_5c6b8789a5f7-------15",
        "date": "Jun 1",
        "Likes": "17.3K",
        "comments": "274",
        "status": "active",
        "article": "https://medium.com/gitconnected/the-resume-that-got-a-software-engineer-a-300-000-job-at-google-8c5a1ecff40f?source=explore---------0-109--------------------1d3e2474_e514_4026_a2fb_5c6b8789a5f7-------15"
    },
    {
        "id": "card2",
        "author": "Derek Johnson",
        "title": "I’m Unemployed for Over Two Years (as a software engineer)",
        "description": "In 2022, I worked on a contract as a software engineer at Apple. Apple dissolved our entire team right before the 2022 tech recession…",
        "cardImgUrl": "https://medium.com/@derekcardwell/im-unemployed-for-over-two-years-as-a-software-engineer-bd1ad6f95a54?source=explore---------1-109--------------------1d3e2474_e514_4026_a2fb_5c6b8789a5f7-------15",
        "authorImgUrl": "https://medium.com/@derekcardwell/im-unemployed-for-over-two-years-as-a-software-engineer-bd1ad6f95a54?source=explore---------1-109--------------------1d3e2474_e514_4026_a2fb_5c6b8789a5f7-------15",
        "date": "Jun 1",
        "Likes": "6.4K",
        "comments": "159",
        "status": "active"
    },
    {
        "id": "card3",
        "author": "Tari Ibaba in Coding Beauty",
        "title": "5 amazing new JavaScript features in ES15 (2024)",
        "description": "5 juicy ES15 features with new functionality for cleaner and shorter JavaScript code in 2024.",
        "cardImgUrl": "https://medium.com/coding-beauty/es15-javascript-features-fc2d1f7a00ce?source=explore---------0-109--------------------95896178_c496_4ee4_9d2b_83bb8f3a71de-------15",
        "authorImgUrl": "https://medium.com/@tariibaba?source=explore---------0-109--------------------95896178_c496_4ee4_9d2b_83bb8f3a71de-------15",
        "date": "Jun 2",
        "Likes": "2.3K",
        "comments": "15",
        "status": "active"
    }
]

console.log(cards);
console.log(cards.length);

cards.map((cards) => {
    console.log(cards.id);
    console.log(cards.author);
    console.log(cards.title);
    console.log(cards.description);
    console.log(cards.cardImgUrl);
    console.log(cards.authorImgUrl);
    console.log(cards.date);
    console.log(cards.Likes);
    console.log(cards.comments);
    console.log(cards.status);
});

const postsTag = document.querySelector(".posts");

cards.map((cards) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
    <div class="card" id="${cards.id}">
    <img src="${cards.cardImgUrl}" alt="${cards.title}" />
    <h2>${cards.title}</h2>
    <p>${cards.description}</p>
    <div class="author">
        <img src="${cards.authorImgUrl}" alt="${cards.author}" />
            <p>${cards.author}</p>
        </div>
        <div class="stats">
            <p>${cards.date}</p>
            <p>${cards.Likes}</p>
            <p>${cards.comments}</p>
        </div>
    </div>
    `;
    postsTag.appendChild(postElement);
})


