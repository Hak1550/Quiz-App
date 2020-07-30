var Ques_Ans = [
    {
        Question: "Q1: Who is the founder of Microsoft Co.?",
        Answer: "Bill Gates",
        Option: [
            "William Outhgred",
            "Bill Gates",
            "Steve Jobs",
            "Jeff Bezos"
        ]
    },
    {
        Question: "Q2: Who is the founder of Apple Co.?",
        Answer: "Steve Jobs",
        Option: [
            "William Outhgred",
            "Bill Gates",
            "Steve Jobs",
            "Jeff Bezos"
        ]
    },
    {
        Question: "Q3: Who is the founder of Amazon Co.?",
        Answer: "Jeff Bezos",
        Option: [
            "William Outhgred",
            "Bill Gates",
            "Steve Jobs",
            "Jeff Bezos"
        ]
    },
    {
        Question: "Q4: Who is the founder of Slide Rule?",
        Answer: "William Outhgred",
        Option: [
            "William Outhgred",
            "Bill Gates",
            "Obama",
            "Jeff Bezos"
        ]
    },
 {

    Question: "Q5: Who is the father of Computer?",
    Answer: "Charles Babbage",
    Option: [
        "William Outhgred",
        "Bill Gates",
        "Charles Babbage",
        "Jeff Bezos"
    ]
}
];

// function showQuestion(){

    // show question
    var question = document.getElementById('question');
question.innerHTML = Ques_Ans[0].Question;

    // show option


    optElement = document.getElementsByClassName("optElement")
    
        for (let i = 0; i < optElement.length; i++) {

        optElement[i].innerHTML = Ques_Ans[0].Option[i]
        
    //    console.log(optElement)
    }
