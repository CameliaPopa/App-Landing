/* button learn color*/
function mouseOver() {
    document.getElementById("demo").style.backgroundColor = "#FFFFFF";
    document.getElementById("demo").style.color = "#000000";
}

function mouseOut() {
    document.getElementById("demo").style.backgroundColor = "#EC2855";
    document.getElementById("demo").style.color = "#FFFFFF";
}

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
