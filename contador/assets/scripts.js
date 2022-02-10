let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');


document.addEventListener("load",VerificaNumber)


function VerificaNumber(){
	if(CURRENT_NUMBER < 0)
	{
		CURRENT_NUMBER.style.color ='red';
	}
}


var btna = document.getElementById('bta');
btna.addEventListener("click", function(event){

	alert(event.target);}
)


var refIn = function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

var refDe = function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}


