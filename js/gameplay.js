if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	let buttonsField = document.querySelector('.buttonsField');
	buttonsField.style.flexDirection = "column";
	for(let i = 0; i < buttonsField.children.length; i++) {
		buttonsField.children[i].style.fontSize = "36px";
		buttonsField.children[i].style.padding = "20px 40px";
		buttonsField.children[i].style.margin = "20px";
	}
}

// Получить случайную карту с колоды
const getRandomInt = (cards) => {
	let rand = Math.floor(Math.random()*cards.length);
	return cards[rand];
}
// Перемешать колоду
const shuffle = (cards) => {
	for(let i = cards.length - 1; i > 0; i--){
		let j = Math.floor(Math.random() * (i + 1));
		[cards[i], cards[j]] = [cards[j], cards[i]];
	}
	return cards;
}

// Пустая колода карт
let cards = [];
// Добавление карт в колоду с помощью цикла
for(let i = 0; i < 36; i++){
	cards[i] = i + 1;
}
shuffle(cards);

let cardPlayer = 0, cardBot = 0, card; // Карта, которая будет браться с колоды
let scorePlayer = 0, scoreBot = 0; // Сумма карт
let counterPlayer = 0, counterBot = 0; // Счётчик для взятия карт
let diffPlayer = 0, diffBot = 0; // Разница от 21 для вычисления победителя
let cardFirstPlayer, cardSecondPlayer, cardThirdPlayer, cardFourthPlayer, cardFifthPlayer,
	cardFirstBot, cardSecondBot, cardThirdBot, cardFourthBot, cardFifthBot; // Нумерация карт

// Достать карту с колоды
const setCard = (cards, table, visCard, isBot = false) => {
	// Определение карты игрока или бота
	if(isBot){
		cardBot = getRandomInt(cards);
		visCard.className = "card_bot";
		card = cardBot;
	}
	else {
		cardPlayer = getRandomInt(cards);
		visCard.className = "card_player";
		card = cardPlayer;
	}

	// Определение карты
	if(card >= 1 && card <= 4){
		if(isBot)
			scoreBot += 6;
		else{
			visCard.innerHTML = '6';
			scorePlayer += 6;
		}
	}
	else if(card >= 5 && card <= 8){
		if(isBot)
			scoreBot += 7;
		else{
			visCard.innerHTML = '7';
			scorePlayer += 7;
		}
	}
	else if(card >= 9 && card <= 12){
		if(isBot)
			scoreBot += 8;
		else{
			visCard.innerHTML = '8';
			scorePlayer += 8;
		}
	}
	else if(card >= 13 && card <= 16){
		if(isBot)
			scoreBot += 9;
		else{
			visCard.innerHTML = '9';
			scorePlayer += 9;
		}
	}
	else if(card >= 17 && card <= 20){
		if(isBot)
			scoreBot += 10;
		else{
			visCard.innerHTML = '10';
			scorePlayer += 10;
		}
	}
	else if(card >= 21 && card <= 24){
		if(isBot)
			scoreBot += 2;
		else{
			visCard.innerHTML = 'B';
			scorePlayer += 2;
		}
	}
	else if(card >= 25 && card <= 28){
		if(isBot)
			scoreBot += 3;
		else{
			visCard.innerHTML = 'Д';
			scorePlayer += 3;
		}
	}
	else if(card >= 29 && card <= 32){
		if(isBot)
			scoreBot += 4;
		else{
			visCard.innerHTML = 'K';
			scorePlayer += 4;
		}
	}
	else{
		if(isBot)
			scoreBot += 11;
		else{
			visCard.innerHTML = 'T';
			scorePlayer += 11;
		}
	}
	// Добавить карту на стол
	table.append(visCard);

	// Убрать карту из колоды
	let idNum = card;
	let position = cards.indexOf(idNum);
	delete cards.splice(position, 1);
}

// Установить масть карты
const setCardSuit = (card, visCard) => {
	if(card === 1 || card === 5 || card === 9 || card === 13 || card === 17 || card === 21 || card === 25 || card === 29 || card === 33){
		visCard.innerHTML += '<br/>&#9829'; // чирва
		visCard.style.color = "red";
	}
	else if(card === 2 || card === 6 || card === 10 || card === 14 || card === 18 || card === 22 || card === 26 || card === 30 || card === 34){
		visCard.innerHTML += '<br/>&#9830'; // буба
		visCard.style.color = "red";
	}
	else if(card === 3 || card === 7 || card === 11 || card === 15 || card === 19 || card === 23 || card === 27 || card === 31 || card === 35){
		visCard.innerHTML += '<br/>&#9827'; // креста
		visCard.style.color = "black";
	}
	else{
		visCard.innerHTML += '<br/>&#9824'; // пика
		visCard.style.color = "black";
	}
}

