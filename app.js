function init() {

    const width = 15
    const cellCount = width * width
    const gridArray = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 
        1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,
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

    let lives = 3


    let scoreBoard = document.querySelector('.score-box')
    let livesBoard = document.querySelector('.lives-box')
    const startButton = document.querySelector('.start-button')
    const restartButton = document.querySelector('.restart-button')

// * MAKE THE GRID
    function createGrid() {
        for (let i = 0; i < cellCount; i++) {
            const cell = document.createElement('div')
            cell.innerText = i 
            grid.appendChild(cell)
            gridCells.push(cell)
            cell.classList.add('grid-cell')
            
            livesBoard.innerText = lives
            scoreBoard.innerText = score

         // * ADD LAYOUT TO THE GRID

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

// * ADD PACMAN TO THE GRID

    function addPacman() {
        gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
        console.log(pacmanCurrentPosition)
    }
    addPacman() // call the function to add the pacman at its starting position

// * MOVE PACMAN

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
        fruitCollected()
        gameOverPac()
    }
    
// * DOT SCORE COUNTING

    function dotsCollected() {
        if(gridCells[pacmanCurrentPosition].classList.contains('pac-dot')) {
            score += 10
            scoreBoard.innerText = score
            gridCells[pacmanCurrentPosition].classList.remove('pac-dot')
        }
    }
    
// * FRUIT SCORE COUNTING

    function fruitCollected() {
        if(gridCells[pacmanCurrentPosition].classList.contains('fruit')) {
            score += 50
            scoreBoard.innerText = score
            gridCells[pacmanCurrentPosition].classList.remove('fruit')
        }
    }     

// * ADD GHOSTS TO THE GRID

    class Ghost {
        constructor(ghostName, ghostPosition, ghostSpeed) {
            this.ghostName = ghostName
            this.ghostPosition = ghostPosition
            this.ghostSpeed = ghostSpeed
            this.currentGhostPosition = ghostPosition
            this.ghostTimer = NaN
        }
    }

    ghosts = [
        new Ghost ('ghost1', 82, 400),
        new Ghost ('ghost2', 97, 300),
        new Ghost ('ghost3', 127, 200),
        new Ghost ('ghost4', 142, 100)
    ]

    ghosts.forEach(ghost => {
        gridCells[ghost.currentGhostPosition].classList.add(ghost.ghostName)
        gridCells[ghost.currentGhostPosition].classList.add('ghost')  
    })


// * MOVE GHOSTS (setInterval)

    ghosts.forEach(ghost => moveGhosts(ghost))

    function moveGhosts(ghost) {
        const directions = [+1, -1, +width, -width]
        let ghostDirection = directions[Math.floor(Math.random() * directions.length)]
        
        ghostTimer = setInterval(function() {
            if (!gridCells[ghost.currentGhostPosition + ghostDirection].classList.contains('wall') && !gridCells[ghost.currentGhostPosition + ghostDirection].classList.contains('ghost')) {
                gridCells[ghost.currentGhostPosition].classList.remove(ghost.ghostName, 'ghost')
                ghost.currentGhostPosition += ghostDirection
                gridCells[ghost.currentGhostPosition].classList.add(ghost.ghostName, 'ghost')
                
            } else {
                ghostDirection = directions[Math.floor(Math.random() * directions.length)]
            }
        }, ghost.ghostSpeed);
    }

// * LIVE COUNT (if pacman walks into ghost ) 

    function gameOverPac() {
        if (gridCells[pacmanCurrentPosition].classList.contains('ghost') && lives >= 1) {
            lives -= 1
            livesBoard.innerText = lives
            console.log('lives lost')

        } else if (gridCells[pacmanCurrentPosition].classList.contains('ghost') && lives == 0) {
            livesBoard.innerHTML = 0
            return window.alert('YOU HAVE LOST. Press START to try again.')
        }    
    }
    
// * LIVE COUNT (if ghost catches pacman ) 

    function gameOverGhost() {
        if (gridCells[ghost.currentGhostPosition].classList.contains('pacmanClass') && lives >= 1) {
            lives -= 1
            livesBoard.innerText = lives
            console.log('lives lost')

        } else if (gridCells[ghost.currentGhostPosition].classList.contains('pacmanClass') && lives == 0) {
            livesBoard.innerHTML = 0
            return window.alert('YOU HAVE LOST. Press START to try again.')
        }    
    }

    

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