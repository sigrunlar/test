//function init(){
//    const urlParams =new URLSearchParams(window.location.search);
//    const search = urlParams.get("search");
//    const id = urlParams.get("");
//}
//
//    if(search){
//        getSearchData();
//        }else if(id){
//            getSingleGenre();
//        } else {
//            getFrontPageData
//        }
//
//function getSearchData (){
//    const urlParams = new URLSearchParams(window.location.search);
//    const search = urlParams.get("search");
//    
//    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?_embed&search="+search)
//    .then(res=>res.json())
//    .then(handleData)
//}
//
//function getFrontPageData (){
//    
//    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?_embed&search="+search)
//    .then(res=>res.json())
//    .then(handleData)
//}
//
//function getSingleGenre (){
//    
//    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?_embed&search="+id)
//    .then(res=>res.json())
//    .then(handleData)
//}
    
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id)


fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/categories")
    .then(res=>res.json())
    .then(function(data){
    //data.forEach(buildCategory)
    data.forEach(showEvent)
})

function buildCategory(data){
    /*const section = document.createElement("section");
    const header = document.createElement("h1");
    header.textContent=data;
    section.appendChild(header);
    document.querySelector("body").appendChild(section);
    console.log(data)*/
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

    
    
    
    
    
	
    document.querySelector(".eventList").appendChild(copy);
    
}


   // document.querySelector(".eventList").appendChild(copy);