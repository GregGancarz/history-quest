///////////// HISTORY QUESTIONS GAME  MVP ///////////////

-user clicks start and the game starts

-user is presented a question and multiple answers to choose from

-user clicks an answer and is shown another question

-this continues until the questions have all been answered

-oppenent is asked if ready. They click ready and the process repeats

-when all questions have been answered, users are presented their scores 
 and a button that takes them back to the start menu screen.


//////// GAME WIREFRAMES - IMAGES OF HARD COPY ///////////

https://imgur.com/a/RLKDP10

///////////////// PROJECT OVERVIEW //////////////////

History Quest is a simple single or multiplayer quiz game that randomly selects questions from a premade list. Players' scores are logged and then returned at the end of the round, when a winner is selected. If a tie is reached, players are notified at what score and which players tied.

A quiz-style game was chosen as the project subject due it's similarity to real-world software development applications. The creator assumed this style of game would be better practice for real-world tasks then making a game that required or could heavily utilize tools like canvas would be.

The only technologies used were JavaScript, jQuery, CSS, and HTML. Players and questions each have classes while the game object contained the majority of neccessary properties, arrays and functions. Button-click event listeners contained some "logic", depending on which game-mode the game was currently in, but besides that, all logic remains in the functions. The game's flow is based upon how mayn questions have been selected and how many players are active. 

Some unresolved "problems" were things like unpolished formatting in the end-game scoreboard screens, like failing to place player names and scores on different lines. Depsite these cosmetic defects, however, the game runs as intended. Further additions could include a question log to display which question the player is on and how many they have left etc.