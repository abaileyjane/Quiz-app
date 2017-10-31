var questionNumber = 0;
var choice = 0;

const questionList=[
  "You arrive at work ready for an awesome shift. Which activity is your LOWEST priority at this moment?", 
  "You have been sat. How do you greet your table?",
  "What essential question should you ask during your initial greet?",
  "Alright. You have done your greet, delivered the specials and gotten drink orders. They all ordered alcohol How do you handle water service?",
  "Uh oh! There is an allergy at the table! How do you proceed?",
  "When do we do bread service?",
  "You rang in your food. What should be your immediate next step?",
  "The guest has ordered dessert. What does not need to be prebussed?",
  "The guest has completed their meal. What is the proper way to deliver their check?",
  "Whew!! You had a great shift and are preparing to head home. How many rollups should you do?"
  ];
  
  

function displayQuestionNumber(){
  console.log('`displayQuestionNumber` ran');
  console.log(questionList[1])
  var questionNumberDisplay = questionNumber+1;
  $('.question-number').text(`Question ${questionNumberDisplay}`);
}

function displayQuestion(){
  console.log('`displayQuestion` ran');
  $('.question').text(questionList[questionNumber]);
}

const options =  [{'Notifying the hostess you have arrived':false},
{'Clocking in': false},
{'Writing down the specials':false},
{'Making sure all your tables have the correct number of silverware rollups':true},

{'With bread plates':true},
{'With water glasses and the pitcher of water':false},
{'With filled glasses of water': false},
{'By walking up and introducing yourself! No object needed at this point.':false},

{'What their favorite type of cuisine is?': false},
{'If this is their first time dining with us?': true},
{'If they have allergy concerns?': false},
{'Why they are out to dinner?': false},

{'Everyone gets a full pint glass of water.': false},
{'They ordered alcohol so they will receive a water if they ask for it.': false},
{'Bring water glasses with ice to the table for every guest and fill the waters tableside with with the milk jug pitcher. Take the pitcher with you when you go.': false},
{'Bring water glasses with ice to the table for every guest and fill the waters tableside with with the milk jug pitcher. Leave the pitcher at the table with the guests.': true},

{'Take the order and ring it in with the allergy written on the ticket. Run as normal.': false},
{'Take the order, ring it in with the allergy written on the ticket, then alert a manager. Run as normal.': false},
{'Take the order then alert a manager. When given the ok, ring it in with the allergy written on the ticket. Have a manager run the food.': true},
{'Take the order, ring it in with the allergy written on the ticket, then alert a manager. Have a manager run the food.': false},

{'For every table, as soon as they sit down.': false},
{'When a table requests it.': false},
{'For every table, after apps have arrived': false},
{'For every table, shortly after drinks have arrived.':true},

{'Do they need refills?': false},
{'Does the food I just rang in require presets?': true},
{'Is there any side work I should be doing right now?': false},
{'Is there anything for me to prebus?': false},

{'Currently used drink glasses ':true},
{'B and b plates and entree plates': false},
{'Guests original fork and knife': false},
{'Empty bar glasses': false},

{'Just the itemized receipt, facedown on the table': false},
{'The itemized receipt on a clipboard': false},
{'The itemized receipt on a clipboard with mint candies for each guest.': true},
{'The itemized receipt in a folding check presenter with mint candies for each guest.':false},

{'25': false},
{'60': false},
{'As many rollups as there is siverware at the rolling station': false},
{'As many as the closing server asks you to that day': true}
];

var ans=0;
function displayAnswerOptions(){
  console.log(" 'displayAnswerOptions' ran");

  $("div.answerChoices").append(`<input type="radio" class="optionButton" name="optionChoice" value=${Object.values(options[ans])}> ${Object.keys(options[ans])}<br>`);
  $("div.answerChoices").append(`<input type="radio" class="optionButton" name="optionChoice" value=${Object.values(options[ans+1])}> ${Object.keys(options[ans+1])}<br>`);
  $("div.answerChoices").append(`<input type="radio" class="optionButton" name="optionChoice" value=${Object.values(options[ans+2])}> ${Object.keys(options[ans+2])}<br>`);
  $("div.answerChoices").append(`<input type="radio" class="optionButton" name="optionChoice" value=${Object.values(options[ans+3])}> ${Object.keys(options[ans+3])}<br>`);
}

var currentScore=0
function displayCurrentScore(){
  $('.score').text(`You've gotten ${currentScore} out of ${questionNumber} correct` );
}

function reset(){
    $(".optionButton").attr('checked') == 'unchecked';
}

function checkAnswer(){
	 $('.button').click(function () {
	 event.preventDefault();
	   console.log("'checkAnswer' ran")
	   var selectedValue = $("input[name='optionChoice']:checked").val();
if (selectedValue === "true" && questionNumber<9) {
          currentScore++;
          alert("Thats right! Now let's try more!");
         $("div.answerChoices").html("");
		ans=ans+4;
	   questionNumber= (questionNumber+1);
	   reset();
	   
          renderQuizPage();
        }
          
        else if (selectedValue === "false"&& questionNumber<9) {
           alert("Unfortunately, that is not the best answer.")
          console.log("its false");
          console.log(currentScore);
                   $("div.answerChoices").html("");
                   ans=ans+4;
	   questionNumber= (questionNumber+1);
	   reset();
          renderQuizPage();}
                   
         else if (selectedValue === "true" && questionNumber===9) {
          currentScore++;
          alert("Thats right! Click x to show your final score.");
                   $("div.answerChoices").html("");
          alert(`Your final score is ${currentScore} out of a possible 10`)
          window.location.href = "restart.html";


          }

        else if( selectedValue === "false" && questionNumber===9) {
          alert("Unfortunately, that is not the best answer. Click OK to show your final results.");
  		alert(`Your final score is ${'currentScore'} out of a possible 10`);
  		window.location.href = "restart.html";

        }
	 })}
// function goToResultPage(){
//   console.log('`goToResultPage` ran');
// }

function renderQuizPage(){
  displayQuestionNumber();
  displayQuestion();
  displayAnswerOptions();
  displayCurrentScore();
  checkAnswer();
  
  // goToResultPage();
}
renderQuizPage();
