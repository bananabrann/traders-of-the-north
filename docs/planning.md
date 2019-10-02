# Planning
Here is where I will write out what components and functions I will need in order to build the app. Essentially this is a blueprint of things that I can follow to stay on-track during development.
This planning document will attempt to _not_ assume any states, variable types, data types, or other forms of nuances.

>Design.md is currently a WIP, adding functions to be added as I write out each component and what it should be able to do.

>React updates the DOM when the state changes, so there **is not need for functions that check user page viewing states or similar states.**

# Table of Contents
1. [Available Features](#available-features)
1. [App](#app)
1. [Title Page](#title)

## Available Features
In MVP status, Traders of the North should...
- [ ] Have a title page
- [ ] Have a game page
- [ ] Have instructions page
- ~~[ ] Have credits/info page~~
- [ ] Be able to quit game and return to title page
- [ ] Pages render on one root URL path _(So that Router package is not passing variables; avoid additional state management packages)_

## App
Purpose: Main container, state control, variable declarations

A variable needs to define...
- [ ] Bag of possible pieces
- [ ] Base runes on reset or new game

State needs to keep track of...
- [ ] If User is viewing title page
- [ ] If User is on the game page
- [ ] If User is on the instructions page
- [ ] If User is on the credits/info page
- [ ] User viking's first and last name
- [ ] Opponent viking's first and last name
- [ ] User's current runes
- [ ] Opponent's current runes
- [ ] User's stockpile of gold, fish, totems, and seaweed
- [ ] Opponent's stockpile of gold, fish, totems, and seaweed
- [ ] Who's turn it is

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

