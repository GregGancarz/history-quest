/////// HISTORY QUESTIONS GAMES /////////

// user clicks start and the game starts

// user is presented a question and multiple answers to choose from

// user clicks an answer and is shown another question

// this continues until the questions have all been answered

// oppenent is asked if ready. They click ready and the process repeats

// when all questions have been answered, users are presented their scores 
// and a button that takes them back to the start menu screen.



class Player {
	constructor() {
		this.points = 0;
	}
    pickAnswer() {
        console.log('answer picked');
    }
	
}

class Question {
    constructor(question, a, b, c, d, correct) {
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.correct = correct
    }
}   

const game = {
    activePlayer: '',
    questionsAsked: 0,
    victor: '', // player with high points
    status: '', // start-menu, quiz-active, round-over

    begin1P() {
        console.log('1P game has begun');
        const player1 = new Player();
        console.log(player1);
    },
    begin2P() {
        console.log('2P game has begun');
        const player1 = new Player();
        const player2 = new Player();
        console.log(player1);
        console.log(player2);
    },
    begin3P() {
        console.log('3P game has begun');
        const player1 = new Player();
        const player2 = new Player();
        const player3 = new Player();
        console.log(player1);
        console.log(player2);
        console.log(player3);
    },
    begin4P() {
        console.log('4P game has begun');
        const player1 = new Player();
        const player2 = new Player();
        const player3 = new Player();
        const player4 = new Player();
        console.log(player1);
        console.log(player2);
        console.log(player3);
        console.log(player4);
    },
    pickVictor() {
        console.log('high score player recognized');
    },
    returnToMain() {
        location.reload();
    }
}
    
$('#a').on('click', () => {
  game.begin1P();
})
$('#b').on('click', () => {
  game.begin2P();
})
$('#c').on('click', () => {
  game.begin3P();
})
$('#d').on('click', () => {
  game.begin4P();
})






