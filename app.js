function init() {

    const width = 15
    const cellCount = width * width
    const gridArray = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 2, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 
        0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

        // 0 - dot
        // 1 - wall
        // 2 - ghost home
        // 3 - fruit
        // 4 - empty 
    
    let grid = document.querySelector('.grid')
    const gridCells = []

    const pacmanClass = 'pacman' // define the class of the character
    let pacmanStartPosition = 112 // starting position of the pacman (refers to an index)
    let pacmanCurrentPosition = 112 // use let to track where the pacman currently is (refers to an index)
    let pacmanIndex = Array.from(grid).indexOf(gridCells)
   

    let ghost1StartPosition = 33
    let ghost2StartPosition = 57
    let ghost3StartPosition = 144
    let ghost4StartPosition = 182



    let scoreBoard = document.querySelector('.score-box')
    const startButton = document.querySelector('.start-button')
    const restartButton = document.querySelector('.restart-button')



// * Make a grid
    function createGrid() {
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div')
            cell.innerText = i 
            grid.appendChild(cell)
            gridCells.push(cell)
            cell.classList.add('grid-cell')
            console.log(cell)

         // add layout to the grid

            if (gridArray[i] === 0) {
                gridCells[i].classList.add('pac-dot')
            } else if (gridArray[i] === 1) {
                gridCells[i].classList.add('wall')
            } else if (gridArray[i] === 2) {
                gridCells[i].classList.add('ghost-home')
            } else if (gridArray[i] === 3) {
                gridCells[i].classList.add('fruit')
            }
        }
    }    
    createGrid()

// * Add pacman to grid

    function addPacman() {
        gridCells[pacmanStartPosition].classList.add('pacmanClass')
        console.log(pacmanStartPosition)
    }
    addPacman() // call the function to add the pacman at its starting position

// * Move pacman

    const handleArrowUp = () => {
        console.log('handleArrowUp')
        pacmanCurrentPosition -= 15
        move()
    }
    const handleArrowLeft = () => {
        console.log('handleArrowLeft')
        pacmanCurrentPosition -= 1
        move()
    }
  
    const handleArrowDown = () => {
        console.log('handleArrowDown')
        pacmanCurrentPosition += 15
        move()
    }
    const handleArrowRight = () => {
        console.log('handleArrowRight')
        pacmanCurrentPosition += 1
        move()
    }
  
    function move() {
        gridCells[pacmanStartPosition].classList.remove('pacmanClass')
        gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
        pacmanStartPosition = pacmanCurrentPosition
    }
    move()

// * Add ghost1 to grid

    function addGhost1(position) {
        gridCells[position].classList.add('ghost1')
        console.log(position)
    }
    addGhost1(ghost1StartPosition) 

// * Add ghost2 to grid

    function addGhost2(position) {
        gridCells[position].classList.add('ghost2')
        console.log(position)
    }
    addGhost2(ghost2StartPosition) 

// * Add ghost3 to grid

    function addGhost3(position) {
        gridCells[position].classList.add('ghost3')
        console.log(position)
    }
    addGhost3(ghost3StartPosition) 

// * Add ghost4 to grid

    function addGhost4(position) {
        gridCells[position].classList.add('ghost4')
        console.log(position)
    }
    addGhost4(ghost4StartPosition) 








    document.addEventListener('keydown', function (event) {
        switch (event.key) {
          case 'ArrowUp':
            handleArrowUp()
            break
          case 'ArrowLeft':
            handleArrowLeft()
            break
          case 'ArrowDown':
            handleArrowDown()
            break
          case 'ArrowRight':
            handleArrowRight()
            break
        }
    })

}


window.addEventListener('DOMContentLoaded', init)