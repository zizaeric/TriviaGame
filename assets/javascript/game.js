// Global Variables
//========================================================================================

// Countdown also starts at 60 seconds (same at the limit of the page timer)
var count = 60;

// Count of Right, Wrong, and unanswered Questions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;

// Game Functions
//========================================================================================
$(document).ready(function(){

	//Hide the game content and end_container Divs at the beginning of the game
	$("#game_content").hide();
	$("#end_container").hide();

    //Listen for a click event on the start button
	$("#start_button").on("click", function(){

		// Hide the start Div after the start button is clicked 
		$("#start_container").hide();

		// Show the Game Div after the start button is clicked
		$("#game_content").show();

		startCountdown();
		return;

	});

	// Countdown function
	function countdown(){

		// Starts at 60 seconds and counts down by one
		count--;

		// Display the countdown by modifying the DOM
    	$('#timer_number').html(count + " Seconds");

			//Listen for a click event on the done button
			$("#done_button").on("click", function(){
                
			// Stop the countdown and run the timeUp function after the done button is clicked
			//Clear countdown interval;
			count = 0; 
			return;

			});

			// End the game after the timer hits 0
			if(count == -1){

				timeUp();

				// Hide the game Div from the user after timer hits 0
				$("#game_content").hide();
			}
	}

	// Countdown function, 1 second increments
	function startCountdown(){

		setInterval(countdown, 1000);

	}

	// Function run after timer hits 0
	function timeUp(){

		// Grade the quiz, check radio button values
		var Question1 = $('input:radio[name="question1"]:checked').val();
		var Question2 = $('input:radio[name="question2"]:checked').val();
		var Question3 = $('input:radio[name="question3"]:checked').val();
		var Question4 = $('input:radio[name="question4"]:checked').val();
		var Question5 = $('input:radio[name="question5"]:checked').val();
		var Question6 = $('input:radio[name="question6"]:checked').val();
		var Question7 = $('input:radio[name="question7"]:checked').val();
		var Question8 = $('input:radio[name="question8"]:checked').val();
		var Question9 = $('input:radio[name="question9"]:checked').val();
		var Question10 = $('input:radio[name="question10"]:checked').val();

		// Count right, wrong, and unanswered questions
		if(Question1 == undefined){
			unansweredCount++;                          //Unanswered
		}
		else if(Question1 == "Uniform"){
			correctCount++;                             //Correct answer
		}
		else{
			wrongCount++;                               //Any other answer
		}


		if(Question2 == undefined){
			unansweredCount++;
		}
		else if(Question2 == "Strength"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question3 == undefined){
			unansweredCount++;
		}
		else if(Question3 == "Eight"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question4 == undefined){
			unansweredCount++;
		}
		else if(Question4 == "White"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question5 == undefined){
			unansweredCount++;
		}
		else if(Question5 == "Korea"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question6 == undefined){
			unansweredCount++;
		}
		else if(Question6 == "Hogu"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question7 == undefined){
			unansweredCount++;
		}
		else if(Question7 == "Roundhouse kick"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question8 == undefined){
			unansweredCount++;
		}
		else if(Question8 == "House of discipline"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question9 == undefined){
			unansweredCount++;
		}
		else if(Question9 == "The way of foot and fist"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Question10 == undefined){
			unansweredCount++;
		}
		else if(Question10 == "Sa-Bum-nim"){
			correctCount++;
		}
		else{
			wrongCount++;
		}

		// Display the count of right, wrong, and unanswered questions
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);

		// Reveal the end_container div at the end of the game
		$("#end_container").show();
	}

});
