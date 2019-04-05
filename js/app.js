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
    discardedQuestions: [],
    victor: '', // player with high points
    status: '', // start-menu, quiz-active, round-over
    questArr: [],
    correctKey: '',
    clicked: '',
    begin1P() {
        const player1 = new Player();
        this.activePlayer = player1
        game.status = 'game'
    },
    begin2P() {
        const player1 = new Player();
        const player2 = new Player();
    },
    begin3P() {
        const player1 = new Player();
        const player2 = new Player();
        const player3 = new Player();
    },
    begin4P() {
        const player1 = new Player();
        const player2 = new Player();
        const player3 = new Player();
        const player4 = new Player();
    },
    pickVictor() {
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
        const q14 = new Question('Which French King lost his head at the climax of the French Revolution', 'Charles X', 'Napoleon I', 'Louis XIV', 'Louis XVI', 'd');
        this.questArr.push(q14);
        const q15 = new Question('Christopher Columbus first made landfall in what is now...?', 'Cuba', 'Haiti', 'Puerto Rico', 'The Bahamas', 'd');
        this.questArr.push(q15);
    },
    getQuestion() {
        qNum = Math.floor(Math.random() * this.questArr.length);
        $('.feeder').text(this.questArr[qNum].question);
        $('.a').text(this.questArr[qNum].a);
        $('.b').text(this.questArr[qNum].b);
        $('.c').text(this.questArr[qNum].c);
        $('.d').text(this.questArr[qNum].d);
    },
    clickAnswer() {
        this.correctKey = this.questArr[qNum].correct
        if(this.clicked.hasClass(this.correctKey)) {
            this.activePlayer.points += 1;
        }
        this.discardedQuestions.push(game.questArr[qNum])
        this.getQuestion();
    }
}



$('.a').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.genQuestions();
        game.begin1P();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});

$('.b').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.genQuestions();
        game.begin1P();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});

$('.c').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.genQuestions();
        game.begin1P();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});

$('.d').on('click', (e) => {
    $clicked = $(e.target);
    game.clicked = $clicked;
    if(game.status == '') {
        game.genQuestions();
        game.begin1P();
        game.getQuestion();
    } else if(game.status == 'game') {
        game.clickAnswer();
    }
});






