/////// HISTORY QUESTIONS GAMES /////////

// user clicks start and the game starts

// user is presented a question and multiple answers to choose from

// user clicks an answer and is shown another question

// this continues until the questions have all been answered

// oppenent is asked if ready. They click ready and the process repeats

// when all questions have been answered, users are presented their scores 
// and a button that takes them back to the start menu screen.
console.log('runnin');

class Player {
	constructor() {
		this.points = 0;
	}
	pickAnswer() {
		console.log('answer picked');
	}
}

const game = {
    activePlayer: '',
    questionsAsked: 0,
    status: '', // start-menu, quiz-active, round-over
    questionKeys: [{
        keyA: [{q1: [{
                question: 'what time is it?',
                a: 'aardvark',
                b: 'batman',
                c: 'charliehorse',
                d: 'dog'
            	}]
        	},
            {q2: {
                question: 'who saw what happened?',
                a: 'africa',
                b: 'botswana',
                c: 'cocaine',
                d: 'devilish'
            	}
        	},
            {q3: {
                question: 'is there free food',
                a: 'apes',
                b: 'biggie',
                c: 'carpathian',
                d: 'dice'
            	}
        	}]}, 
        {keyB: [{q1: {
                question: 'what time is it?',
                a: 'aardvark',
                b: 'batman',
                c: 'charliehorse',
                d: 'dog'
            	}
        	},
            {q2: {
                question: 'who saw what happened?',
                a: 'africa',
                b: 'botswana',
                c: 'cocaine',
                d: 'devilish'
            	}
        	},
            {q3: {
                question: 'is there free food',
                a: 'apes',
                b: 'biggie',
                c: 'carpathian',
                d: 'dice'
            	}
     	   }
     	   ]
        }]
}

console.log(game.questionKeys[0].keyA[1].q2.question);







