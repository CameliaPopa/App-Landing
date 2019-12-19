/* Silder*/
$(document).ready(function(){
  		$('.customer-logos').slick({
    			slidesToShow: 4,
    			slidesToScroll: 1,
    			autoplay: true,
    			autoplaySpeed: 1000,
    			arrows: false,
    			dots: false,
    			pauseOnHover: false,
    			responsive: [{
    			     breakpoint: 768,
    				        settings: {
    					           slidesToShow: 3
    				        }
    			}, {
    				breakpoint: 520,
    				settings: {
    				    slidesToShow: 2
    				}
    		}]
  		});
});


function slideUp(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all 2s ease-in-out";
  elem.style.height = "0px";
}
function slideDown(el) {
  var elem = document.getElementById(el);
  elem.style.transition = "all 2s ease-in-out";
  elem.style.height = "400px";
}
