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
    cat1.className = "cat-icon"
    cat1.alt = `${i.category_1}`;

    let cat2 = document.createElement('img');
    cat2.src = `./assets/${i.category_2}.svg`;
    cat2.className = "cat-icon"
    cat2.alt = `${i.category_2}`;

    let cat3 = document.createElement('img');
    cat3.src = `./assets/${i.category_3}.svg`;
    cat3.className = "cat-icon"
    cat3.alt = `${i.category_3}`;
    
    let cardHead = document.createElement('div');
    cardHead.className = "row";
    cardHead.appendChild(cat1);
    cardHead.appendChild(cat2);
    cardHead.appendChild(cat3);
    


    

    let cardSubHead = document.createElement('h6');
    cardSubHead.className = "card-subtitle mb-5 text-muted"
    cardSubHead.textContent = i.description;

    cardBody.appendChild(cardHead);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubHead);

    if (i.contact_name){
      let contact = document.createElement('p');
      contact.textContent = `Contact: ${i.contact_name}`
      cardBody.appendChild(contact);}

    if (i.contact_number){
      let phone = document.createElement('p');
      phone.textContent = `Call: ${i.contact_number}`
      cardBody.appendChild(phone);}

    if (i.contact_email){
      let email = document.createElement('p');
      email.textContent = `Email: ${i.contact_email}`
      cardBody.appendChild(email);}

    if (i.url){
    let cardButton = document.createElement('a');
    cardButton.href = i.url;
    cardButton.className = "btn btn-primary mb-3";
    cardButton.textContent = "Visit resource"
    cardButton.target = "_blank";
    cardBody.appendChild(cardButton);}

    

    
    

    card.appendChild(cardBody);

    fragment.appendChild(card)
    column.appendChild(fragment);

    let borp = document.getElementById('borp');
    borp.appendChild(column)
})
