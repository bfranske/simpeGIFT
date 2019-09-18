function generateGIFT (form) {
    giftOutput ="<pre>";
    if (form.qTitle.value) {
        giftOutput += "::"+form.qTitle.value+"::";
    }
    giftOutput += form.qText.value+"{\n";
    
    // get all the answers
    var answers = document.querySelectorAll(".answer");
    for (i = 0; i < answers.length; i++) {
        answerID=/answer(.)/g.exec(answers[i].name);
        if (form.correctAnswer.value=='answer'+answerID[1]) {
            giftOutput += '\t=';
        }
        else {
            giftOutput += '\t~';
        }
        giftOutput += form['answer'+answerID[1]].value;
        if (form['citation'+answerID[1]].value){
            giftOutput += '#'+form['citation'+answerID[1]].value
        }
        giftOutput += '\n';
    }
    giftOutput += "}</pre>";
    document.getElementById("demo").innerHTML = giftOutput;
}