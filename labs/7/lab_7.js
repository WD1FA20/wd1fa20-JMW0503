/*
 * Filename:    lab_7.js
 * Description: A simple quiz that uses arrays and functions
 * Author:      Luke Sathrum / YOUR NAME HERE
 */
"use strict";

     function promptForQuestion(questionList) {
        let userInput;
        for (let i = 0, arrayLen = questionList.length; i < arrayLen; i++) {
            userInput = prompt(questionList[i].question);
            document.write(questionList[i].question + "<br>Your answer: " + userInput + "<br>Correct answer: " + questionList[i].answer + "<br>");
            if (userInput == questionList[i].answer) {
                alert("Correct!");
                score++;
            } else {
                alert("Incorrect!");
            }
        }

        document.write("<br>Final Score: " + score + " / " + questionList.length);
    }

    let questions = [ {
        question: 'What is the answer to the Ultimate Question of Life, the Universe, and Everything?',
        answer: '42'
    },
        {
            question: 'Who is 5 * 100?',
            answer: '500'
        },
        {
            question: 'The Simpson\'s house number was?',
            answer: '742'
        },
        {
            question: 'What year was Mark Zuckerberg born?',
            answer: '1984'
        },
        {
            question: 'First six digits of pi? (no decimal point)',
            answer: '314159'
        }
    ];

    let score = 0;
    promptForQuestion(questions);