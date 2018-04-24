// state = 1 -> A-1
// state = 2 -> A-2
// state = 3 -> B-1
// state = 4 -> B-2
// state = 5 -> A-1 same side

state = 1; //always start with an A-1 bet
registry = 5; //need to win 5 units to win a 'coup'
bet = 5; //bet always starts out as 5 aka 1 unit
limit = 25;
var winButton = document.getElementById('winbtn');
winButton.addEventListener('click', winfunction);

var loseButton = document.getElementById('losebtn');
loseButton.addEventListener('click', losefunction);

function changeStrat(isWin){
  if(isWin == true){
    if(state == 1||state == 5){
      state = 1;
      //if you win an A-1 bet continue to make another A-1 bet
    }
    else if(state == 2){
      state = 1;
      //if you win an A-2 bet change bet to A-1 bet
    }
    else if(state == 3){
      //if you win a B-1 bet ...
    }
    else if(state == 4){
      state = 5;
      //if you win a B-2 bet change bet to A-1 same side bet
    }

  }
  else{
    if(state == 1||state == 5){
      state = 2;
      //if you lose an A-1 bet make an A-2 bet
    }
    else if(state == 2){
      //if you lose an A-2 bet make a B-1 bet
      state = 3;
    }
    else if(state == 3){
      //if you lose a B-1 bet make a B-2 bet
      state = 4;
    }
    else if(state == 4){
      //if you lose a B-2 bet make an A-1 bet
      state = 1;
    }
  }
}

function changeBet(isWin){
  if(isWin == true){
      registry = registry - bet;
      if(registry > limit){
        //bet the limit because you dont want to lose all the eggs in the basket
        bet = limit;
      }
      else if(registry > 0){
        //bet the registry
        bet = registry;
      }
      else{
        //reset registry and bet because you won the coup
        registry = 5;
        bet = 5;
      }
  }
  else{
      registry = registry + bet;
      bet = 5;
  }

}

function winfunction(){
  changeStrat(true);
  changeBet(true);
  console.log("State:" + state);
  console.log("Registry:" + registry);
  console.log("Bet:" + bet);
}

function losefunction(){
  changeStrat(false);
  changeBet(false);
  console.log("State:" + state);
  console.log("Registry:" + registry);
  console.log("Bet:" + bet);
}
