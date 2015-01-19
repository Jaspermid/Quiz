/**
 * Created by Jasper on 27/05/14.
 */



if (Quizzes.find().count() ===0) {
    Quizzes.insert(
        {"quiztitle": "Quiz One",
         "category": "General",
         "quizid": 1,
            "user": "Admin",
         "quizquestions": ["Which pop duo was the first western band to play in The Peoples Republic of China?",
                           "Speed skating originated in which country?",
                            "Julius Caesar said The die is cast after crossing which river?",
                            "Who was the only English player to win the European Golden Boot award?"

                            ],


            "answers": [ ["Wham", "Simon and Garfunkel", "Right Said Fred"],
                ["Russia", "Canada", "Norway", "Netherlands"],
                    ["Danube", "Thames", "Rubicon", "Tiber"],
                ["Robbie Fowler", "Michael Owen", "Gary Lineker", "Kevin Phillips"]

            ],
            "correctAnswers": ["Wham", "Netherlands", "Rubicon", "Kevin Phillips"]

        }),




       /* Quizzes.insert(
            {"quiztitle": "Quiz Two",
             "quizid": 2,
             "quizquestions": ["Q2.1", "Q2.2", "Q2.3", "Q2.4", "Q2.5"],
             "answers": [ ["2.test1", "2.test2", "2.test3", "2.test4"],
                          ["2.2test1", "2.2test2", "2.2test3", "2.2test4"],
                 ["2.3test1", "2.2test2", "2.2test3", "2.2test4"],
                 ["2.4test1", "2.2test2", "2.2test3", "2.2test4"],
                 ["2.5test1", "2.2test2", "2.2test3", "2.2test4"]
             ],
                "correctAnswers": ["a.Wham", "2.2test1", "2.3test1", "2.4test1", "2.5test1"]
            }),*/

        Quizzes.insert(
            {
             "quiztitle": "Quiz Two",
                "category": "General",
                "quizid": 2
                ,
                "user": "Admin",
                "quizquestions": ["What part of the body does a turtle use to breathe?",
                                  "Herodotus is known as the father of what",
                                  "Anemophobia is the fear of what?",
                                  "The song 'An Englishman in New York' was about which man?",
                                  "In which year did Louis Reard invent the bikini?"],
                "answers": [ ["Belly", "Mouth", "Anus", "Shell"],
                             ["History", "Medicine", "Theatre", "Music"],
                    ["Spiders", "The Dark", "Fire", "Wind"],
                    ["Quentin Crisp", "Sting", "John Lennon", "Gordon Sumner"],
                    ["1906", "1926", "1946", "1966"]

                ],
                "correctAnswers": ["Anus", "History", "Wind", "Quentin Crisp", "1946"]

            })
}
;

        /*Quizzes.insert(
            {
             "quiztitle": "Quiz Four",
                "quizid": 4,
                "quizquestions": ["Q4.1", "Q4.2", "Q4.3", "Q4.4", "Q4.5"],
                "answers": [ ["4.1test1", "4.1test2", "4.1test3", "4.1test4"],
                    ["4.2test1", "4.2test2", "4.2test3", "4.2test4"],
                    ["4.3test1", "2.2test2", "2.2test3", "2.2test4"],
                    ["4.4test1", "2.2test2", "2.2test3", "2.2test4"],
                    ["4.5test1", "2.2test2", "2.2test3", "2.2test4"]
                ],
                "correctAnswers": ["4.1test1", "4.2test1", "4.3test1", "4.4test1", "4.5test1"]
            })

};*/

    /*Quizzes.insert(
        {
            "quiztitle": "Quiz One",
                "questionid": 2,
                "question":"2. Which pop duo was the first western band to play in The Peoples Republic of China??",
                "correctanswer":"3. a.Wham",
                "answers": [
                    { "answer":["a.Wham"]},
                    { "answer":["Simon and Garfunkel"]},
                    { "answer":["Right Said Fred"]}

                ]
            })
        Quizzes.insert(

            {
        "quiztitle": "Quiz Two",
        "questionid": 1,
        "question":"2. Which pop duo was the first western band to play in The Peoples Republic of China??",
        "correctanswer":"2. a.Wham",
        "answers": [
            { "answer":["2. a.Wham"]},
            { "answer":["2. Simon and Garfunkel"]},
            { "answer":["2. Right Said Fred"]}

        ]
    }
    );*/




