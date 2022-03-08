//issue notes
//after win, deck keeps dealing until hit play again - impliment veronicas disable buttons method after player/dealer have reached 21


window.addEventListener('DOMContentLoaded', function() {
    // this adds the event listener to our browser window, allowing us to see our work on the browser screen
    })
    
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    //this is to set up my suits array
    
    var deck = [];
    //this is setting the deck to an empty array, which will allow us to pull in random cards
    
    var playerHand = document.querySelector('#player-hand');
    //this is to display the players cards
    
    var dealerHand = document.querySelector('#dealer-hand');
    //this is to display the dealers cards
    
    var dealerHandPoints = document.querySelector('#dealer-points');
    //this is to display the numeric points for the cards next to the dealer name
    
    var playerHandPoints = document.querySelector('#player-points');
    //this is to display the numberic points for the cards next to the player name
    
    var deal = document.querySelector('#deal-button');
    //this allows the deck to deal out the cards
    
    var hit = document.querySelector('#hit-button');
    //this allows the player to get another card
    
    var stand = document.querySelector('#stand-button');
    //the stand button allows the player to indicate that they do not wish to draw another card
    
    var playAgain = document.querySelector('#again-button');
    //this allows the player to play another game without having to refresh the page and lose their win/loss count
    
    
    


    //the block of code below is responsible for the section that counts how many cards are left and keeps track of wins/losses. This needs to be styled, because right now it is just plain text
    
    var names = document.querySelectorAll('.player-name2'); 
    //this is for the player name in the upper box that keeps track of wins/losses/cards left
    
    var playerScoreShown = document.querySelector('.player-score-shown') 
    //this is for the tracking the score of the player. If you take away this variable, then it will break not only the score counter but also the play again button. 

    
    var dealerScoreShown = document.querySelector('.dealer-score-shown')
    //this is for the tracking the score of the dealer. If you take away this variable, then it will break not only the score counter but also the play again button. 
    
    var cardsLeft = document.querySelector('.cards-left-shown')
    //this is to document how many cards are left. If you take away this variable, you will not be able to play the game because it will essentially remove all of the cards from the deck.
    
    var initialPlayerHand = document.createElement('img'); 
    //this creates the image element for the players starting hand, but further code will be needed to display it to the user. See below.
    
    var initialDealerHand = document.createElement('img');
    //this creates the image element for the dealers starting hand, but further code will be needed to display it to the user. See below.
    
    var dealerHandList = [];
    //this sets the dealer hand to an empty array
    
    var playerHandList = [];
    //this sets the players hand to an empty array

    var playerPoints = 0;
    //this sets the players initial points to 0
    var dealerPoints = 0;
    //this sets the dealers initial points to 0
    var playerScore = 0;
    //in the upper box where the score is being kept, this starts the players score off at 0
    var dealerScore = 0;
    //in the upper box where the score is being kept, this starts the dealers score off at 0
    var cardAmount = 52;
    //this sets the card amount to 52, as that is how many cards we have in our deck
    
    
    function getCardImage() {
        for (var i = 0; i < suits.length; i++) {
            for (var a = 1; a < 14; a++) {
                var card = {};
                //the card variable is set to an empty object so that the object may be called in. See below:

                card.rank = a
                //this assigns a number to the cards rank/1 is ace, 2 is 2, etc/

                card.suit = suits[i]
                //this pulls the suit of the card according to its value

                card.img = `images/${a}_of_${suits[i]}.png` 
                //this is the method used to call the images. I renamed the images to begin with a number in order for it to pull everything this way. Alternatively, one could write a switch statement.
                
                deck.push(card)
                //this adds the card, along with its imaged and assigned value, to the table
            }
        }
        }
    //the above function is responsible for pushing the card values and images to the game
        
    
    
    
    function shuffleDeck(array) {
        for (var i = array.length - 1; i > 0; i--) { 
            var a = Math.floor(Math.random() * (i + 1)); 
            //math.random allows for the card to be different each time
            
            var temp = array[i];
            array[i] = array[a];
            array[a] = temp;
        }
        return array;
    }
    //the above function is responsible for randomizing the cards that are drawn as well as decrementing from the original number of cards, which in the case of this game is 52
    
    
    
    function dealDeck(){ 
        //this function is designed to deal the deck to both the dealer and the player. See the breakdown below:

        let playerCard1 = deck.pop(); 
        //allows for the last card in the deck to be taken from the deck 
        
        let playerCard2 = deck.pop(); 
        //allows for the last card in the deck to be taken from the deck 
        
        playerHandList.push(playerCard1);
        //allows for the card popped off above to be placed in the players hand where we can see it on the screen
        
        playerHandList.push(playerCard2);
        //allows for the card popped off above to be placed in the players hand where we can see it on the screen
    
        let dealerCard1 = deck.pop();
        //allows for the last card in the deck to be taken from the deck
        
        let dealerCard2 = deck.pop();
        //allows for the last card in the deck to be taken from the deck
        
        dealerHandList.push(dealerCard1);
        //allows for the card popped off above to be placed in the dealers hand where we can see it on the screen
        
        dealerHandList.push(dealerCard2);
        //allows for the card popped off above to be placed in the dealers hand where we can see it on the screen

        for(i=0 ; i < playerHandList.length ; i++){ 
        
            let initialPlayerHand = document.createElement('img');
            //this creates the initial cards for the player
        
            initialPlayerHand.src = playerHandList[i].img; 
            //this is responsible for displaying the images of the initial cards for the player
        
            playerHand.appendChild(initialPlayerHand); 
            //append is being used here to add the players hand/new card/ to the initial cards they were dealt
        }
    
        for(i=0 ; i < dealerHandList.length ; i++){
            let initialDealerHand = document.createElement('img');
            //this creates the initial cards for the dealer
            initialDealerHand.src = dealerHandList[i].img;
            //this is responsible for displaying the images of the initial cards for the dealer
            dealerHand.appendChild(initialDealerHand);
            //append is being used here to add the dealers hand/new card/ to the initial cards they were dealt
        }
        
        cardAmount -= 4;
        cardsLeft.innerHTML = cardAmount
        
        }
        
        





    function hitPlayer() { 
        //this function is designed to give the player an additional card when asked
        
        playerPoints = 0;
        
        let playerCard = deck.pop(); 
        //this sets the variable playerCard to equal the card that was popped, which would be the last card in the deck

        playerHandList.push(playerCard); 
        //this takes the card that was just popped/now labeled playerCard/ and adds it to the players hand. Note that we will not be able to see the image of the card at this point.
        
        let playerHitCard = document.createElement('img'); 
        //this creates the image element for the card mentioned above 

        playerHitCard.src = playerHandList[playerHandList.length - 1].img 
        //this displays the image for the corresponding cards value 

        playerHand.appendChild(playerHitCard); 
        //append is being used to add the card that was created above to the players hand where the user can see
        
        cardAmount -= 1;
        cardsLeft.innerHTML = cardAmount;
        }
        
        




    function hitDealer() { 
        //this function is designed to give the dealer an additional card, or to 'hit them' woth the card.

        dealerPoints = 0;

        let dealerCard = deck.pop(); 
        //this sets the variable dealerCard to equal the card that was popped, which would be the last card in the deck

        dealerHandList.push(dealerCard); 
        //this takes the card that was just popped/now labeled dealerCard/ and adds it to the dealers hand. Note that we will not be able to see the image of the card at this point.
        
        let dealerHitCard = document.createElement('img'); 
        //this creates the image element for the card mentioned above

        dealerHitCard.src = dealerHandList[dealerHandList.length - 1].img 
        //this displays the image for the corresponding cards value

        dealerHand.appendChild(dealerHitCard); 
        //append is being used to add the card that was created above to the dealers hand where the user can see
        
        cardAmount -= 1;
        cardsLeft.innerHTML = cardAmount;
        
        }
        
    

        



    function calculatePlayerPoints() { 
        //this function is designed to calculate and display the players points

        for (var i = 0; i < playerHandList.length; i++) {
            if (playerHandList[i].rank === 1) {
                if (playerPoints < 11) {
                    playerPoints += 11;
                } else {
                playerPoints += 1;
            }
            } else if (playerHandList[i].rank > 1 && playerHandList[i].rank < 11) {
            playerPoints += playerHandList[i].rank;
            } else {
            playerPoints += 10;
            }
        }
        
        playerHandPoints.innerHTML = playerPoints.toString();
        
        let message = document.querySelector('.message');
        if (playerPoints > 21) {
            message.textContent = "You Busted! Dealer Wins!"
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', '');
            dealerScore++;
            gameOver();
        } 
        } 
        
        
    function calculateDealerPoints() {

        for (var i = 0; i < dealerHandList.length; i++) {
        if (dealerHandList[i].rank === 1) {
            if (dealerPoints < 11) {
            dealerPoints += 11;
            } else {
            dealerPoints += 1;
            }
        } else if (dealerHandList[i].rank > 1 && dealerHandList[i].rank < 11) {
            dealerPoints += dealerHandList[i].rank;
        } else {
            dealerPoints += 10;
        }
        }
        dealerHandPoints.innerHTML = dealerPoints.toString();
    
        let message = document.querySelector('.message');
        if (dealerPoints > 21) {
        message.textContent = "Dealer Busted! You Win!";
        hit.setAttribute('class', 'none');
        stand.setAttribute('class', 'none');
        playAgain.setAttribute('class', '');
        playerScore++;
        gameOver();
        }
    } 
    






    function updateScore() {
        playerScoreShown.textContent = playerScore;
        dealerScoreShown.textContent = dealerScore;
    }
    




    function clearCards() {
        playerHandList = [];
        playerHand.innerHTML = "";
    
        dealerHandList = [];
        dealerHand.innerHTML = "";
    }
    





    function gameOver() {
        let message = document.querySelector('.message');
        if (cardAmount === 0 || cardAmount < 4) {
        if (playerScore > dealerScore) {
            message.innerHTML = "Congratulations! You beat the Dealer!";
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', 'none');
            deal.setAttribute('class', 'none');
        } else if (dealerScore > playerScore) {
            message.innerHTML = "The Dealer won this round. Better luck next time!";
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', 'none');
            deal.setAttribute('class', 'none');
        } 
        else {
            message.innerHTML = "A Draw! Want to Play Again?";
            hit.setAttribute('class', 'none');
            stand.setAttribute('class', 'none');
            playAgain.setAttribute('class', 'none');
            deal.setAttribute('class', 'none');
        }
        }
        }
        
        
        
        
        
        getCardImage();
        shuffleDeck(deck);
        
        hit.setAttribute('class', 'none');
        stand.setAttribute('class', 'none');
        playAgain.setAttribute('class', 'none');
        names[0].setAttribute('class', 'none player-name2');
        names[1].setAttribute('class', 'none player-name2');
        cardsLeft.innerHTML = cardAmount;
        
        
        
        
        
        deal.addEventListener('click', ()=>{
        let message = document.querySelector('.message');
        message.textContent = "";
        hit.setAttribute('class', '');
        stand.setAttribute('class', '');
        names[0].setAttribute('class', 'player-name2');
        names[1].setAttribute('class', 'player-name2');
        
        dealDeck();
        calculatePlayerPoints();
        calculateDealerPoints();

            
        deal.setAttribute('class', 'none');
        
    
        })
        
        
        hit.addEventListener('click', ()=>{
            hitPlayer();
            calculatePlayerPoints();
            updateScore();
            gameOver();
            
        })
        
        
        stand.addEventListener('click', ()=>{
            let message = document.querySelector('.message');
        
        while (dealerPoints < 18 || dealerPoints <= playerPoints) {
            hitDealer();
            calculateDealerPoints();
        }
        
        if (dealerPoints < playerPoints && dealerPoints < 22) {
            message.textContent = "Congratulations! You Win!";
            playerScore++
        } else if (dealerPoints > playerPoints && dealerPoints < 22) {
            message.textContent = "Dealer Wins!";
            dealerScore++
        } else if (dealerPoints === 21 && playerPoints === 21) {
            message.textContent = "You tied with the Dealer!";
        }
        
        
        gameOver(); 
        //calling the gameOver function
        updateScore(); 
        //calling the updateScore function
        
        hit.setAttribute('class', 'none');
        stand.setAttribute('class', 'none');
        playAgain.setAttribute('class', '');
        
        
        })
        
        playAgain.addEventListener('click', ()=>{ 
            //this allows for the program to listen for a click on the play again button, and once it is pressed the following occures:

        updateScore(); 
        //the updateScore function is called so that the player may play another game and the score will be updated without a need to refresh the page
            
        dealerPoints = 0;
        playerPoints = 0;
            
        
        hit.setAttribute('class', '');
        stand.setAttribute('class', '');
        playAgain.setAttribute('class', 'none');
            
        let message = document.querySelector('.message');
        message.innerHTML = "";
            
        
        clearCards(); 
        //calling the clearCards function
        dealDeck(); 
        //calling the dealDeck function
        calculatePlayerPoints(); 
        //calling the calculatePlayerPoints function
        calculateDealerPoints();  
        //calling the calculateDealerPoints function
            
        })