// Получить случайную карту с колоды
const getRandomInt = (cards) => {
	let rand = Math.floor(Math.random()*cards.length);
	return cards[rand];
}

// Пустая колода карт
let cards = [];
// Добавление карт в колоду с помощью цикла
for(let i = 0; i < 36; i++){
	cards[i] = i + 1;
}

let card = 0; // Карта, которая будет браться с колоды
let score = 0; // Сумма карт
let counter = 0; // Счётчик для взятия карт
let cardFirst, cardSecond, cardThird, cardFourth, cardFifth; // Нумерация карт

// Достать карту с колоды
const setCard = (cards, table, visCard) => {
	card = getRandomInt(cards);

	visCard.className = "card";

	if(card >= 1 && card <= 4){
		visCard.innerHTML = '6';
		score += 6;
	}
	else if(card >= 5 && card <= 8){
		visCard.innerHTML = '7';
		score += 7;
	}
	else if(card >= 9 && card <= 12){
		visCard.innerHTML = '8';
		score += 8;
	}
	else if(card >= 13 && card <= 16){
		visCard.innerHTML = '9';
		score += 9;
	}
	else if(card >= 17 && card <= 20){
		visCard.innerHTML = '10';
		score += 10;
	}
	else if(card >= 21 && card <= 24){
		visCard.innerHTML = 'B';
		score += 2;
	}
	else if(card >= 25 && card <= 28){
		visCard.innerHTML = 'Д';
		score += 3;
	}
	else if(card >= 29 && card <= 32){
		visCard.innerHTML = 'K';
		score += 4;
	}
	else{
		visCard.innerHTML = 'T';
		score += 11;
	}

	table.append(visCard);
}

// Установить масть карты
// red - пика
// green - буба
// darkviolet - креста
// black - пика
const setCardSuit = (card, visCard) => {
	if(card === 1 || card === 5 || card === 9 || card === 13 || card === 17 || card === 21 || card === 25 || card === 29 || card === 33){
		visCard.style.color = "red";
	}
	else if(card === 2 || card === 6 || card === 10 || card === 14 || card === 18 || card === 22 || card === 26 || card === 30 || card === 34){
		visCard.style.color = "green";
	}
	else if(card === 3 || card === 7 || card === 11 || card === 15 || card === 19 || card === 23 || card === 27 || card === 31 || card === 35){
		visCard.style.color = "darkviolet";
	}
	else{
		visCard.style.color = "black";
	}
}

