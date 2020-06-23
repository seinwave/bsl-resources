// importing data
function include(file) { 
  var script  = document.createElement('script'); 
  script.src  = file; 
  script.type = 'text/javascript'; 
  script.defer = true; 
  document.getElementsByTagName('head').item(0).appendChild(script); 
} 
include('./data/data.js')


// putting data into an array
let dataList = [];
dataList = [...data]

dataList.map(i => {
    let fragment = document.createDocumentFragment();
    let column = document.createElement('div')
    column.className = "col-md-4"

    
    let card = document.createElement('div')
    card.className = "card mb-2"

    let cardBody = document.createElement('div');
    cardBody.className = "card-body";
    cardBody.style = "transform: rotate(0)";

    let cardTitle = document.createElement('h5');
    cardTitle.className = "card-title mt-4";
    cardTitle.textContent = i.title;

    let cat1 = document.createElement('img');
    cat1.src = `./assets/${i.category_1}.svg`;
    cat1.alt = `${i.category_1}`;
    
    let cardHead = document.createElement('div');
    cardHead.className = "row";
    cardHead.appendChild(cat1);
    cardHead.appendChild(cardTitle);


    

    let cardSubHead = document.createElement('h6');
    cardSubHead.className = "card-subtitle mb-5 text-muted"
    cardSubHead.textContent = i.description;

    let cardButton = document.createElement('a');
    cardButton.href = i.url;
    cardButton.className = "btn btn-primary mb-3";
    cardButton.textContent = "Visit resource"
    cardButton.target = "_blank";

    cardBody.appendChild(cardHead);
    cardBody.appendChild(cardSubHead);
    cardBody.appendChild(cardButton);

    card.appendChild(cardBody);

    fragment.appendChild(card)
    column.appendChild(fragment);

    let borp = document.getElementById('borp');
    borp.appendChild(column)
})
