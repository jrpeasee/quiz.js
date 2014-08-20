 
$(document).ready(function(){ 
 function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var questions = JSON.parse( AJAX_req.responseText );
           
        }
    }
    AJAX_req.send();
}
 
AJAX_JSON_Req( 'js/questions.json' );

 
 
  var count        = 0,
      question     = document.getElementById('question'),
      back         = document.getElementById('back'),
      next         = document.getElementById('next'),
      counter      = document.getElementById('counter'),
      reset        = document.getElementById('reset'),
      
      notification = document.getElementById('notification');
      
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

      generate_question();
      buttonHandlers.evaluate_answer();
      buttonHandlers.back_button();
      buttonHandlers.reset_quiz();
       
});
