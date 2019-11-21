window.addEventListener("DOMContentLoaded", init);

function init() {
    const urlParams = new
    URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    
    const id = urlParams.get("id");
    const category = urlParams.get("category");
    
    if (search) {
        console.log("search")
        getSearchData();
        
    } else if (id) {
        getSingleEvent();
        
    } else if (category) {
        getCategoryData(category)
    }
    else {
        getFrontpageData();
        
    }
    
    getNavigation()
}

function getNavigation(){
    
    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/categories?per_page=100")
    .then(res => res.json())
    .then(data => {data.forEach(addLink)})
}

function addLink(oneItem) {
    //console.log(oneItem.name)

    if (oneItem.parent === 15 && oneItem.count > 0) {
        const link = document.createElement("a");
        link.textContent = oneItem.name;
        link.setAttribute("href", "category.html?category=" +oneItem.id)
        document.querySelector(".home-header").appendChild(link);
    }
}


function getFrontpageData() {
    //console.log("getData")
    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?per_page=100")
        .then(res => res.json())
        .then(handleData)
}

function getCategoryData(catid) {

    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?_embed&categories=" + catid) //removed 20 after embed&categories
        .then(res => res.json())
        .then(handleData)
}

function getSearchData(){
  const urlParams = new URLSearchParams(window.location.search);
  const search = urlParams.get("search");
  fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event?_embed&search=" +search)
    .then(res=>res.json())
    .then(handleData)
}

function getSingleEvent() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    //console.log(id)

    fetch("https://janstevica.dk/KEA/2SEM/database/wp-json/wp/v2/event/" + id)
        .then(res => res.json())
        .then(showEvent)
}

function handleData(myData) {
    // 1 loop
    //console.log(myData)
    myData.forEach(showEvent)
}


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
    
//    const a = eventCopy.querySelector("a");
//    a.href="sub.html?id"+event.id
//    
//    const content = eventCopy.querySelector("section");
//    content.innerHTML=post.content.rendered;
//    
//    const title = eventCopy.querySelector("h1");
//    publisher.innerHTML=event.title;
//    
//    12 er 

    const addclasses = copy.querySelector(".cardTemplate");
    addclasses.classList.add(event.categories);
   
    
    
   const seemore = copy.querySelector(".readmore");
    seemore.href = `sub.html?id=${event.id}`;
    
//    event.categories.forEach(e => {
//        event.querySelector(".music").href = `search.html?id=${event.categories}`;
//    })
//    const seemusic = copy.querySelector(".music");
//    seemusic.href = `sub.html?id=${event.categories}`;
    
    
	
    document.querySelector(".eventList").appendChild(copy);
    
}


   // document.querySelector(".eventList").appendChild(copy);