// Анимации появления карт бота
const animationCardAppearanceBot = (counter, visCard) => {
	switch(counter){
		case 1:{
			visCard.classList.add("1st_card_bot");
			cardFirstBot = visCard;
			cardFirstBot.style.transition = `transform 1000ms`;
			let cardElementBot = cardFirstBot;
			let animation = cardElementBot.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElementBot.style.marginTop = '25px';
			});
			cardFirstBot.style.transformOrigin = "50% 100%";
			break;
		}
		case 2:{
			visCard.classList.add("2nd_card_bot");
			cardSecondBot = visCard;
			cardSecondBot.style.transition = `transform 1000ms`;
			let cardElementBot = cardSecondBot;
			let animationBot = cardElementBot.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animationBot.addEventListener('finish', function(){
				cardElementBot.style.marginTop = '25px';
			});
			let cardElementFirstBot = cardFirstBot;
			let animationForFirstBot = cardElementFirstBot.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForFirstBot.addEventListener('finish', function(){
				cardElementFirstBot.style.marginRight = '25px';
			});
			break;
		}
		case 3:{
			visCard.classList.add("3rd_card_bot");
			cardThirdBot = visCard;
			let cardElementBot = cardThirdBot;
			let animationBot = cardElementBot.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animationBot.addEventListener('finish', function(){
				cardElementBot.style.marginTop = '25px';
			});
			let cardElementSecondBot = cardSecondBot;
			let animationForSecondBot = cardElementSecondBot.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForSecondBot.addEventListener('finish', function(){
				cardElementSecondBot.style.marginRight = '25px';
			});
			cardThirdBot.style.transition = `transform 1000ms`;
			break;
		}
		case 4:{
			visCard.classList.add("4th_card_bot");
			cardFourthBot = visCard;
			let cardElementBot = cardFourthBot;
			let animationBot = cardElementBot.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animationBot.addEventListener('finish', function(){
				cardElementBot.style.marginTop = '25px';
			});
			let cardElementThirdBot = cardThirdBot;
			let animationForThirdBot = cardElementThirdBot.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForThirdBot.addEventListener('finish', function(){
				cardElementThirdBot.style.marginRight = '25px';
			});
			cardFourthBot.style.transition = `transform 1000ms`;
			break;
		}
		case 5:{
			visCard.classList.add("5th_card_bot");
			cardFifthBot = visCard;
			let cardElementBot = cardFifthBot;
			let animationBot = cardElementBot.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animationBot.addEventListener('finish', function(){
				cardElementBot.style.marginTop = '25px';
			});
			let cardElementFourthBot = cardFourthBot;
			let animationForFourthBot = cardElementFourthBot.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForFourthBot.addEventListener('finish', function(){
				cardElementFourthBot.style.marginRight = '25px';
			});
			cardFifthBot.style.transition = `transform 1000ms`;
			break;
		}
		default: break;
	}
}

