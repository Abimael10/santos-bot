$(function() {

	// Alias usados en el chat
	let you = 'Tú';
	let robot = 'Amigo';
	
	// responde lento de 400 a 800 ms
	let delayStart = 400;
	let delayEnd = 800;
	
	// inicialización
	let bot = new chatBot();
	let chat = $('.chat');
	let waiting = 0;
	$('.busy').text(robot + ' está escribiendo...');
	
	//Envía la entrada del usuario y recibe la respuesta del bot
	let submitChat = function() {
	
		let input = $('.input input').val();
		if(input == '') return;
		
		$('.input input').val('');
		updateChat(you, input);
		
		let reply = bot.respondTo(input);
		if(reply == null) return;
		
		let latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busy').css('display', 'block');
		waiting++;
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			} else {
				for(let r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			if(--waiting == 0) $('.busy').css('display', 'none');
		}, latency);
	}
	
	//Agrega una linea nueva al chat
	let updateChat = function(party, text) {
	
		let style = 'you';
		if(party != you) {
			style = 'other';
		}
		
		let line = $('<div><span class="party"></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').text(text);
		
		chat.append(line);
		
		chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});
	
	}
	
	// event binding
	$('.input').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
	$('.input a').bind('click', submitChat);
	
	// Estado inicial del chat
	updateChat(robot, 'Hola. Intenta escribir algo!');

});