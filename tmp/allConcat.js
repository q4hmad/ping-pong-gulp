var Diary = require('./../js/journal.js').diaryModule;

$(document).ready(function() {
  console.log("document loaded");
  $("#journalEntryForm").submit(function(event) {
    event.preventDefault();
    var entry = $("#entry").val();
    var userEntry = new Diary('diary');
    var output = userEntry.wordNumber('7');
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function() {
  $("#emailForm").submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#emailForm').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to my personal info.</p>');
  });
});
