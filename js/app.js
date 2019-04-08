/////// HISTORY QUESTIONS GAMES /////////

// user clicks start and the game starts

// user is presented a question and multiple answers to choose from

// user clicks an answer and is shown another question

// this continues until the questions have all been answered

// oppenent is asked if ready. They click ready and the process repeats

// when all questions have been answered, users are presented their scores 
// and a button that takes them back to the start menu screen.


////// CLASS CONSTRUCTORS //////
class Player {
	constructor(selector, name) {
		this.points = 0;
        this.selector = selector;
        this.name = name;

	}
}

class Question {
    constructor(question, a, b, c, d, correct, link) {
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.correct = correct;
        this.link = link;
    }
}   

////// GAME OBJECTS & ARRAYS //////
const game = {
    activePlayer: '',
    playerArr: [],
    questArr: [],
    qToMove: [],
    discardedQuestions: [],
    playerPoints: [],
    quizLength: '',
    status: '',
    clicked: '',
    qNum: '',

////// FUNCTIONS -- IN RELEVANT ORDER //////
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
    getQLimits() {
        this.status = 'setLimit';
        $('.feeder').text(`Select how many questions each player will have...`);
        $('h4').hide();
        $('.a').text(3);
        $('.b').text(5);
        $('.c').text(8);
        $('.d').text(10);
    },
    genQuestions() {
        const q1 = new Question('Catherine the Great ruled what country?', 'Russia', 'France', 'Germany', 'England', 'a', 'https://www.thefamouspeople.com/profiles/images/catherine-the-great-4.jpg');
        this.questArr.push(q1);
        const q2 = new Question('During which year did Christopher Columbus first arrive in the Americas?', '1492', '1503', '1483', '1514', 'a', 'http://www.latinamericanstudies.org/cuba/colon-desembarco.jpg');
        this.questArr.push(q2);
        const q3 = new Question('The Islamic conquest of Spain was initiated by which Muslim caliphate?', 'Umayyad', 'Rashidun', 'Abbasid', 'Ottoman', 'a', 'https://i.pinimg.com/originals/62/1c/29/621c29589b4cbd3b4834b83a5efe9b26.jpg');
        this.questArr.push(q3);
        const q4 = new Question('Which of the following men is known as the "father of Texas"?', 'Stephen Austin', 'Sam Houston', 'Alexander Dalls', 'Davey Crockett', 'a', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Kerr_county_tx_courthouse_2015.jpg/1200px-Kerr_county_tx_courthouse_2015.jpg');
        this.questArr.push(q4);
        const q5 = new Question('Julius Caesar was assassinated in what year?', '10 AD', '44 BC', '112 AD', '34 BC', 'b', 'http://www.needcoffee.com/wp-content/uploads/2017/05/assassination-julius-caesar.jpg');
        this.questArr.push(q5);
        const q6 = new Question('Much of what is now Illinois was originally explored and settled by which Imperial Power?', 'England', 'France', 'Spain', 'Portugal', 'b', 'https://media-cdn.tripadvisor.com/media/photo-s/02/97/65/5e/kids-play-fort.jpg');
        this.questArr.push(q6);
        const q7 = new Question('The Great War spanned which years?', '1909 - 1911', '1914-1918', '1904-1912', '1939-1945', 'b', 'https://metrouk2.files.wordpress.com/2016/06/ad_211323456.jpg?quality=80&strip=all&strip=all');
        this.questArr.push(q7);
        const q8 = new Question('King Henry VIII ruled which Kingdom?', 'France', 'England', 'Spain', 'Holland', 'b', 'http://www.zocalopublicsquare.org/wp-content/uploads/2015/11/Henry-VIII_lead-image.jpg');
        this.questArr.push(q8);
        const q9 = new Question('The Chicago fire occurred in what year?', '1903', '1899', '1871', '1798', 'c', 'http://withtimetospare.com/wp-content/uploads/2014/10/chicago-fire.jpg');
        this.questArr.push(q9);
        const q10 = new Question('Thomas Jefferson died on the same day in the same year as which other founding father?', 'George Washington', 'Ben Frankin', 'John Adams', 'James Madison', 'c', 'http://presidentialpetmuseum.com/wp-content/uploads/2016/02/thomas-jefferson.jpg');
        this.questArr.push(q10);
        const q11 = new Question('Puerto Rico gained independence from Spain during which US president\'s term?', 'Theodore Roosevelt', 'William Taft', 'William McKinley', 'Woodrow Wilson', 'c');
        this.questArr.push(q11);
        const q12= new Question('Dom Pedro I was the founder of what nation?', 'Mexico', 'Bolivia', 'Brazil', 'Chile', 'c');
        this.questArr.push(q12);
        const q13 = new Question('Ireland gained independence from Great Britain in what year?', '1590', '1686', '1891', '1921', 'd');
        this.questArr.push(q13);
        const q14 = new Question('Which French King lost his head at the climax of the French Revolution?', 'Louis XIV', 'Napoleon I', 'Charles X', 'Louis XVI', 'd');
        this.questArr.push(q14);
        const q15 = new Question('Christopher Columbus first made landfall in what is now...?', 'Cuba', 'Haiti', 'Puerto Rico', 'The Bahamas', 'd');
        this.questArr.push(q15);
        const q16 = new Question('The Russian Empire lost a major war against this Asian country around the turn of the 19th century:', 'China', 'Mongolia', 'Vietnam', 'Japan', 'd');
        this.questArr.push(q16);

        const q17 = new Question('The ancient region of Gaul comprised much of what modern nation?', 'France', 'Mongolia', 'Germany', 'Turkey', 'a');
        this.questArr.push(q17);
        const q18 = new Question('Which of the following men served as the 8th president of the United States?', 'Abraham Lincoln', 'Martin Van Buren', 'Benjamin Frankin', 'Jonathan Marston', 'b');
        this.questArr.push(q18);    
        const q19 = new Question('Although Italian by birth, Columbus sailed under the colors of which European nation?', 'England', 'Portugal', 'Spain', 'Scotland', 'c');
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

        const q25 = new Question('John Wilkes Booth shouted "Sic semper tyrannis" after shooting Lincoln. The phrase is Latin and means:', 'Thus always to tyrants', 'For the resumption of tyranny', 'the South will rise again', 'I came, I saw, I conquered', 'a');
        this.questArr.push(q25);
        const q26 = new Question('in 1830, Greece gained its independence after centuries of brutal subjugation under which nation?', 'Bulgaria', 'the Ottoman Caliphate', 'Hungary', 'Romania', 'b');
        this.questArr.push(q26);
        const q27 = new Question('Casimir Pulaski, one of only eight people to be awarded honorary United States citizenship, was a Polish national who gained fame as a general in the American Revolution. At one point, he saved the life of which founding father?', 'Alexander Hamilton', 'Samuel Adams', 'George Washington', 'Thomas Jefferson', 'c');
        this.questArr.push(q27);
        const q28 = new Question('Saint Ignatius of Loyola, who founded the Catholic Holy Order of the Jesuits in 16th century, was a native of which land?', 'Italy', 'England', 'Greece', 'Spain', 'd');
        this.questArr.push(q28);

        const q29 = new Question('With the backing of the US, Panama gained independence from this nation in 1903:', 'Colombia', 'Spain', 'Costa Rica', 'Nicaraugua', 'a');
        this.questArr.push(q29);
        const q30 = new Question('World War II was triggered in 1939 after Germany\'s invasion of whch nation?', 'Holland', 'Poland', 'Austria', 'France', 'b');
        this.questArr.push(q30);
        const q31 = new Question('Vincent Van Gogh was an impressionist painter hailing from which country?', 'France', 'Ireland', 'The Netherlands', 'Austria', 'c');
        this.questArr.push(q31);
        const q32 = new Question('Which of the following nations remained neutral and uninvolved in World War II?', 'Great Britain', 'Italy', 'Greece', 'Switzerland', 'd');
        this.questArr.push(q32);

        const q33 = new Question('Alexander the Great hailed from which ancient region?', 'Greece', 'Italy', 'Dalmatia', 'Thrace', 'a');
        this.questArr.push(q33);
        const q34 = new Question('Southern Rhodesia became what country in 1980?', 'South Africa', 'Zimbabwe', 'Zambia', 'Botswana', 'b');
        this.questArr.push(q34);
        const q35 = new Question('Founded in 1636, which is the oldest University in the USA?', 'Cornell', 'Princeton', 'Harvard', 'Yale', 'c');
        this.questArr.push(q35);
        const q36 = new Question('Brazil was originally a colony of which nation?', 'England', 'Spain', 'Holland', 'Portugal', 'd');
        this.questArr.push(q36);

        const q37 = new Question('Jamestown, the first permanent English Colony in North America, was founded in which future state?', 'Virginia', 'Delaware', 'Rhode Island', 'New Jersey', 'a');
        this.questArr.push(q37);
        const q38 = new Question('What was the name of the pandemic which killed over 1% of the world\'s population in 1918? Spanish Flu', 'Small pox', 'Spanish flu', 'Bubonic plague', 'Scarlet fever', 'b');
        this.questArr.push(q38);
        const q39 = new Question('Which explorer was the first to cross the Pacific Ocean?', 'Francis Drake', 'Hernan Cortez', 'Ferdinand Magellan', 'Chirstopher Columbus', 'd');
        this.questArr.push(q39);
        const q40 = new Question('What 19th-century president erroneously noted: "The ballot is stronger than the bullet"?', 'Andrew Jackson', 'William McKinley', 'Zachary Taylor', 'Abraham Lincoln', 'd');
        this.questArr.push(q40);
    },
    getQuestion() {
        game.status = 'game';
        this.qNum = Math.floor(Math.random() * this.questArr.length);
        $('.feeder').text(this.questArr[this.qNum].question);
        $('.a').text(this.questArr[this.qNum].a);
        $('.b').text(this.questArr[this.qNum].b);
        $('.c').text(this.questArr[this.qNum].c);
        $('.d').text(this.questArr[this.qNum].d);
        $('img').attr('src', 'game.questArr[game.qNum].link')

    },
    clickAnswer() {
        const correctKey = this.questArr[this.qNum].correct
        if(this.clicked.hasClass(correctKey)) {
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
    switchPlayer() {
        this.playerPoints.push(this.activePlayer.points);
        nextPlayNum = (this.activePlayer.selector += 1);
        this.activePlayer = this.playerArr[nextPlayNum];
        this.status = 'pause';
        $('.feeder').text(`Question limit reached. ${this.activePlayer.name}, it is now your turn! Are you ready to continue?`);
        $('.a').text('Yes, continue');
        $('.b').hide();
        $('.c').hide();
        $('.d').hide();
    },
    cleanQuestArr() {
        this.qToMove = this.questArr.splice(this.qNum, 1);
        this.discardedQuestions.push(this.qToMove);
        this.qToMove = [];
    },
    unhide() {
        $('.feeder').text(this.questArr[this.qNum].question);
        $('.b').show();
        $('.c').show();
        $('.d').show();
    },
    getScores() {
        this.playerPoints.push(this.activePlayer.points);
        this.status = 'end';
        const indices = [];
        const highScore = Math.max.apply(Math, this.playerPoints);
        let scoreIndex = this.playerPoints.indexOf(highScore);
        while (scoreIndex != -1) {
            indices.push(scoreIndex);
            scoreIndex = this.playerPoints.indexOf(highScore, scoreIndex + 1);
        }
        console.log(indices);
        if(this.playerArr.length == 1){
            const victor = this.playerArr[indices[0]];
            if(highScore < 2) {
                $('.feeder').text(`${victor.name}, your score is ${highScore}... You should have spent less time talking in history class!`);
            } else {          
                $('.feeder').text(`${victor.name}, your score is ${highScore}!`);
            };
        } else if(indices.length == 1) {
            const victor = this.playerArr[indices[0]];           
            $('.feeder').text(`All players have completed their quizzes and ${victor.name} is the winner with a high score of ${highScore}!`);
        } else {
            const vicArr = [];
            for(let i = 0; i < indices.length; i++) {
                vicArr.push(this.playerArr[indices[i]]);
            };
            let string = "All players have completed their quizzes and it's a tie! With a high score of " + highScore + " it's a draw between these players: \n";
            for(let i = 0; i < vicArr.length; i++) {
                string = string + vicArr[i].name + " ";
                $('.feeder').text(string);
            };
        };
        $('.a').text('Play again');
        $('.b').hide();
        $('.c').hide();
        $('.d').hide();
    },
    returnToMain() {
        location.reload();
    }
}

////// EVENT LISTENERS. //////
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






