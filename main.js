/*---------------
    FUNCTION
 ----------------*/
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
 
    



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postList = document.querySelector(".posts-list");
let post = document.querySelector("#tpl-post").content.cloneNode(true);



for (i=0 ; i < posts.length ; i++){
    const element = posts[i];
    post = document.querySelector("#tpl-post").content.cloneNode(true);
    if(element.author.image !== null){
        //inserire le iniziali 
        post.querySelector(".profile-pic").src = element.author.image;
    }else {
        
    }
    post.querySelector(".post-meta__author").innerHTML = element.author.name;
    
    post.querySelector(".post-meta__time").innerHTML = italianDate(element.created);
    post.querySelector(".post__text").innerHTML = element.content;
    post.querySelector(".post__image img").src = element.media;
    post.querySelector(".js-likes-counter").innerHTML = element.likes;
    const btnLike = post.querySelector(".like-button");
    let like = post.querySelector(".js-likes-counter");
    btnLike.setAttribute("data-postid", element.id);
    btnLike.addEventListener("click",
        function(){
            if(btnLike.classList.contains("like-button--liked")){
                btnLike.classList.remove("like-button--liked");
                like.innerHTML = -- element.likes;  
            } else {
                btnLike.classList.add("like-button--liked");  
                 like.innerHTML = ++ element.likes;  
            }
            console.log(this);
        }
    )
    postList.append(post);
}

//funzione per invertire la data 
function italianDate (date){
    return date.split("-").reverse().join("/");
}


function getInitials(name){
    const nameArray = name.split(" ");
    let i = 0;
    let initials = "";
    while(i < nameArray.length && i < 2){
        initials += nameArray [i][0];
        i++;
    }
    return initials ; 
}




// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo gi?? cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.