function chatBot() {
	
	// Entrada actual del usuario
	this.input;
	
	/**
	 * Respond To
	 * 
	 * Devolver nada si se pasa la respuesta
	 * Devolver una string por una respuesta
	 * Devolver un arreglo de strings por multiples respuestas
	 * 
	 * @param input - input chat string
	 * @return respuesta del chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hey|hola|buen dia)(\\s|!|\\.|$)'))
			return "um... hola?";
		
		if(this.match('que tal') || this.match('como estas'))
			return "todo bien!";
		
		if(this.match('haha') || this.match('jaja'))
			return "Qué es tan divertido??";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "no seas tan negativo :(";
		
		if(this.match('(bye|adios|me voy)'))
			return ["Adiós amigo", "Cuidate"];
		
		if(this.match('(eso es todo?|torpe|estupido|bruto)'))
			return ["hey solo soy la prueba de un simple concepto!", "puedes ayudarme a ser mas inteligente bro!"];
		
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
