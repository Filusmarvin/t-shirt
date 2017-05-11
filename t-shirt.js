
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

// Changing the Shirt Sz Box =================================================

function mainXl(event){
	smallXl = event.target.parentElement.parentElement;
	bigXl = smallXl.closest('.shirt').querySelector('.sz');
	// console.log (bigXl , 'it worked !');
 let size = event.target.innerText;
	bigXl.innerText = size
}
let lis = document.querySelectorAll('li')
for ( i = 0; i < lis.length; i++) {
	let li = lis[i];
li.addEventListener('click', mainXl);
}

// display shopping cart prices
var showType = document.querySelector('.one');
var showPrice = document.querySelector('.two');
var cartIcon = document.querySelector('.theCart').parentElement.nextElementSibling;
var cartType = cartIcon.querySelector('.type').innerHTML;
var cartPrice = cartIcon.querySelector('.prices').innerHTML;
var prices = []

function moveToCart1 (){
		if (prices.length < 8){
		let node = document.createElement("li");
		let word = document.createTextNode('Save the Trees $29')
		node.appendChild(word);
		document.getElementById('list').appendChild(node);
		prices.push(29);
		console.log(prices);
	}
}

function moveToCart2 (){
	if (prices.length < 8){
		let node = document.createElement("li");
		let word = document.createTextNode('Nature Lover $19')
		node.appendChild(word);
		document.getElementById('list').appendChild(node);
		prices.push(19);
		console.log(prices)
	}
}

function moveToCart3 (){
	if (prices.length < 8){
		let node = document.createElement("li");
		let word = document.createTextNode('Forest Walk $39')
		node.appendChild(word);
		document.getElementById('list').appendChild(node);
		prices.push(39);
		console.log(prices);
	}
}

function add(a, b) {
    return a + b;
}
function theTotal (){
	let totals = prices.reduce(add, 0);
	console.log(prices.reduce(add, 0));
	let placeTotal = document.getElementById("totalAmount")
	placeTotal.innerHTML = totals;
	discount()
}

function discount() {
	if (prices.length >= 5){
		let totals = document.getElementById('totalAmount').textContent;
		let display = document.getElementById('discount')
		let discount = totals * .05;
		let afterDiscount = document.getElementById('afterDiscount');
		console.log(discount);
	  display.innerHTML = 'Discount ' + discount;
		let newPrice = totals - discount;
		afterDiscount.innerHTML = 'New Price: ' + newPrice;
	}
}
