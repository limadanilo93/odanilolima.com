(function() {
	emailjs.init('user_PzbrbeRNn8a09ZIbOszij');
})();

window.onload = function() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
		// gerar ID de 5 digitos
		this.contact_number.value = Math.random() * 100000 | 0;
		
		emailjs.sendForm('service_lpxnk8e', 'template_tyi74yo', document.getElementById('contact-form'))
			.then(function() {
				console.log('SUCCESS!');
				alert('Enviado com sucesso!')
			}, function(error) {
				console.log('FAILED...', error);
				alert('Algo deu errado! Tente Novamente')
			});
			document.getElementById('contact-form').reset();
	});
}