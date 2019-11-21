const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)


fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event/"+id)
    .then(res=>res.json())
    .then(function(data){
    //data.forEach(buildCategory)
    
//    data.forEach(showId)
    showId(data)
})

//function buildCategory(data){}


function showId(event) {
//    console.log(event);
    console.log(event);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    const title = copy.querySelector("h1");
    const imgSrc = event.image.guid;
    title.textContent = event.title.rendered;
    const date = copy.querySelector(".event_date");
    date.textContent = event.event_date;
    const price = copy.querySelector(".event_price");
    price.textContent = event.event_price;
    const description = copy.querySelector(".short_description");
    description.textContent = event.short_description;
    
    copy.querySelector("img").setAttribute("src", imgSrc);
    
    document.querySelector(".eventList").appendChild(copy);
    
    }