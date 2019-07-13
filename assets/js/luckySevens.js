function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function playLuckySevens(){
	
	var startingBet = Number(document.forms["luckySevens"]["bet"].value);
	var funds = startingBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var highestAmount = 0;
	var rolls = 0;
	var highestRolls = 0;
	
	if(funds<=0){
		alert("Please bet at least $1 to play.");
    end
	}
	else{
		while(funds > 0){
			firstDie = rollDice();
			secondDie = rollDice();
			diceSum = firstDie + secondDie;
			rolls++;
			if(diceSum != 7){
				funds--;
				console.log("lost");
			}
			else{
				funds += 4;
				if(funds > highestAmount){
					highestAmount += (funds-highestAmount);
					highestRolls = rolls;
				}
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = ( "$" + startingBet);
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("highestAmount").innerText = ("$" + highestAmount);
	document.getElementById("highestRolls").innerText = highestRolls;
		return false;
}