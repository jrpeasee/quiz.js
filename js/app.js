 /*var questions = [
      {q: "What is the capital of Japan?",     choices: ["Osaka", "Tokyo", "Kyoto"],         answer: 1},
      {q: "What is the capital of Australia?", choices: ["Sydney", "Melbourne", "Canberra"], answer: 2},
      {q: "What is the capital of Slovakia?",  choices: ["Bratislava", "Kosice", "Nitra"],   answer: 0},
      {q: "What is the capital of Belarus?",   choices: ["Homyel", "Minsk", "Mogilev"],      answer: 1},
      {q: "What is the capital of Zambia?",    choices: ["Ndola", "Kitwe", "Lusaka"],        answer: 2},
      {q: "What is the capital of Eritrea?",   choices: ["Asmara", "Keren", "Teseney"],            answer: 0},
      {q: "What is the capital of Namibia?",   choices: ["Tsumeb", "Swakopmund", "Windhoek"],      answer: 2},
      {q: "What is the capital of Guyana?",    choices: ["Linden", "Georgetown", "New Amsterdam"], answer: 1},
      {q: "What is the capital of Azerbaijan?", choices: ["Ganja", "Sumgait", "Baku"],              answer: 2},
      {q: "What is the capital of Slovenia?",  choices: ["Ljubljana", "Maribor", "Celje"],         answer: 0}
    ];
     
$(document).ready(function(){ 
 
  var count        = 0,
      username_div = document.getElementById('name'),
      question     = document.getElementById('question'),
      start        = document.getElementById('start'),
      back         = document.getElementById('back'),
      next         = document.getElementById('next'),
      counter      = document.getElementById('counter'),
      reset        = document.getElementById('reset'),
      wrap         = document.getElementById('quiz-wrap'),
      notification = document.getElementById('notification'),
      hello        = document.getElementById('hello'),
      userName     = document.getElementById('username').value;

      question.style.display = 'none';
      back.style.display = 'none';
      next.style.display = 'none';
      reset.style.display = 'none';
      username_div.style.display = 'none';
   

   function checkName(){
    if(sessionStorage.name !== undefined){
      var username = sessionStorage.name;
      var username_area = document.createElement('p');
      var question_choices = document.createTextNode('Welcome, ' + username);
      hello.appendChild(username_area);
      username_area.appendChild(question_choices);
      question.style.display = 'block';
      back.style.display = 'block';
      next.style.display = 'block';
      reset.style.display = 'block';
      } else {
      username_div.style.display = '';
    
    }
   }


   function click_start_button(){
    // Display username
    sessionStorage.name = document.getElementById('username').value;
    if (check_the_input(sessionStorage.name) !== '') {
      var username = sessionStorage.name;
      var username_area = document.createElement('p');
      var question_choices = document.createTextNode('Welcome, ' + username);
      hello.appendChild(username_area);
      username_area.appendChild(question_choices);

      // Display questions
     
    }else if(sessionStorage.name == ""){
      alert('Enter your name');
      username_div.style.display = 'block';
      return false;
    }
  }

  function check_the_input(str) {
    return str.replace(/^\s+|\s+$/g,'');
  } 


    function generate_question(){
    if (count < questions.length) {
      var generated_q = document.createElement('h3');
      var text_q = document.createTextNode(questions[count].q);
      generated_q.appendChild(text_q);
      question.appendChild(generated_q);

      for(var i =0; i < 3; i++) { 
        var generated_label = document.createElement('label');
        var generated_input = document.createElement('input');
        question.appendChild(generated_label);
        generated_label.appendChild(generated_input);
        generated_input.setAttribute("type", "radio");
        generated_input.setAttribute("name", "choice");
        generated_input.setAttribute("value", i);
        generated_input.setAttribute("id", "pick");
        
        var question_choices = document.createTextNode(questions[count].choices[i]);
        generated_label.appendChild(question_choices);
      }
         

      } else if(count = questions.length){
        alert(this.totalScore);
      }  
      
    } 

   function remove_all_childnodes(selected_id){
      var myNode = selected_id;
      var targetChild = myNode.firstChild;

      while(targetChild) {
        myNode.removeChild(targetChild);
        targetChild = myNode.firstChild;
      }    
    };

     

   //Scoring Module
var scoreFun= (function(){

          function collectUserAnswer() {
               questions[count].userAnswer = document.querySelector('input[name="choice"]:checked').value;
          };

          function calcScore() {
            var score = 0;
            for ( var i = 0; i < questions.length; i++ ) {
                if ( questions[i].userAnswer == questions[i].answer ) {
                    score++;
                }
            }
            this.totalScore = (score/10) * 100 + "%";
          };
  
    return{
        //  public variables
      answer_and_score: function(){
        if(document.querySelector('input[name="choice"]:checked')){
        collectUserAnswer(); 
        calcScore();
        remove_all_childnodes(question);
        count++;
        generate_question();
       } else{
        alert("Please pick a choice!");
       }
      },

      reverse_and_score: function(){
        if (count >= 1){
          remove_all_childnodes(question);
          count--;
          generate_question();
        }
      }

    };

 })();
  
 // Event Handlers Module
var buttonHandlers = (function () {
  
  return {
 
    //  public variables
      back_button: function(){
        back.onclick=function(){
          scoreFun.reverse_and_score();
        }
      },

      evaluate_answer: function(){
        next.onclick = function(){
          scoreFun.answer_and_score();
        }
      },

       reset_quiz: function(){
        reset.onclick = function(){
          remove_all_childnodes(question);
          count = 0;
          generate_question();
        }
      }
    
    
  };
 
})();
      function beginning() {
    var start_button = document.getElementById('start');
    start_button.onclick = function(e){
      e.preventDefault;
      click_start_button();
    };
  }
      checkName();
      beginning();
      generate_question();
      buttonHandlers.evaluate_answer();
      buttonHandlers.back_button();
      buttonHandlers.reset_quiz();
       
});

var counter = 0;

function DisplayQuestion(){
  var questionEle = document.getElementById('ques');
  var question = questions[counter].q;
  questionEle.appendChild(question);
}
DisplayQuestion();
*/




var questions = [{
    q: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
}, {
    q: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
}, {
    q: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
}, {
    q: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
}, {
    q: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
}];




var quiz = document.getElementById("quiz");
var choicesContainer = document.getElementById('choices');
var nextButton = document.querySelector('[type=button]');

var questionIndex = 0;

function showQuiz() {
    var currentQuestion = document.createTextNode(questions[questionIndex].q);
    quiz.appendChild(currentQuestion);
}

function showAnswers(){
    var choicesLength = questions[questionIndex].choices.length;
    for(var i = 0; i < choicesLength; i++){
        var generated_label = document.createElement('label');
        var generated_input = document.createElement('input');
        choicesContainer.appendChild(generated_label);
        generated_label.appendChild(generated_input);
        generated_input.setAttribute("type", "radio");
        generated_input.setAttribute("name", "choice");
        generated_input.setAttribute("value", i);
        generated_input.setAttribute("id", "pick");
        var choice = document.createTextNode(questions[questionIndex].choices[i]);
        generated_label.appendChild(choice);
    }
}




 function remove_all_childnodes(selected_id){
      var myNode = selected_id;
      var targetChild = myNode.firstChild;

      while(targetChild) {
        myNode.removeChild(targetChild);
        targetChild = myNode.firstChild;
      }    
    }



nextButton.addEventListener('click', function () {
    remove_all_childnodes(choicesContainer);
    questionIndex++;
    showQuiz();
    showAnswers();
  
});

showQuiz();
showAnswers();

function scoreFunc(){
  
}


