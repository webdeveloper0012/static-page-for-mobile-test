const navSlide = () => {
	const burger = document.querySelector('.x-Toggle');
	const nav = document.querySelector('.xLink-2');
	const navLinks = document.querySelectorAll('.xLink-2 li');




	navLinks.forEach((link, index) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			burger.classList.toggle('x-Transform');
			nav.classList.toggle('x-Active');
			navLinks.forEach(setStyleLink)
		})
	});

	burger.addEventListener('click', () => {
    	// Toggle Nav
		nav.classList.toggle('x-Active');
		
		if (nav.classList.contains('fullw')) {
			nav.classList.remove('fullw');
			nav.classList.add('noth');
		} else {
			nav.classList.remove('noth');
			nav.classList.add('fullw');
		}
		
		// animate navlinks
		navLinks.forEach(setStyleLink);
		// burger animation
		burger.classList.toggle('x-Transform');
	});
}

	function setStyleLink(el, index) {
		if (el.style.animation) {
		   el.style.animation = '';
		} else { 
			el.style.animation = `NavLinkFade 0.4s ease forwards ${index / 7 + 0.4}s`;
			
		}
} 
$(".xLink-2 li a").on("click" ,function(){
	var element = $(this);
	window.location.href =  $(element).attr("href");
});
navSlide();






