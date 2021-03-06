function init() {
  const width = 15
  const cellCount = width * width
  const gridArray = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 3, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 2, 0, 0,
    1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
    0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0,
    1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 3, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]

  // 0 - dot/fish
  // 1 - wall
  // 2 - ghost home
  // 3 - fruit/mice

  let grid = document.querySelector('.grid')
  const gridCells = []

  let pacmanCurrentPosition = 106

  let score = 0

  let lives = 3
  let highScore = localStorage.getItem('game1HighScore') || 0

  let scoreBoard = document.querySelector('.score-box')
  let highScoreBoard = document.querySelector('.top-score-display')
  let livesBoard = document.querySelector('.lives-box')
  const startButton = document.querySelector('.start-button')
  const restartButton = document.querySelector('.restart-button')
  const audio1 = document.getElementById('myAudio')
  const audioMute = document.querySelector('.audio-mute')

  // * MAKE THE GRID
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = ''
      grid.appendChild(cell)
      gridCells.push(cell)
      cell.classList.add('grid-cell')

      livesBoard.innerText = lives
      scoreBoard.innerText = score

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

  //  * GRID RESET

  function resetGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i

      livesBoard.innerText = 3
      scoreBoard.innerText = 0

      if (gridArray[i] === 0) {
        gridCells[i].classList.add('pac-dot')
      } else if (gridArray[i] === 3) {
        gridCells[i].classList.add('fruit')
      }
    }
  }

  // * ADD PACMAN TO THE GRID

  function addPacman() {
    gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
  }
  addPacman() // call the function to add the pacman at its starting position

  // * REMOVE PACMAN FROM THE GRID
  function removePacman() {
    gridCells[pacmanCurrentPosition].classList.remove('pacmanClass')
  }

  // * PLAY THE GAME  -  when start button is pressed

  function playGame() {
    ghosts.forEach((ghost) => moveGhosts(ghost))
    document.addEventListener('keydown', movePacman)

    ghosts.forEach((ghost) => ghost.resetToInitialPosition())
    mainAudio()
  }

  // * MOVE PACMAN

  function movePacman() {
    let pacImg = document.querySelector('.pacmanClass')
    pacImg.setAttribute('style', 'transform:rotate(360deg)')
    gridCells[pacmanCurrentPosition].classList.remove('pacmanClass')

    switch (event.key) {
      case 'ArrowUp':
        if (
          pacmanCurrentPosition - width >= 0 &&
          !gridCells[pacmanCurrentPosition - width].classList.contains(
            'wall'
          ) &&
          !gridCells[pacmanCurrentPosition - width].classList.contains(
            'ghost-home'
          )
        ) {
          pacmanCurrentPosition -= width
          gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
          rotatePacUp()
        }
        break
      case 'ArrowLeft':
        if (
          pacmanCurrentPosition % width !== 0 &&
          !gridCells[pacmanCurrentPosition - 1].classList.contains('wall') &&
          !gridCells[pacmanCurrentPosition - 1].classList.contains('ghost-home')
        ) {
          pacmanCurrentPosition -= 1
          gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
          rotatePacLeft()
        }
        if (pacmanCurrentPosition - 1 === 104) {
          pacmanCurrentPosition = 119
          gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
          rotatePacLeft()
        }
        break
      case 'ArrowDown':
        if (
          pacmanCurrentPosition + width < width * width &&
          !gridCells[pacmanCurrentPosition + width].classList.contains(
            'wall'
          ) &&
          !gridCells[pacmanCurrentPosition + width].classList.contains(
            'ghost-home'
          )
        ) {
          pacmanCurrentPosition += width
          gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
          rotatePacDown()
        }
        break
      case 'ArrowRight':
        if (
          pacmanCurrentPosition % width < width - 1 &&
          !gridCells[pacmanCurrentPosition + 1].classList.contains('wall') &&
          !gridCells[pacmanCurrentPosition + 1].classList.contains('ghost-home')
        ) {
          pacmanCurrentPosition += 1
        }
        if (pacmanCurrentPosition + 1 === 120) {
          pacmanCurrentPosition = 105
        }
        break
    }
    gridCells[pacmanCurrentPosition].classList.add('pacmanClass')
    dotsCollected()
    fruitCollected()
    livesLostP()
    playerWins()
    checkHighScore()
  }

  // * DOT SCORE COUNTING

  function dotsCollected() {
    if (gridCells[pacmanCurrentPosition].classList.contains('pac-dot')) {
      score += 10
      scoreBoard.innerText = score
      gridCells[pacmanCurrentPosition].classList.remove('pac-dot')
    }
  }

  // * FRUIT SCORE COUNTING

  function fruitCollected() {
    if (gridCells[pacmanCurrentPosition].classList.contains('fruit')) {
      score += 50
      scoreBoard.innerText = score
      gridCells[pacmanCurrentPosition].classList.remove('fruit')
    }
  }

  // * ADD GHOSTS TO THE GRID

  class Ghost {
    constructor(ghostName, ghostPosition, ghostSpeed) {
      this.ghostName = ghostName
      this.initialGhostPosition = ghostPosition
      this.ghostSpeed = ghostSpeed
      this.currentGhostPosition = ghostPosition
      this.ghostTimer = NaN
    }

    resetToInitialPosition() {
      this.currentGhostPosition = this.initialGhostPosition
    }
  }

  ghosts = [
    new Ghost('ghost1', 82, 400),
    new Ghost('ghost2', 97, 300),
    new Ghost('ghost3', 127, 200),
    new Ghost('ghost4', 142, 100),
  ]

  ghosts.forEach((ghost) => {
    gridCells[ghost.currentGhostPosition].classList.add(ghost.ghostName)
    gridCells[ghost.currentGhostPosition].classList.add('ghost')
  })

  // * MOVE GHOSTS

  function moveGhosts(ghost) {
    const directions = [+1, -1, +width, -width]
    let ghostDirection =
      directions[Math.floor(Math.random() * directions.length)]

    ghost.ghostTimer = setInterval(function () {
      if (
        !gridCells[
          ghost.currentGhostPosition + ghostDirection
        ].classList.contains('wall') &&
        !gridCells[
          ghost.currentGhostPosition + ghostDirection
        ].classList.contains('ghost')
      ) {
        gridCells[ghost.currentGhostPosition].classList.remove(
          ghost.ghostName,
          'ghost'
        )
        ghost.currentGhostPosition += ghostDirection
        gridCells[ghost.currentGhostPosition].classList.add(
          ghost.ghostName,
          'ghost'
        )
      } else {
        ghostDirection =
          directions[Math.floor(Math.random() * directions.length)]
      }
      livesLostP()
    }, ghost.ghostSpeed)
  }

  // * LIVES COUNTER

  function livesLostP() {
    if (
      gridCells[pacmanCurrentPosition].classList.contains('ghost') &&
      lives >= 1
    ) {
      lives -= 1
      livesBoard.innerText = lives

      removePacman()
      pacmanCurrentPosition = 106
      addPacman()
    } else if (
      gridCells[pacmanCurrentPosition].classList.contains('ghost') &&
      lives == 0
    ) {
      livesBoard.innerHTML = 0
      stopGhosts()

      return window.alert('YOU HAVE LOST. Press RESET and START to try again.')
    }
  }

  // * PACMAN ROTATION FUNCTIONS:

  function rotatePacUp() {
    let pacImg = document.querySelector('.pacmanClass')
    pacImg.setAttribute('style', 'transform:rotate(270deg)')
  }

  function rotatePacLeft() {
    let pacImg = document.querySelector('.pacmanClass')
    pacImg.setAttribute('style', 'transform:rotate(180deg)')
  }

  function rotatePacDown() {
    let pacImg = document.querySelector('.pacmanClass')
    pacImg.setAttribute('style', 'transform:rotate(90deg)')
  }

  // PLAYER WINS THE GAME

  function playerWins() {
    if (score === 1210) {
      return window.alert('CONGRATULATIONS, YOU WON THE GAME!')
    }
  }

  // * RESTART THE GAME:

  function resetGame() {
    gridCells[pacmanCurrentPosition].classList.remove('pacmanClass')
    pacmanCurrentPosition = 106
    gridCells[pacmanCurrentPosition].classList.add('pacmanClass')

    stopGhosts()

    for (let ghost of ghosts) {
      gridCells[ghost.currentGhostPosition].classList.remove(
        ghost.ghostName,
        'ghost'
      )
    }

    scoreBoard.innerText = 0
    livesBoard.innerText = 3

    resetGrid()
  }

  //  * STOP GHOSTS

  function stopGhosts() {
    for (let ghost of ghosts) {
      clearInterval(ghost.ghostTimer)
    }
  }

  //  * AUDIO PLAY FUNCTION

  function mainAudio() {
    audio1.volume = 0.05
    audio1.play()
  }

  // * HIGHEST SCORE STORAGE

  highScoreBoard.innerText = highScore

  function checkHighScore() {
    if (score > localStorage.getItem('game1HighScore')) {
      localStorage.setItem('game1HighScore', score)
      highScore = score
      highScoreBoard.innerText = highScore
      console.log('highest score')
    }
  }

  function gameAudioMute() {
    audio1.volume = 0
    audio1.play()
  }

  startButton.addEventListener('click', playGame)
  restartButton.addEventListener('click', resetGame)
  audioMute.addEventListener('click', gameAudioMute)
}

window.addEventListener('DOMContentLoaded', init)
