(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Diary(number){
  this.number = number;
}
Diary.prototype.wordNumber = function(input) {
  var output = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};
exports.diaryModule = Diary;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
