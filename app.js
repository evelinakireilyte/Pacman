function init() {

    const width = 15
    const cellCount = width * width
    const gridArray = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 
        0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 
        1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

        // 0 - dot/fish
        // 1 - wall
        // 2 - ghost home
        // 3 - fruit/mice
        // 4 - empty 
    
    let grid = document.querySelector('.grid')
    const gridCells = []

    let pacmanCurrentPosition = 107 // use let to track where the pacman currently is (refers to an index)

    let score = 0


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
        gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
        console.log(pacmanCurrentPosition)
    }
    addPacman() // call the function to add the pacman at its starting position

// * Move pacman

    function movePacman() {

        gridCells[pacmanCurrentPosition].classList.remove('pacmanClass')

        switch (event.key) {
            case 'ArrowUp':
                if (pacmanCurrentPosition - width >=0 && !gridCells[pacmanCurrentPosition-width].classList.contains('wall') && !gridCells[pacmanCurrentPosition-width].classList.contains('ghost-home')) {
                    pacmanCurrentPosition -= width
                }
                break
            case 'ArrowLeft':
                if (pacmanCurrentPosition % width !==0 && !gridCells[pacmanCurrentPosition-1].classList.contains('wall') && !gridCells[pacmanCurrentPosition-1].classList.contains('ghost-home')) {
                    pacmanCurrentPosition -= 1
                }    
                if ((pacmanCurrentPosition -1) === 104) {
                    pacmanCurrentPosition = 119
                }
                break
            case 'ArrowDown':
                if (pacmanCurrentPosition + width < width * width && !gridCells[pacmanCurrentPosition+width].classList.contains('wall') && !gridCells[pacmanCurrentPosition+width].classList.contains('ghost-home')) {
                    pacmanCurrentPosition += width
                }
                break
            case 'ArrowRight':
                if (pacmanCurrentPosition % width < width-1 && !gridCells[pacmanCurrentPosition+1].classList.contains('wall') && !gridCells[pacmanCurrentPosition+1].classList.contains('ghost-home')) {
                    pacmanCurrentPosition += 1
                }
                if ((pacmanCurrentPosition +1) === 120) {
                    pacmanCurrentPosition = 105
                }
                break
          }
        gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
        dotsCollected()
    }
    
    // SCORE COUNTING

    function dotsCollected() {
        if(gridCells[pacmanCurrentPosition].classList.contains('pac-dot')) {
            score += 10
            scoreBoard.innerText = score
            gridCells[pacmanCurrentPosition].classList.remove('pac-dot')
            console.log('score')
        }
    }
    

// // * Add ghost1 to grid

//     function addGhost1(position) {
//         gridCells[position].classList.add('ghost1')
//         console.log(position)
//     }
//     addGhost1(ghost1StartPosition) 

// // * Add ghost2 to grid

//     function addGhost2(position) {
//         gridCells[position].classList.add('ghost2')
//         console.log(position)
//     }
//     addGhost2(ghost2StartPosition) 

// // * Add ghost3 to grid

//     function addGhost3(position) {
//         gridCells[position].classList.add('ghost3')
//         console.log(position)
//     }
//     addGhost3(ghost3StartPosition) 

// // * Add ghost4 to grid

//     function addGhost4(position) {
//         gridCells[position].classList.add('ghost4')
//         console.log(position)
//     }
//     addGhost4(ghost4StartPosition) 








    document.addEventListener('keydown', movePacman) 

}


window.addEventListener('DOMContentLoaded', init)