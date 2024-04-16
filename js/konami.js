var switchState = document.getElementById('secret');

switchState.addEventListener('click', function(switchState){
	switchState.target.classList.toggle('secreton');
})

let keys = {
				37: "left",
				38: "up",
				39: "right",
				40: "down",
				65: "a",
				66: "b"
			};

let konamiCode = ["up", "up", "down", "down", "left", "right", "left", "right", "b", "a"];

document.addEventListener("keydown", checkCode, false);

let keyCount = 0;
let timerID;

function checkCode(event){
		console.log(event.keyCode);
		let keyPressed = keys[event.keyCode];

		if(keyPressed === konamiCode[keyCount]){
			keyCount++;
			window.clearTimeout(timerID);
			timerID = window.setTimeout(resetKeyState, 1000);
			if(keyCount === konamiCode.length){
				cheatCodeActivated();
				resetKeyState();
			}
		}
		else {
			resetKeyState();
		}
	}

function cheatCodeActivated(){
		//alert("Yuuuuuuhhhhh let's goooooo");
		let options = 'statusbar=no, height=680, width=680';
		window.open('https://linktr.ee/clhumphrey', 'Find Me at These Places', options);
	}

function resetKeyState(){
		console.log("State Reset...");
		keyCount = 0;
		window.clearTimeout(timerID);
	}
