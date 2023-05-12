$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .menu, .header__button').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });
    $('.menu__link').click(function(event){
        $('.header__burger, .menu, .header__button').removeClass('active');
        $('body').removeClass('lock');
    });
});

$(document).ready(function() {

	$('.faq__block--title').click(function(event) {
		if($('.faq__block').hasClass('one')){
			$('.faq__block--title').not($(this)).removeClass('active');
			$('.faq__block--text').not($(this).next()).slideUp(300);

		}
		$(this).toggleClass('active').next().slideToggle(300);

	});

});

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)





