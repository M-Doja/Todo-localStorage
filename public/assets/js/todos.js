// Get locally stored Todo data
var jsonArray = localStorage.getItem('array');
if (jsonArray) {
  var mainArray = JSON.parse(jsonArray);
  display(mainArray);
}else {
  // Set empty storage array if no data exists
  var mainArray = [];
}

// Remove todo from localStorage by Index
var span = document.querySelectorAll('span');
for (var i = 0, len = span.length; i < len; i++) {
  (function(index){
    span[i].onclick = function(e){
      mainArray.splice(index, 1);
      localStorage.setItem('array', JSON.stringify(mainArray));
      console.log("Removed from array : "+mainArray);
    }
  })(i);
}
$('#about').text('About This Project');
$('.hidden').hide();
$('#close').hide();

$('#about').on('click', function(){
  $('.hidden').slideToggle('slow', function(){
    $('#about').hide();
    $('#close').show();
  });
});
$('#close').on('click', function(){
  $('.hidden').slideToggle('slow', function(){
    $('#about').show();
    $('#close').hide();
  });
});

// Mark as 'DONE' on click
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed')
});

// Remove Todo from DOM
$('ul').on('click', 'span', function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
    console.log("FADEDOUT: "+mainArray);
  });
  e.stopPropagation();
});

// Add new Todo with 'ENTER' button press
$('input[type="text"]').keypress(function(e){
  if (e.which === 13) {
    var todoText = $(this).val();
    mainArray.push(todoText);
    localStorage.setItem('array', JSON.stringify(mainArray));
    $('ul').append(`<li><span class="span"><i class="fa fa-trash"></i></span> ${todoText} </li>`);
    $(this).val('');
    console.log("ADDED To Array: "+mainArray);
  }
});

// Toggle Todo input display
$('.fa-plus').click(function(){
  $('input[type="text"]').fadeToggle();
});

// Display Todos on DOM
function display(mainArray){
  for (var i = 0; i < mainArray.length; i++) {
    $('ul').append(`<li><span><i class="fa fa-trash"></i></span> ${mainArray[i]} </li>`);
    console.log("Local: "+mainArray);
  }
}
