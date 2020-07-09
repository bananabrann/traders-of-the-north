<div>
  <p align="center">
    <img src="https://traders-of-the-north.s3.amazonaws.com/git-logo.png" alt="Traders of the North Logo Main" width="800" />
  </p>
</div>

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/">Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</a>.

# Traders of the North
## Contents
1. [Where to Play](#where-to-play)
1. [How to Install](#how-to-install)
1. [How to Uninstall](#how-to-uninstall)
1. [Game Instructions](#game-instructions)
1. [Contributing](#contributing)



# Where to Play
Traders of the North will be hosted online, and will only require a modern browser.

> A legacy, "alpha" version of the game exists but is taken down from public servers as of October 2019. If you would like access to this version of the game, checkout the "legacy" git branch on the repo.



# How to Install
In order to run Traders of the North on your local machine, **you need Node installed**, with recommended version at least v10. Visit https://nodejs.org/en/download/ for installation packages.

Traders of the North is available on any operating system that has a web browser and Node with NPM. However, this README's installation instructions will assume you know how to navigate the CLI and using either Linux or MacOS. *No Windows support is planned at this time.*

#### Installing
1. Open the project root in your CLI.
1. `npm install`

#### Run Locally
1. Run the game locally: `npm start`.

#### Build Locally 
1. Install dependencies with `npm install`.
1. Install **serve** with `npm install -g serve`.
1. Call build script: `npm run-script build`.
1. Follow serve instructions after successful build.

#### Docker
The Docker image contains all the source code of the game, though when running the Docker container, it is calling `serve` and opening traffic for **port 5000**.

1. Build the image `docker build -t traders-of-the-north .`
1. Run the image `docker run --name traders-of-the-north --rm -d -p 5000:5000 traders-of-the-north`



# Game Instructions

## Objective
The object of the game is to have the most points at the end of game. The end of the game occurs when both players use all their runes, at which point the scores will be tallied based on the stockpile of resources the two players collected.
- Gold: 1 point a piece
- Fish: 10 points to the player with the most, other gets nothing
- Totem: -2 golds a piece
- Seaweed: -2 fish a piece

> Note: A player *cannot* drop below 0 of a resource.

> Example: A player with 1 gold, 5 fish, 1 totems, and 2 seaweed actually has 0 gold and 1 fish.

## Gameplay
On a turn, a player is given two options: Draw, or Bet. A user can only act **once** per turn, under any circumstance. The main drive of the game relies on the strategy of calling bet and letting the pot grow based on the pieces in it. The game utilizies bluffs and calls to strategize the placement of a player's limited runes, similar to cards in Texas Hold 'Em.

### Draw
On draw, a resource is unloaded off the longboat and into the pot. The resource drawn is random, but is weighted towards some pieces.

The maximum number of items allowed in the pot is **eight**. If a player draws the eigth piece, the other player cannot draw and must bet. This is called a **forced bet**.

### Bet
On bet, the turn is passed to the other player, even if the bet is forced. The other player can either *place a rune*, or *pass*.

**Non-Better Places a Rune**: If the other player places a rune, the original betting player can opt to pass, in which case the other player wins the pot and expends the rune placed. The original better can also place a rune. Whoever's rune is higher will take the pot.

**Non-Better Passes**: If the other player passes, *the original betting player must place a rune and take the pot*.

## Last Player Standing
When one player expends all his or her runes, the other player will "play the pot". This player will continue drawing pieces until a desired pot is achieved, and player uses a rune to take the pot. The usual eight pot limit still applies to this instance.

> In future games, an additional piece will added to the possibilities of the draw that will spice up this stage of the game.



# Contributing
There is not a contributing policy. If you would like to contribute, simply open an issue of discussion or pull request and please outline what it is you have done or plan to do.

I appreciate any and all folks who want to contribute to the game!
