<h1 align="center">Classic Pac-man - Project 1</h1>

<p align="center">
<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828289/pacman_vongzf.png" width="400">
</p>

## Table of Contents:

1. [Project Overview](#project-overview)
2. [Deployment](#deployment)
3. [Getting Started](#getting-started)
4. [Controls and Instructions](#controls-and-instructions)
5. [Game Brief](#game-brief)
6. [Technologies used](#technologies-used)
7. [Development Process and Timeline](#development-process-and-timeline)
8. [Bugs](#bugs)
9. [Challenges](#challenges)
10. [Wins](#wins)
11. [Key Learnings](#key-learnings)
12. [Future Improvements](#future-improvements)

## Project Overview

Pac-Man is a 1980’s maze action game. The player controls Pac-Man, eating all the dots inside an enclosed maze while avoiding four ghosts. Classic Pac-man was my first project as part of General Assembly's Software Engineering Immersive (SEI) course. It was a solo project built in 9 days implementing the skills learned over the first three weeks of the SEI program.
Many different versions of Pac-Man have been built as a way to learn and solidify programming basics and establish a logical approach for implementation. 

## Deployment:

The game has been deployed with GitHub Pages and is available [here](https://evelinakireilyte.github.io/Pacman/).

## Getting Started

1. Access the source code via the 'Clone or download' button
2. Open the index.html file in your browser of choice to start the game.

## Controls and Instructions

- Launch the game.
- Click the Start button to start the game.
- Click Reset button followed by Start button to reset the game and start a new one.
- Click Mute button to mute the music playing in the background.
- Use left, right, up and down arrow keys on your keyboard to control Pac-Man movement direction.
- Avoiding ghosts, collect maze pieces and fruit to earn points.
- Observe the current score, top score and the number of lives remaining in the display at the top of the grid.

## Game Brief:

- Build a grid based game in 9 days.
- Create a one-player game against the computer, Pac-Man vs four ghosts.
- Design a maze with restricted zones, dots and cherries.
- Create four randomly moving ghosts.
- Create player controlled Pac-Man..
- Design logic for winning and losing.
- Display score and number of lives on the screen.
- Include separate HTML, CSS and JavaScript files.
- Deploy the game.

## Technologies Used:

- HTML5 with HTML5 audio - 9.6%
- CSS3 - 16.3 %
- JavaScript - 74.1 %
- GitHub
- Firefox Developer
- VSCode

## Development Process and Timeline:

### Timeline:

- Day 1 - Project planning.
- Day 2-3 - Grid implementation.
- Day 3-7 - Pac-Man and ghost movement.
- Day 7 - Game info displays.
- Day 8 - Game reset function and styling.

### Day 1 - Project planning:

The first day was spent planning the basic structure and pseudocoding. Setting clear goals and splitting it into small tasks has helped to identify logical approach and prioritize tasks required to create a functional game within the given timeframe.

Set out basic features:

- PacMan and 4 ghosts
- Player gets 3 lives
- START button
- RESTART button
- Scoreboard
- Highest scoreboard
- Lives display

Game design:

- Grid size: 225 cells
- Cherries: 4 (set location) - 50 points per pieces
- Maze pieces: 10 points per piece
- Player movement controlled by keyboard arrows
- Ghost movement - randomised
- PacMan: image rotates according to the direction of the movement
- Ghosts: 1 different picture per ghost
- Background audio

### Day 2-3 - Grid implementation:

Implemented grid, defined maze layout, location of maze pieces and cherries. Each grid cell in the grid array was given a number which represented either a dot, wall, ghost home or fruit. This was then used to loop through each list item in the grid array and assign different classes containing appropriate formatting, providing the grid with a finished maze structure.

#### Code Snippet - Maze implementation and layout

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828290/pacman_2_zxfevz.png" height="500"> <img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828295/pacman_3_zpswuf.png" height="500">

### Day 3-7 Pac-Man and ghost movement:

The next logical step was to implement Pac-Man and ghosts. I have first added the Pac-Man to the grid by assigning a class to the specific grid cell. Knowing the game will be arrow key controlled, I have used the switch statement to determine which direction will be taken depending on the arrow key pressed. The current Pac-Man position on the grid was used to determine how Pac-Man responds to arrow keys, while visual movement was achieved by adding and removing classes as Pac-Man current position on the grid is overwritten each time a key is pressed. Pac-Man's image was set to rotate towards the direction it is taking.

#### Code Snippet - Pac-Man movement on the grid

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828295/pacman_4_ypnau1.png" width="400">
<br>
<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828295/pacman_5_ldowa2.png" width="400">

Ghosts were added to four different locations on the grid. Ghost movement was randomised and each one moved a defined speed. The movement was only restricted by walls and other ghosts on the grid. Ghosts were set to stop when all lives are lost.

### Day 7 - Game info displays:

Implemented score, lives counter and displays. Everytime Pac-Man's current position on the grid contains a class “pac-dot”, 10 points are added onto the score variable and the “pac-dot” class gets removed, making it look as if it has already been collected. Score is then displayed on the scoreboard. Highest score was saved to local storage and displayed on the board too. Same logic was used to count cherry points and lives.

#### Code Snippet - (Highest) score counting and display

<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828295/pacman_6_fl1uuu.png" width="400">
<br>
<img src="https://res.cloudinary.com/eevelynaa1/image/upload/v1641828295/pacman_7_ork4t6.png" width="400">

### Day 8 - Game reset function and styling:

During the final day, I have implemented a reset function to allow players to restart the game by resetting variables such as ghost and Pac-Man current position, number of lives, score and grid to the primary state. I have added a background sound to help players get into the mood and styled it to give it a more complete look. After running a few tests a final version was deployed.

## Bugs

- Pac-Man rotates upside down when moving to the left. I would look into setting an image mirror transformation instead of rotating the image.
- Occasional Pac-Man duplication takes place as Pac-Man moves from one end of the maze to another. I would aim to review and reset Pac-Man's current position as it migrates from one end to another ‘behind the scenes’.

## Challenges

- Resetting the game instead of re-rendering the browser required to reset all previously defined variables to their primary state.
- Implementing Pac-Man movement and other features that were closely linked to it seemed overwhelming at the start.
- Task prioritisation - working on the features necessary to build a functioning app.

## Wins and Key Learnings

Implemented features such as highest score storage by researching different options and finding the way to make it work in my app

## Future Improvements

- Improve styling and change background music.
- Implement differently themed levels.
- Make ghosts chase Pac-Man to increase difficulty level.
