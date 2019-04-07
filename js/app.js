/////// HISTORY QUESTIONS GAMES /////////

// user clicks start and the game starts

// user is presented a question and multiple answers to choose from

// user clicks an answer and is shown another question

// this continues until the questions have all been answered

// oppenent is asked if ready. They click ready and the process repeats

// when all questions have been answered, users are presented their scores 
// and a button that takes them back to the start menu screen.



class Player {
	constructor(selector, name) {
		this.points = 0;
        this.selector = selector;
        this.name = name;

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
    playerArr: [],
    questArr: [],
    qToMove: [],
    discardedQuestions: [],
    quizLength: '',
    victor: '', // player with high points
    status: '',
    correctKey: '',
    clicked: '',
    qNum: '',
    begin1P() {
        const player1 = new Player(0, 'Player 1');
        this.activePlayer = player1;
        this.playerArr.push(player1)
    },
    begin2P() {
        const player1 = new Player(0, 'Player 1');
        const player2 = new Player(1, 'Player 2');        
        this.activePlayer = player1;
        this.playerArr.push(player1)
        this.playerArr.push(player2)
    },
    begin3P() {
        const player1 = new Player(0, 'Player 1');
        const player2 = new Player(1, 'Player 2');
        const player3 = new Player(2, 'Player 3');
        this.activePlayer = player1;
        this.playerArr.push(player1)
        this.playerArr.push(player2)
        this.playerArr.push(player3)
    },
    begin4P() {
        const player1 = new Player(0, 'Player 1');
        const player2 = new Player(1, 'Player 2');
        const player3 = new Player(2, 'Player 3');
        const player4 = new Player(3, 'Player 4');
        this.activePlayer = player1;
        this.playerArr.push(player1)
        this.playerArr.push(player2)
        this.playerArr.push(player3)
        this.playerArr.push(player4)
    },
    pickVictor() {
        var names = ["Ben", "Joel", "Judy", "Anne"];
        var scores = [88, 98, 77, 88];
        var textDisplay;
        console.log('high score player recognized');
    },
    returnToMain() {
        location.reload();
    },
    genQuestions() {
        const q1 = new Question('Catherine the Great ruled what country?', 'Russia', 'France', 'Germany', 'England', 'a');
        this.questArr.push(q1);
        const q2 = new Question('During which year did Christopher Columbus first arrive in the Americas?', '1492', '1503', '1483', '1514', 'a');
        this.questArr.push(q2);
        const q3 = new Question('The Islamic conquest of Spain was initiated by which caliphate?', 'Umayyad', 'Rashidun', 'Abbasid', 'Ottoman', 'a');
        this.questArr.push(q3);
        const q4 = new Question('Which of the following men is known as the "father of Texas"?', 'Stephen Austin', 'Sam Houston', 'Alexander Dalls', 'Davey Crockett', 'a');
        this.questArr.push(q4);
        const q5 = new Question('Julius Caesar was assassinated in what year?', '10 AD', '44 BC', '112 AD', '34 BC', 'b');
        this.questArr.push(q5);
        const q6 = new Question('Much of what is now Illinois was originally explored and settled by which Imperial Power?', 'England', 'France', 'Spain', 'Portugal', 'b');
        this.questArr.push(q6);
        const q7 = new Question('The Great War spanned which years?', '1909 - 1911', '1914-1918', '1904-1912', '1939-1945', 'b');
        this.questArr.push(q7);
        const q8 = new Question('King Henry VIII ruled which Kingdom?', 'France', 'England', 'Spain', 'Holland', 'b');
        this.questArr.push(q8);
        const q9 = new Question('The Chicago fire occurred in what year?', '1903', '1899', '1871', '1798', 'c');
        this.questArr.push(q9);
        const q10 = new Question('Thomas Jefferson died on the same day in the same year as which other founding father?', 'George Washington', 'Ben Frankin', 'John Adams', 'James Madison', 'c');
        this.questArr.push(q10);
        const q11 = new Question('Puerto Rico gained independence from Spain during which US president\'s term?', 'Theodore Roosevelt', 'William Taft', 'William McKinley', 'Woodrow Wilson', 'c');
        this.questArr.push(q11);
        const q12= new Question('Dom Pedro I was the founder of what nation?', 'Mexico', 'Bolivia', 'Brazil', 'Chile', 'c');
        this.questArr.push(q12);
        const q13 = new Question('Ireland gained independence from Great Britain in what year?', '1590', '1686', '1891', '1921', 'd');
        this.questArr.push(q13);
        const q14 = new Question('Which French King lost his head at the climax of the French Revolution?', 'Charles X', 'Napoleon I', 'Louis XIV', 'Louis XVI', 'd');
        this.questArr.push(q14);
        const q15 = new Question('Christopher Columbus first made landfall in what is now...?', 'Cuba', 'Haiti', 'Puerto Rico', 'The Bahamas', 'd');
        this.questArr.push(q15);
        const q16 = new Question('The Russian Empire lost a major war against this Asian country around the turn of the 19th century:', 'China', 'Mongolia', 'Vietnam', 'Japan', 'd');
        this.questArr.push(q16);

        const q17 = new Question('The ancient region of Gaul comprised much of what modern nation?', 'France', 'Mongolia', 'Germany', 'Turkey', 'a');
        this.questArr.push(q17);
        const q18 = new Question('Which of the following men served as the 8th president of the United States?', 'Abraham Lincoln', 'Martin Van Buren', 'Benjamin Frankin', 'Jonathan Marston', 'b');
        this.questArr.push(q18);    
        const q19 = new Question('Although Italian by birth, Colombus sailed under the colors of which European nation?', 'England', 'Portugal', 'Spain', 'Scotland', 'c');
        this.questArr.push(q19);
        const q20 = new Question('Had he been born today, religious reformer Martin Luther would have lived in which European nation?', 'Poland', 'England', 'Italy', 'Germany', 'd');
        this.questArr.push(q20);

        const q21 = new Question('China regained control of Hong Kong from this nation, after it\'s 99 year lease of the island expired in 1997:', 'Great Britain', 'France', 'Japan', 'Australia', 'a');
        this.questArr.push(q21);
        const q22 = new Question('The War of the Roses was a dynastic struggle fought over the throne of which kingdom?', 'France', 'England', 'Bohemia', 'Sweden', 'b');
        this.questArr.push(q22);
        const q23 = new Question('Lasting from 1636 until 1912, this was the last dynasty to rule China:', 'Han', 'Shang', 'Qing', 'Tang', 'c');
        this.questArr.push(q23);
        const q24 = new Question('Thanks to series of partitions, this European nation ceased to exist from 1795, until 1918, when it regained its sovereignty:', 'Bulgaria', 'Switzerland', 'Denmark', 'Poland', 'd');
        this.questArr.push(q24);
    },
    getQuestion() {
        game.status = 'game';
        this.qNum = Math.floor(Math.random() * this.questArr.length);
        $('.feeder').text(this.questArr[this.qNum].question);
        $('.a').text(this.questArr[this.qNum].a);
        $('.b').text(this.questArr[this.qNum].b);
        $('.c').text(this.questArr[this.qNum].c);
        $('.d').text(this.questArr[this.qNum].d);
    },
    switchPlayer() {
        nextPlayNum = (this.activePlayer.selector += 1);
        this.activePlayer = this.playerArr[nextPlayNum];
        this.status = 'pause';
        $('.feeder').text(`Question limit reached. ${this.activePlayer.name}, it is now your turn! Are you ready to continue?`);
        $('.a').text('CONTINUE');
        $('.b').hide();
        $('.c').hide();
        $('.d').hide();
    },
    unhide() {
        $('.feeder').text(this.questArr[this.qNum].question);
        $('.b').show();
        $('.c').show();
        $('.d').show();
    },
    cleanQuestArr() {
        qToMove = this.questArr.splice(this.questArr[(this.qNum)], 1);
        this.discardedQuestions.push(this.qToMove);
        qToMove = [];
    },
    clickAnswer() {
        this.correctKey = this.questArr[this.qNum].correct
        if(this.clicked.hasClass(this.correctKey)) {
            this.activePlayer.points += 1;
        };
        this.cleanQuestArr();
        if(this.discardedQuestions.length % (this.quizLength) === 0 && (this.activePlayer.selector + 1) < this.playerArr.length) {
            this.switchPlayer();
        } else if (this.discardedQuestions.length % (this.quizLength) === 0 && (this.activePlayer.selector + 1) == this.playerArr.length) {
            this.getScores();
        } else {
            this.getQuestion();
        };
        
    },
    getScores() {
        this.status = 'end';
        $('.feeder').text(`All players have completed their quizzes and Player X is the winner with a high score of Y!`);
        $('.a').text('Play again');
        $('.b').hide();
        $('.c').hide();
        $('.d').hide();

    },
    getQLimits() {
        this.status = 'setLimit';
        $('.feeder').text(`Select how many questions each player will have...`);
        $('.a').text(2);
        $('.b').text(4);
        $('.c').text(6);
        $('.d').text(8);
    }
}



$('.a').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.begin1P();
        game.getQLimits();
    } else if(game.status == 'setLimit') {
        game.quizLength = game.clicked.text()
        game.genQuestions();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    } else if(game.status == 'pause') {
        game.getQuestion();
        game.unhide();
    } else if(game.status == 'end') {
        game.returnToMain();
    }
});

$('.b').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.begin2P();
        game.getQLimits();
    } else if(game.status == 'setLimit') {
        game.quizLength = parseInt(game.clicked.text());        
        game.genQuestions();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});

$('.c').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.begin3P();
        game.getQLimits();
    } else if(game.status == 'setLimit') {
        game.quizLength = game.clicked.text()
        game.genQuestions();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});

$('.d').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.begin4P();
        game.getQLimits();
    } else if(game.status == 'setLimit') {
        game.quizLength = game.clicked.text()
        game.genQuestions();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});






