# Planning
Here is where I will write out what components and functions I will need in order to build the app. Essentially this is a blueprint of things that I can follow to stay on-track during development.
This planning document will attempt to _not_ assume any states, variable types, data types, or other forms of nuances.

>Design.md is currently a WIP, adding functions to be added as I write out each component and what it should be able to do.

>React updates the DOM when the state changes, so there **is not need for functions that check user page viewing states or similar states.**

# Table of Contents
1. [Available Features](#available-features)
1. [App](#app)
1. [Title](#title)
1. [Instructions](#instructions)
1. [Game] (#game)

## Available Features
In MVP status, Traders of the North should...
- [ ] Have a title page 
- [ ] Have a game page
- [ ] Have instructions
- ~~[ ] Have credits/info page~~
- [ ] Be able to quit game and return to title page
- [ ] Pages render on one root URL path _(So that Router package is not passing variables; avoid additional state management packages)_

## App
Purpose: Main container, state control, variable declarations

State needs to keep track of...
- [ ] If User is viewing title page
- [ ] If User is on the game page
- [ ] If User is on the instructions page
- [ ] If User is on the credits/info page

## Title
Purpose: Contains the details of the title page

The title should display...
- [ ] The main logo of the page
- [ ] A "play" option
- [ ] An "instructions option
- ~~[ ] A "credits/info" option~~
- [ ] Display credits and information

The title should have a function...
- [ ] That sets state operators when User clicks "play" option
- [ ] That sets state operators when User clicks "instructions" option

## Instructions
Purpose: Display the instructions for the game

The instructions should...
- [ ] Detail on how to play the game
- [ ] Have an option to return to the Title

The instructions should have a fucntion...
- [ ] That sets state operators when User clicks "title" option

## Game
Purpose: The main component for the game

A variable needs to define...
- [ ] Bag of possible pieces
- [ ] Base runes on reset or new game

The game state should keep track of...
- [ ] User viking's first and last name
- [ ] Opponent viking's first and last name
- [ ] User's current runes
- [ ] Opponent's current runes
- [ ] User's stockpile of gold, fish, totems, and seaweed
- [ ] Opponent's stockpile of gold, fish, totems, and seaweed
- [ ] Who's turn it is
- [ ] The message board content
- [ ] If the draw button should be displayed
- [ ] If the bet button should be displayed
- [ ] If the pass button should be displayed
- [ ] If the player or opponent must play a rune

The game should display...
- [ ] Header-style logo bordering the top
- [ ] Button for "Draw"
- [ ] Button for "Bet"
- [ ] Button for "Pass"
- [ ] Button to return to Title
- [ ] User's stockpile
- [ ] Opponent's stockpile
- [ ] The pot
- [ ] A message board

The game functions should include, and potentially affect...
- [ ] draw()
- [ ] pass()
- [ ] bet()
- [ ] placeRune(rune: int)


Intentional exludes:
- Note: Keep the methods in the game, so to avoid state control packages. E.g., don't put pot handlers in the pot component.
- Excludee: A button to view instructions

