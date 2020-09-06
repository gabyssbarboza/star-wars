
var itemsMenu = [
    {
        "name":  "Escolha seu lado",
        "href": "choose-side"
    },
    {
        "name":  "Personagens",
        "href": "personagens"
    },
    {
        "name":  "Planetas",
        "href": "planetas"
    },
]

var headerList = document.getElementById("nav-list")



itemsMenu.forEach((item) => {
    
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.href = '#' + item.href;
    link.innerText = item.name;
    li.appendChild(link)
    headerList.appendChild(li);
})



function scrllSmoth(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
      
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'

        })
}

const linksInternos = document.querySelectorAll("#nav-list a[href^='#'")
linksInternos.forEach((item) => {
    item.addEventListener("click", scrllSmoth)
})


const initSliderProductImages = function () {
    console.log('slick mobile')
   
      var selector = $('.choose-side');
      var optionsMobile = {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        speed: 300,
        infinite: true, 
        slidesToScroll: 1
      };
    

      if (window.matchMedia("(max-width: 767px)").matches) {
        selector.not(".slick-initialized").slick(optionsMobile);
      }

  }

  initSliderProductImages();


$('.screen-welcome').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    speed: 400,
    // autoplay: true,
    slidesToScroll: 1,
    dots: true

});


const initLogosEffect = function () {
   
    

      if (window.matchMedia("(min-width: 767px)").matches) {
        


        ScrollReveal().reveal('.darth-logo', {
            easing: 'ease-in',
            reset: true,
            delay: 800,
            origin: 'rigth',
            distance: '60px'
        });
        
        ScrollReveal().reveal('.republic-logo', {
            easing: 'ease-in',
            reset: true,
            delay: 500,
            origin: 'left',
            distance: '60px'
        });
        
      }

  }

  initLogosEffect();




// var caracters = document.getElementById("personagens").getElementsByTagName('img');



const personagens =  [
    {
    "name": "Chew", 
    "img": "./personagens/chew.jpg",
    "sobre": "lorem1"
    },
    {  "name": "Leia", 
        "img": "./personagens/leia.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {  "name": "Obi", 
        "img": "./personagens/obi.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {
        "name": "Solo", 
        "img": "./personagens/solo.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {
        "name": "Yoda", 
        "img": "./personagens/yoda.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {  
        "name": "Palpa", 
        "img": "./personagens/palpa.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {
        "name": "Sith", 
        "img": "./personagens/sith.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {
        "name": "Soldier", 
        "img": "./personagens/soldier.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
    {
        "name": "Darth", 
        "img": "./personagens/darth.jpg",
        "sobre": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a efficitur lorem. Maecenas vehicula maximus quam nec congue. Aenean ipsum lectus, convallis ac libero in, porta porttitor libero. Maecenas accumsan a risus vel blandit. Duis feugiat convallis enim sed fringilla. Cras posuere venenatis ante ac congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rhoncus auctor justo non tempus. Sed ut bibendum nunc. Morbi sodales laoreet mauris, sed scelerisque ex rutrum quis. Ut eu nunc nisl."
    },
   
]


var modal = document.getElementById("myModal");


personagens.forEach((item) => {
       var div = document.querySelector('#personagens');
       var img = document.createElement('img');
       img.src = item.img;
       img.id = item.name;
       div.appendChild(img);

       img.addEventListener('click', () => {
        var modalText = document.querySelector(".modal-text");
        var modalTitle = document.querySelector(".modal-title");
        modal.style.display = 'block';
        modalText.innerText = item.sobre;
        modalTitle.innerText = item.name;

       })
    
})

// var close = document.querySelector(".close");
// close.addEventListener('clcik', () => {
//     modal.style.display = 'none'
// })

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    document.querySelector("body").style.overflow = 'auto';
  }



async function chamarModal() {
    document.querySelector("body").style.background = 'red';

    var modal = document.getElementById("myModal");
    var modalText = document.querySelector(".modal-text");
    modal.style.display = 'block';

    // infos.forEach((item, index) => {
    //     modalText.innerText = item[i];
    // })

    const url = `https://swapi.dev/api/people/${i}`;
    const response = await fetch(url);
    const body = await response.json();
    console.log(body)
    modalText.innerText = body.name;

}




// Array.from(caracters).forEach((item, index) => {


//         for(var i = 0; i < caracters.length; i++){
//             var modalText = document.querySelector(".modal-text");
//             console.log(modalText)
//             modalText.innerText = item.id;
//         }

//         item.id = index;
//         item.addEventListener("click", event => {
//             console.log("hi" + index)
//         })
// })

