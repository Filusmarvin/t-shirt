let buttons = document.querySelectorAll('button')
	for (let i = 0; i < buttons.length; i++) {
		let buttton = buttons[i];
		button.addEventListener('click' , function(){
			let whereTheNumberGoes = document.querySelector('.one')
			whereTheNumberGoes.textContent = i + 1;
		});
	}
<!-- front shirt blue -->
function rotating(){
	let element = document.querySelector('.frontblue');
	element.style.transform = "rotateY(90deg)";
}

let button = document.querySelector('.firsticon');
button.addEventListener('click', rotating);

<!-- Backshirt blue -->
function backrotation(){
	let element = document.querySelector('.backblue');
	element.style.transform = "rotateY(0deg)";
}
button.addEventListener('click', backrotation);

<!-- front shirt pink -->
function rotating2(){
	let element = document.querySelector('.frontpink');
	element.style.transform = "rotateY(90deg)";
}

let buttondos = document.querySelector('.secondicon');
buttondos.addEventListener('click', rotating2);

<!-- Backshirt pink -->
function backrotation2(){
	let element = document.querySelector('.backpink');
	element.style.transform = "rotateY(0deg)";
}
buttondos.addEventListener('click', backrotation2);





<!-- front shirt yellow -->
function rotating3(){
	let element = document.querySelector('.frontyellow');
	element.style.transform = "rotateY(90deg)";
}

let buttontrio = document.querySelector('.thirdicon');
buttontrio.addEventListener('click', rotating3);

<!-- Backshirt yellow -->
function backrotation3(){
	let element = document.querySelector('.backyellow');
	element.style.transform = "rotateY(0deg)";
}

buttontrio.addEventListener('click', backrotation3);

function itemInShoppingCart(event){
	 cartPicture = event.target.parentElement.parentElement;
	 console.log('I know what I am doing');
};
// Changing the Shirt Sz Box =================================================

function mainXl(event){
	smallXl = event.target.parentElement.parentElement
	bigXl = smallXl.closest('.shirt').querySelector('.sz');
	console.log (bigXl , 'it worked !');
 let size = event.target.innerText;
	bigXl.innerText = size
}
let lis = document.querySelectorAll('li')
for ( i = 0; i < lis.length; i++) {
	let li = lis[i];
li.addEventListener('click', mainXl);
}
