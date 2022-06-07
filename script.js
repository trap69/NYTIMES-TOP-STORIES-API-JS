const body = document.body;
console.log(body);
/// get article_div
const article_div = document.getElementById('article_div');
/// Create a Btn
const  create_btn = document.createElement('button');
create_btn.innerHTML = "Get articles";
create_btn.type = "submit";
create_btn.className = "btn formBtn";
article_div.appendChild(create_btn);
//~~~~ Start of CARD element ~~~~
const select_card_div = document.querySelector('#card-div');
// Create div with card class and set style for it
const create_card = document.createElement('div');
create_card.classList.add('card');
create_card.setAttribute('style','widht: 18rem;');
select_card_div.append(create_card);
// Create img element INSIDE card-div and set its attributes 
const  create_card_img = document.createElement('img');
create_card_img.classList.add('card-img-top');
create_card_img.setAttribute('src','#');
create_card.append(create_card_img);
// Create div element INSIDE card-div
const create_card_body = document.createElement('div');
create_card_body.classList.add('card-body');
create_card.append(create_card_body);
// Create h5 element INSIDE card-body
const create_card_title = document.createElement('h5');
create_card_title.classList.add('card-title');
create_card_title.textContent = 'Card  title';
create_card.append(create_card_title);
//  Create  p element INSIDE card-body
const create_card_p = document.createElement('p');
create_card_p.classList.add('card-text');
create_card_p.textContent = 'Card  p TEXT';
create_card.append(create_card_p);
//  Create a element INSIDE card-body
const create_card_a = document.createElement('a');
create_card_a.classList.add('btn', 'btn-primary');
create_card_a.textContent = 'Link to article';
create_card.append(create_card_a);
//~~~~End of  CARD element~~~~



const td_task_text = document.createElement('p');
// td_task_text.setAttribute('class','btn btn-outline-dark');
// td_task_text.textContent = 'sveiki';
select_card_div.append(td_task_text);


// const myBtn = document.querySelector('button');
// const myPlace = document.getElementById('myPlace');    
// const myImg = document.createElement('img');  myPlace.appendChild(myImg); 
// myImg.className="img-thumbnail"; 

// const body = document.body;

// const content = document.querySelector('.content');
// const para = document.createElement('p');
// para.textContent = 'Sveiki visi puikiai veikia.';
// content.appendChild(para);

// const input = document.createElement('input');
// const button = document.createElement('button');
// const div = document.createElement('div');

// button.innerText= "Submit";
// body.append(div);

// content.appendChild(input);
// content.appendChild(button);
