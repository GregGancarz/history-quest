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
        const q1 = new Question('Catherine the Great ruled what country?', 'Russia', 'France', 'Germany', 'England', 'a', 'pics/q01.jpg');
        this.questArr.push(q1);
        const q2 = new Question('During which year did Christopher Columbus first arrive in the Americas?', '1492', '1503', '1483', '1514', 'a', 'pics/q02.jpg');
        this.questArr.push(q2);
        const q3 = new Question('The Islamic conquest of Spain was initiated by which Muslim caliphate?', 'Umayyad', 'Rashidun', 'Abbasid', 'Ottoman', 'a', 'pics/q03.jpg');
        this.questArr.push(q3);
        const q4 = new Question('Which of the following men is known as the "father of Texas"?', 'Stephen Austin', 'Sam Houston', 'Alexander Dalls', 'Davey Crockett', 'a', 'pics/q04.jpg');
        this.questArr.push(q4);
        const q5 = new Question('Julius Caesar was assassinated in what year?', '10 AD', '44 BC', '112 AD', '34 BC', 'b', 'pics/q05.jpg');
        this.questArr.push(q5);
        const q6 = new Question('Much of what is now Illinois was originally explored and settled by which Imperial Power?', 'England', 'France', 'Spain', 'Portugal', 'b', 'pics/q06.jpg');
        this.questArr.push(q6);
        const q7 = new Question('The Great War spanned which years?', '1909 - 1911', '1914-1918', '1904-1912', '1939-1945', 'b', 'pics/q07.jpg');
        this.questArr.push(q7);
        const q8 = new Question('King Henry VIII ruled which Kingdom?', 'France', 'England', 'Spain', 'Holland', 'b', 'pics/q08.jpg');
        this.questArr.push(q8);
        const q9 = new Question('The Chicago fire occurred in what year?', '1903', '1899', '1871', '1798', 'c', 'pics/q09.jpg');
        this.questArr.push(q9);
        const q10 = new Question('Thomas Jefferson died on the same day in the same year as which other founding father?', 'George Washington', 'Ben Frankin', 'John Adams', 'James Madison', 'c', 'pics/q10.jpg');
        this.questArr.push(q10);
        const q11 = new Question('Puerto Rico gained independence from Spain during which US president\'s term?', 'Theodore Roosevelt', 'William Taft', 'William McKinley', 'Woodrow Wilson', 'c', 'pics/q11.jpg');
        this.questArr.push(q11);
        const q12= new Question('Dom Pedro I was the founder of what nation?', 'Mexico', 'Bolivia', 'Brazil', 'Chile', 'c', 'pics/q12.jpg');
        this.questArr.push(q12);
        const q13 = new Question('Ireland gained independence from Great Britain in what year?', '1590', '1686', '1891', '1921', 'd', 'pics/q13.jpg');
        this.questArr.push(q13);
        const q14 = new Question('Which French King lost his head at the climax of the French Revolution?', 'Louis XIV', 'Napoleon I', 'Charles X', 'Louis XVI', 'd', "pics/q14.jpg");
        this.questArr.push(q14);
        const q15 = new Question('Christopher Columbus first made landfall in what is now...?', 'Cuba', 'Haiti', 'Puerto Rico', 'The Bahamas', 'd', 'pics/q15.jpg');
        this.questArr.push(q15);
        const q16 = new Question('The Russian Empire lost a major war against this Asian country at the beginning 20th century:', 'China', 'Mongolia', 'Vietnam', 'Japan', 'd', 'pics/q16.jpg');
        this.questArr.push(q16);

        const q17 = new Question('The ancient region of Gaul comprised much of what modern nation?', 'France', 'Mongolia', 'Germany', 'Turkey', 'a', 'pics/q17.jpg');
        this.questArr.push(q17);
        const q18 = new Question('Which of the following men served as the 8th president of the United States?', 'Abraham Lincoln', 'Martin Van Buren', 'Benjamin Frankin', 'Jonathan Marston', 'b', 'pics/q18.jpg');
        this.questArr.push(q18);    
        const q19 = new Question('Although Italian by birth, Columbus sailed under the colors of which European nation?', 'England', 'Portugal', 'Spain', 'Scotland', 'c', 'pics/q19.jpg');
        this.questArr.push(q19);
        const q20 = new Question('Had he been born today, religious reformer Martin Luther would have been present in which European nation?', 'Poland', 'England', 'Italy', 'Germany', 'd', 'pics/q20.jpg');
        this.questArr.push(q20);

        const q21 = new Question('China regained control of Hong Kong from this nation, after it\'s 99 year lease of the island expired in 1997:', 'Great Britain', 'France', 'Japan', 'Australia', 'a', 'pics/q21.jpg');
        this.questArr.push(q21);
        const q22 = new Question('The War of the Roses was a dynastic struggle fought over the throne of which kingdom?', 'France', 'England', 'Bohemia', 'Sweden', 'b', 'pics/q22.jpg');
        this.questArr.push(q22);
        const q23 = new Question('Lasting from 1636 until 1912, this was the last dynasty to rule China:', 'Han', 'Shang', 'Qing', 'Tang', 'c', 'pics/q23.jpg');
        this.questArr.push(q23);
        const q24 = new Question('Thanks to series of partitions, this European nation ceased to exist from 1795, until 1918, when it regained its sovereignty:', 'Bulgaria', 'Switzerland', 'Denmark', 'Poland', 'd', 'pics/q24.jpg');
        this.questArr.push(q24);

        const q25 = new Question('John Wilkes Booth shouted "Sic semper tyrannis" after shooting Lincoln. The phrase is Latin and means:', 'Thus always to tyrants', 'For the resumption of tyranny', 'the South will rise again', 'I came, I saw, I conquered', 'a', 'pics/q25.jpg');
        this.questArr.push(q25);
        const q26 = new Question('in 1830, Greece gained its independence after centuries of brutal subjugation under which nation?', 'Bulgaria', 'The Ottoman Caliphate', 'Hungary', 'Romania', 'b', 'pics/q26.jpg');
        this.questArr.push(q26);
        const q27 = new Question('Casimir Pulaski, was a Polish national who gained fame as a general in the American Revolution. At one point, he saved the life of which founding father?', 'Alexander Hamilton', 'Samuel Adams', 'George Washington', 'Thomas Jefferson', 'c', 'pics/q27.jpg');
        this.questArr.push(q27);
        const q28 = new Question('Saint Ignatius of Loyola, who founded the Catholic Holy Order of the Jesuits in 16th century, was a native of which land?', 'Italy', 'England', 'Greece', 'Spain', 'd', 'pics/q28.jpg');
        this.questArr.push(q28);

        const q29 = new Question('With the backing of the US, Panama gained independence from this nation in 1903:', 'Colombia', 'Spain', 'Costa Rica', 'Nicaraugua', 'a', 'pics/q29.jpg');
        this.questArr.push(q29);
        const q30 = new Question('World War II was triggered in 1939 after Germany\'s invasion of whch nation?', 'Holland', 'Poland', 'Austria', 'France', 'b', 'pics/q30.jpg');
        this.questArr.push(q30);
        const q31 = new Question('Vincent Van Gogh was an impressionist painter hailing from which country?', 'France', 'Ireland', 'The Netherlands', 'Austria', 'c', 'pics/q31.jpg');
        this.questArr.push(q31);
        const q32 = new Question('Which of the following nations remained neutral and uninvolved in World War II?', 'Great Britain', 'Italy', 'Greece', 'Switzerland', 'd', 'pics/q32.jpg');
        this.questArr.push(q32);

        const q33 = new Question('Alexander the Great hailed from which ancient region?', 'Greece', 'Italy', 'Dalmatia', 'Thrace', 'a', 'pics/q33.jpg');
        this.questArr.push(q33);
        const q34 = new Question('Southern Rhodesia became what country in 1980?', 'South Africa', 'Zimbabwe', 'Zambia', 'Botswana', 'b', 'pics/q34.jpg');
        this.questArr.push(q34);
        const q35 = new Question('Founded in 1636, which is the oldest University in the USA?', 'Cornell', 'Princeton', 'Harvard', 'Yale', 'c', 'pics/q35.jpg');
        this.questArr.push(q35);
        const q36 = new Question('Brazil was originally a colony of which nation?', 'England', 'Spain', 'Holland', 'Portugal', 'd', 'pics/q36.jpg');
        this.questArr.push(q36);

        const q37 = new Question('Jamestown, the first permanent English Colony in North America, was founded in which future state?', 'Virginia', 'Delaware', 'Rhode Island', 'New Jersey', 'a', 'pics/q37.jpg');
        this.questArr.push(q37);
        const q38 = new Question('What was the name of the pandemic which killed over 1% of the world\'s population in 1918?', 'Small pox', 'Spanish flu', 'Bubonic plague', 'Scarlet fever', 'b', 'pics/q38.jpg');
        this.questArr.push(q38);
        const q39 = new Question('Which explorer was the first to cross the Pacific Ocean?', 'Francis Drake', 'Hernan Cortez', 'Ferdinand Magellan', 'Chirstopher Columbus', 'd', 'pics/q39.jpg');
        this.questArr.push(q39);
        const q40 = new Question('What 19th-century president erroneously noted: "The ballot is stronger than the bullet"?', 'Andrew Jackson', 'William McKinley', 'Zachary Taylor', 'Abraham Lincoln', 'd', 'pics/q40.jpg');
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
        $('img').attr('src', `${game.questArr[game.qNum].link}`)
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
        console.log(this.status)
        const indices = [];
        const highScore = Math.max.apply(Math, this.playerPoints);
        let scoreIndex = this.playerPoints.indexOf(highScore);
        while (scoreIndex != -1) {
            indices.push(scoreIndex);
            scoreIndex = this.playerPoints.indexOf(highScore, scoreIndex + 1);
        }
        if(this.playerArr.length == 1){
            const victor = this.playerArr[indices[0]];
            if(highScore < 2) {
                $('.feeder').text(`${victor.name}, you answered ${highScore} questions correctly out of ${this.quizLength}... You should have spent less time talking in history class!`);
            } else if(highScore == this.quizLength){          
                $('.feeder').text(`${victor.name}, you answered all ${highScore} questions correctly! A flawless performance. You know your history!`);
            } else {
                $('.feeder').text(`${victor.name}, you answered ${highScore} questions correctly out of ${this.quizLength}!`); 
            };
        } else if(indices.length == 1) {
            const victor = this.playerArr[indices[0]];
            if(highScore == this.quizLength) {
                $('.feeder').text(`All players have completed their quizzes and ${victor.name} is the winner with a flawless score of ${highScore} correct answers! No mistakes!`);
                for(let i = 0; i < this.playerArr.length; i++) {
                    let listScores = '';
                    listScores = listScores + `${this.playerArr[i].name}'s score: ${this.playerArr[i].points}`;
                    $('h4').show();
                    $('h4').text(`${listScores}`);
                    console.log(listScores);
                }            
            } else {
                let listScores = '';
                $('.feeder').text(`All players have completed their quizzes and ${victor.name} is the winner with a high score of ${highScore} out of ${this.quizLength}!`);
                for(let i = 0; i < this.playerArr.length; i++) {
                    listScores = listScores + `${this.playerArr[i].name}'s score: ${this.playerArr[i].points}; `
                    $('h4').show();
                    $('h4').text(`${listScores}`)
                }            
            }
        } else {
            const vicArr = [];
            for(let i = 0; i < indices.length; i++) {
                vicArr.push(this.playerArr[indices[i]]);
            };
            let string = "All players have completed their quizzes and it's a tie! With a high score of " + highScore + ", it's a draw between these players: ";
            for(let i = 0; i < vicArr.length; i++) {
                string = string + vicArr[i].name + "; ";
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

////// EVENT LISTENERS //////


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