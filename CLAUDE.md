# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the game

Open `tictactoe.html` directly in a browser. No build step or dependencies required. The game runs entirely as a self-contained HTML file with inline CSS and JavaScript.

## Architecture

Single-file application (`tictactoe.html`) combining:

- **HTML structure**: Game container with board grid (9 cells), status display, and reset button
- **CSS styling**: Green (#22c55e) and orange (#ff8c42) theme applied to board, player markers, gradient background, and button
- **JavaScript game logic**: 
  - Board state management (array of 9 cells)
  - Player-vs-computer turn alternation
  - Win/draw detection via checking winning combinations (3 rows, 3 columns, 2 diagonals)
  - Minimax algorithm for optimal computer moves (recursively evaluates all possible board states with scoring: -10 for player win, +10 for computer win, 0 for draw)

## Game mechanics

- Player is X (green), computer is O (orange)
- Minimax explores the full game tree, so the computer never loses; most games either win or draw depending on player strategy
- 500ms delay before computer move for UX polish (avoids instant response feeling)
- Board cells disable interaction once filled or if game ends

## Design notes

Theme uses green/orange gradient; if updating colors, search the file for `#22c55e` (green) and `#ff8c42` (orange) to keep all references consistent.

## Git workflow

**Commit and push all work to GitHub.** Each change should be committed with a clear, descriptive message (e.g. "Fix minimax bug in corner cases" or "Update button styling"). Push regularly to GitHub to maintain a complete history and ensure no work is lost. Use this repository as the source of truth for project status and progress.
