<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/3.0/">Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License</a>.

<div>
  <p align="center">
    <img src="https://traders-of-the-north.s3.amazonaws.com/git-logo.png" alt="Traders of the North Logo Main" width="800" />
  </p>
</div>

# Traders of the North
## Contents
1. [How to Install](#how-to-install)
1. [How to Uninstall](#how-to-uninstall)
1. [How to Play](#how-to-play)
1. [Game Instructions](#game-instructions)
1. [Developer's Dictionary](#dev-dictionary)
1. [Contributing](#contributing)

# How to Install
## Developers
#### Requirements
- Have Node.
- Have NPM.

> TODO - Add version compatibility.

## Run Source Locally
1. Once the repo is downloaded, use `npm install` to download dependencies.
1. Run the game locally: `npm start`.

## Run Build Locally 
1. Install dependencies with `npm install`.
1. Install **serve** with `npm install -g serve`.
1. Call build script: `npm run-script build`.
1. Follow serve instructions after successful build.

## Docker
The Docker image contains all the source code of the game, though when running the Docker container, it is calling `serve` and opening traffic for **port 5000**.

Build the image with 
```
docker build -t traders-of-the-north .
``` 

Then run the image with 
```
docker run --name traders-of-the-north --rm -d -p 5000:5000 traders-of-the-north
```

## Non-Developers
<!-- NOTE: Needs checking that these instructions still work. -->
These instructions are *only* for Mac or Linux computers. For Windows, please contact bananabrann at https://github.com/bananabrann.

Easy install and uninstall scripts can be found in the **scripts** folder of the project.

### Windows
No work order to add instructions for Windows. Please contact bananabrann at https://github.com/bananabrann

### Mac and Linux
#### Step 1: Open the Terminal

##### Linux-Based Systems
Your terminal and shell depends on the distro you use. Check your toolbar for anything that looks like "console" or "terminal". A common thing is additional letters or phrases in the name, such as "xTerminal" or "EZConsole".

##### Mac
1. Press Command (⌘) and Spacebar at the same time. This should bring up a typable field in the center of your screen.
1. Type "terminal" into the searchbar, and click on the application named "Terminal".

#### Step 2: Install
1. Copy and paste the following into the open Terminal window: `cd ~/Desktop && git clone git@github.com:bananabrann/traders-of-the-north.git && chmod 511 ./traders-of-the-north/scripts/install.sh && ./scripts/traders-of-the-north/install.sh`

> You may run in to issues with commands that are available. If this is the case, please contact me for specific instructions on installing the neccesary packages.

#### Step 3: Run
This step assumes the Traders of the North folder is on your Desktop
1. Within the open Terminal window, paste the following: `cd ~/Desktop/traders-of-the-north/scripts && bash ./run.sh`

# How to Uninstall
If you are not a developer and want to uninstall all the dependencies used, make sure Traders of the North folder is in your Home folder then copy and paste the following:
`cd ~/traders-of-the-north && chmod 511 ./uninstall.sh && ./uninstall.sh && cd ../ && rm -rf traders-of-the-north/`

******

# How to Play
(Getting to the game)
> Traders of the North is in development at this time, and not hosted anywhere for open play. You may of  course access and play the current state of the game by cloning the repo down.

Traders of the North will be hosted online, and will only require a modern browser.

>A legacy, "alpha" version of the game exists but is taken down from public servers as of October 2019. If you would like access to this version of the game, please contact me.

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

# Dev Dictionary
This section will hope to describe describe all the vocabulary used in Traders of the North, its documents, and source code.

- **User**: The human player of the game.
- **Opponent**: The computer player of the game.
- **Viking**: One of the two characters in Traders of the North, referring to both the User and/or Computer Opponent.
- **Stockpile**: A viking's collection of game pieces.
- **Rune**: The representation of money used for betting.
- **Pot**: The center collection of the current items offered if a bid were to occur.
- **Bag**: The possible game pieces stored in an array to detemrine ratio.

# Contributing
There is not a contributing policy. If you would like to contribute, simply open an issue of discussion or pull request and please outline what it is you have done or plan to do.

I appreciate any and all folks who want to contribute to the game!
