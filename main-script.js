
// array of objects
let cardsArr = [
    {
        'id':'0',
        'title':'egypt tangabia',
        'description':'Denatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/01.jpg',
        'comments':'22'
    },
    {
        'id':'1',
        'title':'olling phisotip',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/02.jpg',
        'comments':'13'
    },
    {
        'id':'2',
        'title':'cortia dyna',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/03.jpg',
        'comments':'8'
    },
    {
        'id':'3',
        'title':'sysne of dubai',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/04.jpg',
        'comments':'7'
    },
    {
        'id':'4',
        'title':'egypt tangabia',
        'description':'Denatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/05.jpg',
        'comments':'22'
    },
    {
        'id':'5',
        'title':'olling phisotip',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/06.jpg',
        'comments':'13'
    },
    {
        'id':'6',
        'title':'cortia dyna',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/07.jpg',
        'comments':'8'        
    },
    {
        'id':'7',
        'title':'sysne of dubai',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/08.jpg',
        'comments':'7'
    },
    {
        'id':'8',
        'title':'egypt tangabia',
        'description':'Denatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/09.jpg',
        'comments':'22'
    },
    {
        'id':'9',
        'title':'olling phisotip',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/10.jpg',
        'comments':'13'
    },
    {
        'id':'10',
        'title':'cortia dyna',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/11.jpg',
        'comments':'8'
    },
    {
        'id':'11',
        'title':'sysne of dubai',
        'description':'Penatibus et magnis dis parturient montes, nascetur ridiculus mus', 
        'img':'./assets/images/12.jpg',
        'comments':'7'
    },
]



let cardsLength = cardsArr.length;

for(var i = 0; i<cardsLength; i++){

    let placesCards = `
        <div class="col-md-3 mb-4">
            <div class="card rounded-0 border-0 text-center" data-index="${i}">
                <img src="${cardsArr[i]['img']}">
                <div class="card-body">
                    <h6 class="card-title titleFont ">${cardsArr[i]['title']}</h6>
                    <p class="card-text">${cardsArr[i]['description']}</p>
                    <div class="card-footer border-0">
                        <i class="fa-regular fa-calendar fa-sm"><span class="ms-2">Aug 5, 2013</span></i>
                        <i class="fa-regular fa-comment fa-sm"><span class="ms-2">${cardsArr[i]['comments']} Comments</span></i>
                    </div>
                </div>
            </div>
        </div>  
    `
    $("#defaultCard").append(placesCards)
}
// debugger;
 // ---------------------------------------------Pop-up-----------------------------------------------------------------

let popUp = `
 <div class="popup-content">
     <div class="container popup-container">
         <div class="popup-close-btn">
             <button class="fa-solid fa-xmark"></button>
         </div>
         <div class="row">
             <div class="col-md-5">
                 <img src="asd" id="popup-image" style="width: 100%;">
             </div>
             <div class="col-md-7">
                 <h4 id="pop-up-title"></h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem beatae repellat libero in corporis amet eaque vitae itaque maxime. Nesciunt saepe temporibus repellat cum similique nostrum impedit? Pariatur, quibusdam?</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem beatae repellat libero in corporis amet eaque vitae itaque maxime. Nesciunt saepe temporibus repellat cum similique nostrum impedit? Pariatur, quibusdam?</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem beatae repellat libero in corporis amet eaque vitae itaque maxime. Nesciunt saepe temporibus repellat cum similique nostrum impedit? Pariatur, quibusdam?</p>
             </div>
         </div>
     </div>
 </div>
`    

 
$(".pop-up").html(popUp);


$(".card").on("click",function(){

    let index = parseInt($(this).data('index'));

    openPopup(index);
})

$(".popup-close-btn button").on("click",function(){
    closePopup();
})







function closePopup(){
    document.getElementById('PopUp').style.display = 'none';
    document.body.style.overflowY = 'visible';
}
function openPopup(index){
    document.getElementById('PopUp').style.display = 'block';
    document.getElementById("popup-image").src = cardsArr[index]["img"];
    document.getElementById("pop-up-title").innerHTML = cardsArr[index]["title"];
    document.body.style.overflowY = 'hidden';
}