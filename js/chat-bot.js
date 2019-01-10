function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hey|hola|hi|hello|buen dia)(\\s|!|\\.|$)'))
			return "um... hola?";
		
		if(this.match('que tal') || this.match('como estas') || this.match('sup') || this.match('how are you'))
			return "todo bien!";
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao') || this.match('jaja'))
			return "Qué es tan divertido?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "no seas tan negativo :(";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later|adios|me voy)'))
			return ["alright, see you around", "good teamwork!", "Adiós amigo", "Cuidate", "Take care!"];
		
		if(this.match('(dumb|stupid|is that all|eso es todo|torpe|estupido|bruto)'))
			return ["hey i'm just a proof of concept", "you can make me smarter if you'd like", "hey solo soy la prueba de un simple concepto", "puedes ayudarme a ser mas inteligente"];
		
		if(this.input == 'noop')
			return;
		
		return input + "... Qué?";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
