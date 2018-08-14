window.onload = function () {

	var imagesBan = document.querySelectorAll('.banner img'),
		numberBtn = document.querySelectorAll('.btn_banner');

	//console.log(numberBtn);

	for (var i = 0; i < numberBtn.length; i++) {
		var number = numberBtn[i];
		number.addEventListener('click', getClick);
	};

	function getClick(){
		for (var i = 0; i < imagesBan.length; i++) {
			imagesBan[i].classList.remove('vision');
		};
		imagesBan[this.innerText - 1].classList.add('vision');
	};

	setInterval(function() {
 		Slider()
 	}, 4000);

	var i = 0;
	function Slider(images) {
		this.images = imagesBan;
		this.images[i].classList.remove('vision');
		i++;

		if (i >= this.images.length) {
			i = 0;
		}
		this.images[i].classList.add('vision');	

	};

	var inputArea = document.querySelectorAll('aside input');

	for (var i = 0; i < inputArea.length; i++) {
		inputArea[i].addEventListener('click', getInput);
	};

	console.log(inputArea);

	function getInput(){
		this.value = '';
	};
}