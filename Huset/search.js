window.addEventListener("DOMContentLoaded", getData);

function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    //console.log("getData")
    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?_embed&search="+search)
    .then(res=>res.json())
    .then(handleData)
    
function getNavigation(){
    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/categories?per_page=100")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(addLink)
    })
}
    
function handleData(myData){
    console.log("myData")
    // 1 loop
    myData.forEach(showEvent)
}

          

function showEvent(event) {
    //console.log(event);
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

    
    
    
    
    
	
    document.querySelector(".eventList").appendChild(copy)
    



