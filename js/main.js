// Ricreiamo un feed social aggiungendo 
// al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti
//  che rappresentano ciascun post. Ogni 
//  post dovrà avere le informazioni necessarie 
//  per stampare la relativa card: nome autore, 
//  foto profilo, data in formato americano, 
//  testo del post, immagine (non tutti i post
//      devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi 
// servizio di placeholder ad es. Unsplash
//  (https://unsplash.it/300/300?image=<id>)
// - Prendendo come riferimento il layout 
// di esempio presente nell’html, stampiamo i 
// post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile 
// con incremento del counter dei likes.


//Creo l'array di oggetti per i feed
const feed = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      text: 'Ue belli come va tutto bene?',
      image: 'work.jfif',
      profile: 'sand.jfif',
      data: '6 mesi fa'
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      text: '#work #business #sonolamigliore #facciosoldi',
      image: 'work.jfif',
      profile: 'sand.jfif',
      data: '12 mesi fa'
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      text: 'Buongiorno mondo',
      image: 'work.jfif',
      profile: 'sand.jfif',
      data: '4 mesi fa'
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      text: 'Una felice giornata a tutti',
      image: 'work.jfif',
      profile: 'sand.jfif',
      data: '1 mesi fa'
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      text: 'Che bello stare su facebook',
      image: 'work.jfif',
      profile: 'sand.jfif',
      data: '5 mesi fa'
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      text: 'Mi compro delle belle scarpe',
      image: 'work.jfif',
      profile: 'sand.jfif',
      data: '10 mesi fa'
    },
  ];

  console.log(feed);

  //richiamo il container che conterrà il feed 
  let container_feed = document.getElementById('container');

  //aggiungo la classe al container 
  container_feed.classList.add("posts-list");

  console.log(container_feed);

  //con un for in creo 6 feed da inserire nel container 

  for (let key in feed) {

     //creo i div che contengono le team card
     let feed_card = document.createElement("div");

     //aggiungo la classe alle card
     feed_card.classList.add("post");
     
     //inserisco feed card in container
     container_feed.append(feed_card);

     //creo l'header del post
     let post_header = document.createElement("div");

     //aggiungo l'header nelle card
     feed_card.append(post_header);

     //aggiungo la classe all'header del post
     post_header.classList.add("post__header");

     //creo il div post meta 
     let post_meta = document.createElement("div");

     //aggiungo la classe al div post meta
     post_meta.classList.add("post-meta");

     //aggiungo post meta all'header del post
     post_header.append(post_meta);

     //creo il div post-meta__icon
     let post_meta_icon= document.createElement("div");

     //aggiungo la classe al div post meta icon
     post_meta_icon.classList.add("post-meta__icon");

     //aggiungo post meta icon all'interno del meta
     post_meta.append(post_meta_icon);

     //creo l'elemento immagine per l'immagine profilo 
     let img_profile = document.createElement("img");

     //aggiungo la classe all'elemento immagine profilo
     img_profile.classList.add("profile-pic");

     //aggiungo il src all'elemento img di profilo 
     img_profile.src = feed[key].profile;

     //aggiungo l'elemento immagine all'interno di post meta icon
     post_meta_icon.append(img_profile);

     //creo il div post meta data 
     let post_meta_data= document.createElement("div");

     //aggiungo la classe al div post meta data 
     post_meta_data.classList.add("post-meta__data");

     //aggiungo il div post meta data al div post meta
     post_meta.append(post_meta_data);

     //creo il div post meta author 
     let post_meta_author= document.createElement("div");

     //aggiungo la classe al div post meta author
     post_meta_author.classList.add("post-meta__author");

     //aggiungo post meta author al div post meta data
     post_meta_data.append(post_meta_author);

     //aggiungo l'autore del post al div post meta author 
     post_meta_author.innerHTML = feed[key].name;

     //creo il div post meta time 
     let post_meta_time= document.createElement("div");

     //aggiungo la classe al div post meta time 
     post_meta_time.classList.add("post-meta__time");

     //aggiungo post meta time al div post meta data 
     post_meta_data.append(post_meta_time);

     //aggiungo la data a post meta time
     post_meta_time.innerHTML = feed[key].data;

    //INIZIO MAIN POST
     //creo il div post text 
     let post_text= document.createElement("div");

     //aggiungo la classe post text al div post text
     post_text.classList.add("post__text");

     //aggiungo il div post text al feed 
     feed_card.append(post_text);

     //aggiunto il testo al post text 
     post_text.innerHTML = feed[key].text;

     //creo div  main image
     let post_image= document.createElement("div");

     //aggiungo la classe post image al div post image
     post_image.classList.add("post__image");

     //aggiungo il div post image al div feed 
     feed_card.append(post_image);

     //creo elemento immagine da inserire in main image
     let img_post= document.createElement("img");

     //associo il src all'img
     img_post.src = feed[key].image;


     //aggiungo l'immagine al post image
     post_image.append(img_post);

     //INIZIO FEED FOOTER
     
     //creo il div post footer 
     let post_footer= document.createElement("div");

     //aggiungo la classe post footer al div post footer
     post_footer.classList.add("post__footer");

     //aggiungo il div post footer al feed
     feed_card.append(post_footer);

     //creo il div likes 
     let likes= document.createElement("div");

     //aggiungo la classe likes al div likes 
     likes.classList.add("likes");
     likes.classList.add("js-likes");

     //aggiungo il div likes al footer
     post_footer.append(likes);

     //creo il div likes cta 
     let likes_cta= document.createElement("div");

     //aggiungo la classe likes cta al div likes cta
     likes_cta.classList.add("likes__cta");

     //aggiungo il div likes al footer
     likes.append(likes_cta);

     //creo il bottone like
     let likes_btn= document.createElement("a");

     //aggiungo la classe like button js like button al btn like
     likes_btn.classList.add("like-button");
     likes_btn.classList.add("js-like-button");

     //aggiungo il bottone al div like cta 
     likes_cta.append(likes_btn);

     //creo l'elemento icona 
     let like_icon= document.createElement("i");

     //aggiungo le classi dell'icona all'icona
     like_icon.classList.add("like-button__icon");
     like_icon.classList.add("fas");
     like_icon.classList.add("fa-thumbs-up");

     //aggiungo l'icona all'interno del link
     likes_btn.append(like_icon);

     //creo lo span mi piace 
     let like_span= document.createElement("span");

     //aggiungo la classe like button label al like span
     like_span.classList.add("like-button__label");

     //scrivo dentro lo span 
     like_span.innerHTML = " Mi piace";

     //aggiungo lo span al bottone
     likes_btn.append(like_span);

     //creo il div likes counter 
     let like_counter= document.createElement("div");

     //aggiungo la classe likes counter al counter 
     like_counter.classList.add("likes__counter");

     //aggiungo like counter al footer
     likes.append(like_counter);

     //creo l'elemento b
     let counter = 0;

     //aggiungo elemento b al div counter
     like_counter.append(counter);

    console.log(counter);


    like_counter.innerHTML = `Piace a 0 persone `;

     console.log(likes_cta);

     likes_cta.addEventListener("click", function(){
        counter += 1;
        like_counter.innerHTML=`Piace a ${counter} persone`;
      });

  }

  //bonus 
//   3. Al click su un pulsante “Mi Piace” di un post,
//    incrementare il contatore di like al post e cambiare 
//    colore al testo del bottone.






























     

  