
//battleship

// this gives me a random number between 0 and 8
let battleshipPosition = Math.floor(Math.random() * 9);
console.log(battleshipPosition);


// this creates an ARRAY of my squares
let squares = document.querySelectorAll(".square");
console.log(squares);


let gameAlreadyWon = false;

for (let i = 0; i < squares.length; i++) {

    squares[i].addEventListener("click", () => {

        if (gameAlreadyWon === true) {
            return; //exit the function
        }
        
        if (i === battleshipPosition) {
            gameAlreadyWon = true;
            squares[i].style.backgroundColor = "green";

            let winText = document.getElementById("winText");
            winText.innerText = "You Hit the Battleship!";
        } else {
            squares[i].style.backgroundColor = "red";
        }
    });
    
}



// Makes the page relaod/restart game... idk if this is the correct way to do it...  looks like it's refreshing the entire pae
document.getElementById('restartButton').addEventListener('click', () => {
    window.location.reload();
});