# Pacman

PACMAN - This is my first project from the General Assembly course SEI-59

Game features:

1. 1 PacMan and 4 ghosts
2. Player has 3 lives
3. Max Points: points _ number of dots + points _ number of fruit
4. 3 cherries - 10 extra points
5. START button
6. RESTART button
7. Score board
8. Highest Score/Leader board

Game design:

1. Grid size: 225 cells
2. Fruits/cherries: 3 (set location) - 50 points per piece of fruit
3. Maze pieces/dots - 10 points per dot
4. Player movements controlled by arrows
5. Ghost movement - random
6. PacMan : 4 different pictures for different directions or rotate
7. Ghosts: 1 picture per ghost
8. Background audio, Player lost audio, Player wins audio

Game rules:

1. Player starts the game by pressing START button
2. Player collects dots as scores
3. Player can earn extra point by collecting fruit/cherries (displayed for only set mount of time)
4. If all dots get collected - player wins
5. If player collides with a ghost, it loses a life
6. If 3 lives lost - player loses the game
7. Player can restart the game at any time

HTML:

body
div h1 “game title” /div
div class = score board /div
div class = lives
img 1
img 2
img 3
/div

    div class=grid /div
    div button id = start-button /div
    div button id = reset-button /div
    div class = highest score
    	h2 title
    	score board
    /div

PSEUDOCODE:

1.  Player presses button START game: game initialises and a player and ghosts appears on the maze in set locations
    const function playGame()

    Initial Set Up:

        initialNumberOfPoint = 0
        maxNumberOfPoints = 500
        fruitTimer = null
        timer = 0
        initialNumberofLives = 3

playersStartingLocation = 0
ghost1StartingLocation = 0
ghost2StartingLocation = 0
ghost3StartingLocation = 0
ghost4StartingLocation = 0

    DOM elements:

    gameGrid = document.querySelector(‘.grid’)
    scoreBoard = document.querySelector(‘.scoreBoard’)
    startButton = document.querySelector(‘.start-button’)
    restartButton = document.querySelector(‘.restart-button’)

    // create a grid through HTML or JavaScript:

    const cells = []

const grid = document.querySelector('.grid')
const width = 15
const gridCellCount = width \* width

function createGrid() {
for (let i = 0; i < gridCellCount; i++) {
const cell = document.createElement('div')
cell.setAttribute('index', i)
cells.push(cell)
grid.appendChild(cell)
}
}
createGrid()

    // create free cells for pacman and ghosts to move around:

    let freeCells = document.querySelector('.index2')

    // create mazeBorders on the grid:

    const mazeBorders = document.querySelector('.)




    // add the newly created div into our empty array

    // Initialise the player and the ghosts:

    function addPacman {
    cells[position]classList.add('player’, ‘ghost1’, ‘ghost2’, ‘ghost3’, ‘ghost4’)
    }

    function addGhosts {
    cells[position]classList.add(‘ghost1’, ‘ghost1’)
    cells[position]classList.add(‘ghost1’, ‘ghost2’)
    cells[position]classList.add(‘ghost1’, ‘ghost3’)
    cells[position]classList.add(‘ghost1’, ‘ghost4’)
    }

    //Remove pacMan from the grid

    function removePacman(position) {
    cells[position].classList.remove(catClass
    }


    //store playerIndex

    let playerIndex = Array.from(allTheCells).indexOf(randomCell)


    1. Player navigates pacMan through an empty array of cells

emptyCells = Array.from(allTheCells).filter((cell) => {
return cell.classList.contains(‘free’)

        1. Function movePacman
            1. Move to the left when left arrow key is pressed > moveLeft()
            2. Move to the right when right arrow key is pressed > moveRight()
            3. Move to the top when top arrow key is pressed > moveToTop()
            4. Move to the bottom when bottom arrow key is pressed > MoveToBottom

        1. Function stopPacman if player is:
            1. On the bottom border
            2. On the top border
            3. On the left border
            4. On the right border

    2. Ghosts move randomly jumping from empty cells in the array to the nearest random empty cell in the array

    3. Player collects dots  - dots are added onto a score
    	if a class contains a dot add points and change a class to “no-dot”
    	initialNumberOfPoint += 10
    	let currentNumberOfPoint = initialNumberOfPoint


    4. Player can also collect bonus points - fruit:
     	a) setInterval of 7seconds
    	b) if a class contains a fruit, add points and change a class to “no-fruit”
    	c) remove.classList(‘.fruit’) when timer has finished

    	initialNumberOfPoint += 50
    	let currentNumberOfPoint = initialNumberOfPoint



    5. Score is displayed on the scoreboard
    	a) scoreBoard.innerContent = totalNumberOfPoints
    	b) If totalNumberOfPoints >= maxNumberOfPoint
    		Player wins
    	c) If totalNumberOfPoints < maxNumberOfPoint
    		playGame()


    6. If player collides with a ghost1, ghost2, ghost3 or ghost4 => lives are lost

    	initialNumberOfLives -= 1
    	let livesRemaining = initialNumberOfLives

    		a) if livesRemaining = 0
    			playerLost()

    		b) if livesRemaining > 0
    			playGame()


    7. Player can restart the game by pressing a button RESTART. Game re-initialises

    8. Event listeners:

    	document.addEventListener('keydown', function (event)

    Extra things to do: Leader Board with name and a top score



