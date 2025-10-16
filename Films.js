const recherche = document.getElementById('taper');
const films = document.querySelectorAll('.selection li');

recherche.addEventListener('input', () => {
	
	films.forEach(film => {
		const titre = film.textContent;
		
		if(titre.includes(recherche.value)) {
			film.style.display ='';
		}
		else{
			film.style.display='none';
		}
	});
});