// Анимации появления карт игрока
const animationCardAppearancePlayer = (counter, visCard) => {
	switch(counter){
		case 1:{
			visCard.classList.add("1st_card");
			cardFirstPlayer = visCard;
			cardFirstPlayer.style.transition = `transform 1000ms`;
			let cardElement = cardFirstPlayer;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '25px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '25px';
			});
			cardFirstPlayer.style.transformOrigin = "50% 100%";
			break;
		}
		case 2:{
			visCard.classList.add("2nd_card");
			cardSecondPlayer = visCard;
			cardFirstPlayer.style.transformOrigin = "50% 100%";
			cardSecondPlayer.style.transformOrigin = "50% 100%";
			cardSecondPlayer.style.transition = `transform 1000ms`;
			let cardElementFirst = cardFirstPlayer;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '25px'},
				{marginTop: '33px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '33px';
			});
			let cardElement = cardSecondPlayer;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '33px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '33px';
			});
			let cardElementSecond = cardSecondPlayer;
			let animationForSecond = cardElementSecond.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(10deg)`}], 1000);
			animationForFirst = cardElementFirst.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginRight = '25px';
			});
			cardFirstPlayer.style.transform = `rotate(-10deg)`;
			cardSecondPlayer.style.transform = `rotate(10deg)`;
			break;
		}
		case 3:{
			visCard.classList.add("3rd_card");
			cardThirdPlayer = visCard;
			let cardElementFirst = cardFirstPlayer;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '33px'},
				{marginTop: '42px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '42px';
			});
			let cardElementSecond = cardSecondPlayer;
			let animationForSecond = cardElementSecond.animate([
				{marginTop: '33px'},
				{marginTop: '25px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginTop = '25px';
			});
			let cardElement = cardThirdPlayer;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '42px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '42px';
			});
			let cardElementThird = cardThirdPlayer;
			let animationForThird = cardElementThird.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(15deg)`}], 1000);
			animationForSecond = cardElementSecond.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginRight = '25px';
			});
			cardThirdPlayer.style.transition = `transform 1000ms`;
			cardFirstPlayer.style.transformOrigin = "50% 100%";
			cardSecondPlayer.style.transformOrigin = "50% 100%";
			cardThirdPlayer.style.transformOrigin = "50% 100%";
			cardFirstPlayer.style.transform = `rotate(-15deg)`;
			cardSecondPlayer.style.transform = `rotate(0deg)`;
			cardThirdPlayer.style.transform = `rotate(15deg)`;
			break;
		}
		case 4:{
			visCard.classList.add("4th_card");
			cardFourthPlayer = visCard;
			let cardElementFirst = cardFirstPlayer;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '42px'},
				{marginTop: '80px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '80px';
			});
			let cardElementSecond = cardSecondPlayer;
			let animationForSecond = cardElementSecond.animate([
				{marginTop: '25px'},
				{marginTop: '33px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginTop = '33px';
			});
			let cardElementThird = cardThirdPlayer;
			let animationForThird = cardElementThird.animate([
				{marginTop: '42px'},
				{marginTop: '33px'}], 1000);
			animationForThird.addEventListener('finish', function(){
				cardElementThird.style.marginTop = '33px';
			});
			let cardElement = cardFourthPlayer;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '80px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '80px';
			});
			let cardElementFourth = cardFourthPlayer;
			let animationForFourth = cardElementFourth.animate([
				{transform: `rotate(0deg)`},
				{transform: `rotate(25deg)`}], 1000);
			animationForThird = cardElementThird.animate([
				{marginRight: '-100px'},
				{marginRight: '25px'}], 1000);
			animationForThird.addEventListener('finish', function(){
				cardElementThird.style.marginRight = '25px';
			});
			cardFourthPlayer.style.transition = `transform 1000ms`;
			cardFirstPlayer.style.transformOrigin = "50% 100%";
			cardSecondPlayer.style.transformOrigin = "50% 100%";
			cardThirdPlayer.style.transformOrigin = "50% 100%";
			cardFourthPlayer.style.transformOrigin = "50% 100%";
			cardFirstPlayer.style.transform = `rotate(-30deg)`;
			cardSecondPlayer.style.transform = `rotate(-10deg)`;
			cardThirdPlayer.style.transform = `rotate(10deg)`;
			cardFourthPlayer.style.transform = `rotate(30deg)`;
			break;
		}
		case 5:{
			visCard.classList.add("5th_card");
			cardFifthPlayer = visCard;
			let cardElementFirst = cardFirstPlayer;
			let animationForFirst = cardElementFirst.animate([
				{marginTop: '80px'},
				{marginTop: '97px'}], 1000);
			animationForFirst.addEventListener('finish', function(){
				cardElementFirst.style.marginTop = '97px';
			});
			let cardElementSecond = cardSecondPlayer;
			let animationForSecond = cardElementSecond.animate([
				{marginTop: '33px'},
				{marginTop: '42px'}], 1000);
			animationForSecond.addEventListener('finish', function(){
				cardElementSecond.style.marginTop = '42px';
			});
			let cardElementThird = cardThirdPlayer;
			let animationForThird = cardElementThird.animate([
				{marginTop: '33px'},
				{marginTop: '25px'}], 1000);
			animationForThird.addEventListener('finish', function(){
				cardElementThird.style.marginTop = '25px';
			});
			let cardElementFourth = cardFourthPlayer;
			let animationForFourth = cardElementFourth.animate([
				{marginTop: '80px'},
				{marginTop: '42px'}], 1000);
			animationForFourth.addEventListener('finish', function(){
				cardElementFourth.style.marginTop = '42px';
			});
			let cardElement = cardFifthPlayer;
			let animation = cardElement.animate([
				{marginTop: '-500px'},
				{marginTop: '97px'}], 1000);
			animation.addEventListener('finish', function(){
				cardElement.style.marginTop = '97px';
			});
			let cardElementFifth = cardFifthPlayer;
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
			cardFifthPlayer.style.transition = `transform 1000ms`;
			cardFirstPlayer.style.transformOrigin = "50% 100%";
			cardSecondPlayer.style.transformOrigin = "50% 100%";
			cardThirdPlayer.style.transformOrigin = "50% 100%";
			cardFourthPlayer.style.transformOrigin = "50% 100%";
			cardFifthPlayer.style.transformOrigin = "50% 100%";
			cardFirstPlayer.style.transform = `rotate(-40deg)`;
			cardSecondPlayer.style.transform = `rotate(-15deg)`;
			cardThirdPlayer.style.transform = `rotate(0deg)`;
			cardFourthPlayer.style.transform = `rotate(15deg)`;
			cardFifthPlayer.style.transform = `rotate(40deg)`;
			break;
		}
		default: break;
	}
}

