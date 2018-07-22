window.onload = function () {
			document.getElementById('mySlides').src = "img/car_img1.png";
			var last_img="im1";
			setInterval(myFunction, 4000);
			function myFunction() {

				if(last_img=="im5"){
					last_img="im1";
					document.getElementById('mySlides').src = "img/car_img1.png";
				}
				else if(last_img=="im1"){
					last_img="im2";
					document.getElementById('mySlides').src = "img/car_img2.png";
				}
				else if(last_img=="im2"){
					last_img="im3";
					document.getElementById('mySlides').src = "img/car_img3.png";
				}
				else if(last_img=="im3"){
					last_img="im4";
					document.getElementById('mySlides').src = "img/car_img4.png";
				}
				else if(last_img=="im4"){
					last_img="im5";
					document.getElementById('mySlides').src = "img/car_img5.png";
				}
			}
	}