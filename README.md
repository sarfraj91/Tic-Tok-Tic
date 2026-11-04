# Tic Tok Tic

A clean, colorful take on **Tic-Tac-Toe**—made for two players, played right in your browser, and built as a hands-on way to explore JavaScript.

> Take turns, find three in a row, and celebrate the win. No installs or extra packages required.

## About the project

Tic Tok Tic is a small front-end project focused on learning by building. It brings together the core web technologies: HTML for the game board, CSS for its responsive glass-style look, and vanilla JavaScript for the turns, winning combinations, and reset button.

## Features

- Two-player, turn-based gameplay
- Nine clickable squares in a 3 × 3 board
- Automatic winner detection across rows, columns, and diagonals
- Winning message when a player gets three marks in a row
- Reset button to start a fresh game
- Responsive styling with interactive button effects
- No frameworks, dependencies, or build tools

## Play the game

1. Open `index.html` in a modern web browser.
2. Click an empty square to place your mark. Players take turns as **O** and **X**, starting with **O**.
3. Make a line of three matching marks to win.
4. Select **Reset** to play again.

## Explore the JavaScript

This project is a friendly place to explore JavaScript concepts in a working example:

- Selecting elements from the page with `querySelector` and `querySelectorAll`
- Responding to clicks with event listeners
- Tracking game state with variables
- Representing winning combinations with arrays
- Using loops and conditionals to check for a winner
- Updating page text, classes, and button states through the DOM

Start with [`index.js`](index.js), then follow the selectors back to the matching elements in [`index.html`](index.html).

## Project files

```text
Tic Tok Tic/
├── index.html   # Game structure
├── style.css    # Layout, colors, and interactions
├── index.js     # Turns, win checks, and reset behavior
└── README.md    # Project guide
```

## Built with

- HTML5
- CSS3
- Vanilla JavaScript

## A note on draws

The current game detects wins and lets you reset the board. Draw detection is not implemented yet, so a full board without a winning line does not display a draw message.

---

Made as a small project for learning, experimenting, and enjoying a quick game of Tic-Tac-Toe.