// Добавление карт бота
const addCardsBot = () => {
	window.setInterval(function(){
		counterBot++;
		if(scoreBot < 20 && counterBot < 6){
			let tableBot = document.getElementById("cards_bot");
			let visCard = document.createElement('div');

			setCard(cards, tableBot, visCard, true);

			animationCardAppearanceBot(counterBot, visCard);
		}
	}, 2000);
}

// Добавить карту
const addCard = () => {
	counterPlayer++;
	if(counterPlayer > 5){
		alert("Больше нельзя брать карты!");
		return false;
	}

	let table = document.getElementById("cards_player");
	let visCard = document.createElement('div');

	setCard(cards, table, visCard);
	setCardSuit(card, visCard);

	animationCardAppearancePlayer(counterPlayer, visCard);

	let delayButton = document.getElementById("add_card");
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
const result = (isWithBot = false) => {
	if(scorePlayer === 0){
		alert("У вас нет карт...");
	}
	else if(isWithBot){
		if(scoreBot < 20 && counterBot < 5){
			alert("Оу, не торопитесь. Бот ещё не все карты достал.");
		}
		else if((scorePlayer === 21) && (scoreBot === 21)){
			alert("Это невероятно!!! Вы оба выиграли!");
			location.reload();
		}
		else if(scorePlayer === 21){
			alert(`Вы выиграли!\nВы набрали ${scorePlayer} очко.\nА бот - ${scoreBot}.`);
			location.reload();
		}
		else if(scoreBot === 21){
			alert(`Бот выиграл!\nОн набрал ${scoreBot} очко. А вы - ${scorePlayer}.`);
			location.reload();
		}
		else if((scorePlayer < 21) && (scoreBot > 21)){
			alert("Вы победили!");
			location.reload();
		}
		else if((scorePlayer > 21) && (scoreBot < 21)){
			alert("Бот победил!");
			location.reload();
		}
		else if((scorePlayer > scoreBot) && (scorePlayer < 21)){
			alert("Вы победили!");
			location.reload();
		}
		else if((scorePlayer < scoreBot) && (scoreBot < 21)){
			alert("Бот победил!");
			location.reload();
		}
		else if((scorePlayer === scoreBot) && (scorePlayer < 21) && (scoreBot < 21)){
			alert("Вы оба набрали одинаковое кол-во.");
			location.reload();
		}
		else if((scorePlayer > 21) === (scoreBot > 21)){
			alert("Вы оба проиграли!");
			location.reload();
		}
		else if(scorePlayer === scoreBot){
			alert("Вы набрали одинаковое кол-во.");
			location.reload();
		}
	}
	else{
		if(scorePlayer === 21){
			alert(`Вы выиграли! У вас: ${scorePlayer}`);
			location.reload();
		}
		else if(scorePlayer < 21){
			let diff = 21 - scorePlayer;
			alert(`Вам не хватило для победы: ${diff} очка(-ов)...`);
			location.reload();
		}
		else if(scorePlayer > 21){
			let diff = scorePlayer - 21;
			alert(`Вы проиграли! У вас перебор в: ${diff} очка(-ов)...`);
			location.reload();
		}
	}
}

// Перезагрузить страницу
const aNew = () => {
	location.reload();
}