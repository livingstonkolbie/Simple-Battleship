
// battleship game

// what am i trying to do?

// user gets to the website
// there's a rules page - welcome to 'simple battleship' , how to play: click the squares to guess where the battleship is , you'll know when you hit ;)

// when user hits, an icon of a bomb pops up in the space

// theres a reset button & a "back to the rules" page that takes you back to the first page
// if they click play, the game restarts again just like the first time


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all squares
    const squares = document.querySelectorAll('.square');
    
    // Generate random battleship position (0-8)
    let battleshipPosition = Math.floor(Math.random() * 9);
    
    // Track if game is over
    let gameOver = false;
    
    // Add click event listeners to each square
    squares.forEach((square, index) => {
        square.addEventListener('click', function() {
            // Prevent clicking on already clicked squares or if game is over
            if (this.classList.contains('correct') || 
                this.classList.contains('incorrect') || 
                gameOver) {
                return;
            }
            
            // Check if this square contains the battleship
            if (index === battleshipPosition) {
                // Correct guess - turn green
                this.classList.add('correct');
                gameOver = true;
                
                // Optional: Show victory message
                setTimeout(() => {
                    alert('You found the battleship! 🚢');
                }, 200);
                
            } else {
                // Incorrect guess - turn red
                this.classList.add('incorrect');
            }
        });
        
        // Optional: Add hover effect
        square.addEventListener('mouseenter', function() {
            if (!this.classList.contains('correct') && 
                !this.classList.contains('incorrect') && 
                !gameOver) {
                this.style.opacity = '0.7';
            }
        });
        
        square.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });
    
    // Optional: Add reset functionality (you can call this function to restart)
    window.resetGame = function() {
        // Clear all classes from squares
        squares.forEach(square => {
            square.classList.remove('correct', 'incorrect');
            square.style.opacity = '1';
        });
        
        // Generate new battleship position
        battleshipPosition = Math.floor(Math.random() * 9);
        gameOver = false;
    };
});