// Анимации появления карт
const animationCardAppearance = (counter, visCard) => {
	switch(counter){
		case 1:{
			visCard.classList.add("1stCard");
			cardFirst = visCard;
			cardFirst.style.transition = `transform 1000ms`;
			let cardElement = cardFirst;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '25px';
			});
			cardFirst.style.transformOrigin = "50% 100%";
			break;
		}
		case 2:{
			visCard.classList.add("2ndCard");
			cardSecond = visCard;
			cardFirst.style.transformOrigin = "50% 100%";
			cardSecond.style.transformOrigin = "50% 100%";
			cardSecond.style.transition = `transform 1000ms`;
			let cardElementFirst = cardFirst;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '25px'},
				{marginTop: '33px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '33px';
			});
			let cardElement = cardSecond;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '33px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '33px';
			});
			let cardElementSecond = cardSecond;
			let animationForSecond = cardElementSecond.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(10deg)`}], 1000);
			animationForFirst = cardElementFirst.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginRight = '25px';
			});
			cardFirst.style.transform = `rotate(-10deg)`;
			cardSecond.style.transform = `rotate(10deg)`;
			break;
		}
		case 3:{
			visCard.classList.add("3rdCard");
			cardThird = visCard;
			let cardElementFirst = cardFirst;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '33px'},
				{marginTop: '42px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '42px';
			});
			let cardElementSecond = cardSecond;
			let animationForSecond = cardElementSecond.animate([
				{marginTop: '33px'},
				{marginTop: '25px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginTop = '25px';
			});
			let cardElement = cardThird;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '42px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '42px';
			});
			let cardElementThird = cardThird;
			let animationForThird = cardElementThird.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(15deg)`}], 1000);
			animationForSecond = cardElementSecond.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginRight = '25px';
			});
			cardThird.style.transition = `transform 1000ms`;
			cardFirst.style.transformOrigin = "50% 100%";
			cardSecond.style.transformOrigin = "50% 100%";
			cardThird.style.transformOrigin = "50% 100%";
			cardFirst.style.transform = `rotate(-15deg)`;
			cardSecond.style.transform = `rotate(0deg)`;
			cardThird.style.transform = `rotate(15deg)`;
			break;
		}
		case 4:{
			visCard.classList.add("4thCard");
			cardFourth = visCard;
			let cardElementFirst = cardFirst;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '42px'},
				{marginTop: '80px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '80px';
			});
			let cardElementSecond = cardSecond;
			let animationForSecond = cardElementSecond.animate([
				{marginTop: '25px'},
				{marginTop: '33px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginTop = '33px';
			});
			let cardElementThird = cardThird;
			let animationForThird = cardElementThird.animate([
				{marginTop: '42px'},
				{marginTop: '33px'}], 1000);
			animationForThird.addEventListener('finish', function(){
				cardElementThird.style.marginTop = '33px';
			});
			let cardElement = cardFourth;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '80px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '80px';
			});
			let cardElementFourth = cardFourth;
			let animationForFourth = cardElementFourth.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(25deg)`}], 1000);
			animationForThird = cardElementThird.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForThird.addEventListener('finish', function(){
				cardElementThird.style.marginRight = '25px';
			});
			cardFourth.style.transition = `transform 1000ms`;
			cardFirst.style.transformOrigin = "50% 100%";
			cardSecond.style.transformOrigin = "50% 100%";
			cardThird.style.transformOrigin = "50% 100%";
			cardFourth.style.transformOrigin = "50% 100%";
			cardFirst.style.transform = `rotate(-30deg)`;
			cardSecond.style.transform = `rotate(-10deg)`;
			cardThird.style.transform = `rotate(10deg)`;
			cardFourth.style.transform = `rotate(30deg)`;
			break;
		}
		case 5:{
			visCard.classList.add("5thCard");
			cardFifth = visCard;
			let cardElementFirst = cardFirst;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '80px'},
				{marginTop: '97px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '97px';
			});
			let cardElementSecond = cardSecond;
			let animationForSecond = cardElementSecond.animate([
				{marginTop: '33px'},
				{marginTop: '42px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginTop = '42px';
			});
			let cardElementThird = cardThird;
			let animationForThird = cardElementThird.animate([
				{marginTop: '33px'},
				{marginTop: '25px'}], 1000);
			animationForThird.addEventListener('finish', function(){
				cardElementThird.style.marginTop = '25px';
			});
			let cardElementFourth = cardFourth;
			let animationForFourth = cardElementFourth.animate([
				{marginTop: '80px'},
				{marginTop: '42px'}], 1000);
			animationForFourth.addEventListener('finish', function(){
				cardElementFourth.style.marginTop = '42px';
			});
			let cardElement = cardFifth;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '97px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '97px';
			});
			let cardElementFifth = cardFifth;
			let animationForFifth = cardElementFifth.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(40deg)`}], 1000);
			animationForFourth = cardElementFourth.animate([
				{marginRight: '-100px'},
				{marginRight: '5px'}], 1000);
			animationForFourth.addEventListener('finish', function(){
				cardElementFourth.style.marginRight = '5px';
			});
			animationForFirst = cardElementFirst.animate([
				{marginRight: '25px'},
				{marginRight: '5px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginRight = '5px';
			});
			cardFifth.style.transition = `transform 1000ms`;
			cardFirst.style.transformOrigin = "50% 100%";
			cardSecond.style.transformOrigin = "50% 100%";
			cardThird.style.transformOrigin = "50% 100%";
			cardFourth.style.transformOrigin = "50% 100%";
			cardFifth.style.transformOrigin = "50% 100%";
			cardFirst.style.transform = `rotate(-40deg)`;
			cardSecond.style.transform = `rotate(-15deg)`;
			cardThird.style.transform = `rotate(0deg)`;
			cardFourth.style.transform = `rotate(15deg)`;
			cardFifth.style.transform = `rotate(40deg)`;
			break;
		}
		default: break;
	}
}

// Добавить карту
const addCard = () => {
	counter++;
	if(counter > 5){
		alert("Больше нельзя брать карты!");
		return false;
	}

	let table = document.getElementById("spaceCard");
	let visCard = document.createElement('div');

	setCard(cards, table, visCard);
	setCardSuit(card, visCard);

	let idNum = card;
	let position = cards.indexOf(idNum);
	delete cards.splice(position, 1);

	animationCardAppearance(counter, visCard);

	let delayButton = document.getElementById("addCard");
	if(delayButton.disabled){
		return;
	}
	delayButton.disabled = true;
	delayButton.classList.add("disabled")
	setTimeout(function(){
		delayButton.disabled = false;
		delayButton.classList.remove("disabled")
	}, 1000);
}

// Получить результат игры
const myResult = () => {
	if(score === 21){
		alert(`Вы выиграли! У вас: ${score}`);
		location.reload();
	}
	else if(score === 0){
		alert("У вас нет карт...");
	}
	else if(score < 21){
		let diff = 21 - score;
		alert(`Вам не хватило для победы: ${diff} очка(-ов)...`);
		location.reload();
	}
	else if(score > 21){
		let diff = score - 21;
		alert(`Вы проиграли! У вас перебор в: ${diff} очка(-ов)...`);
		location.reload();
	}
}

// Перезагрузить страницу
const aNew = () => {
	location.reload();
}