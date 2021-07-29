function toggleBulb(chk) {
	var bulb = document.getElementById('bulb');
	var btOn = document.getElementById('btOn');
	var btOff = document.getElementById('btOff');
	if(chk) {
		bulb.src = '../img/on.png';
		btOn.style.display = 'none';
		btOff.style.display = 'inline-block';
	}
	else {
		bulb.src = '../img/off.png';
		btOn.style.display = 'inline-block';
		btOff.style.display = 'none';
	}
}

function toggleBulb2(chk) {
	var bulbOn = document.getElementById('bulbOn');
	var bulbOff = document.getElementById('bulbOff');
	if(chk) {
		bulbOn.style.display = 'none';
		bulbOff.style.display = 'inline-block';
	}
	else {
		bulbOn.style.display = 'inline-block';
		bulbOff.style.display = 'none';
	}
}