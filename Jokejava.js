// Task 1: use .html to change the text in joke-1 to "Nacho Cheese"
$("#button1").click( function(){
$("#joke-1").html("Nacho Cheese");
});

// Task 2: use .append to add a paragraph with "It gets jalapeño face!" in it.
$("#button2").click( function(){
$("#joke-2").html("He cracks himself up");
});

// Task 3: Create a click handler that appends a paragraph with "It was two-tired" in it.
$("#button3").click( function(){
$("#joke-3").html("It was two-tired");
});

// Task 4: Create a click handler for joke-4 that changes the attribute src from the current image to this image --> "http://i.imgur.com/ZCIkkze.jpg"
$("#joke-4").click( function(){
$("#joke-4").attr("src", "http://i.imgur.com/ZCIkkze.jpg");
});

// Bonus: Create a button for each one of these jokes. When the user clicks a button the action should occur
