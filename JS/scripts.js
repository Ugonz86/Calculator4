$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    var number4 = parseInt($("#input4").val());
    var number5 = parseInt($("#input5").val());
    var number6 = parseInt($("#input6").val());
    var number7 = parseInt($("#input7").val());
    var number8 = parseInt($("#input8").val());
    
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number3, number4);
    } else if (operator === "multiply") {
      result = multiply(number5, number6);
    } else if (operator === "divide") {
      result = divide(number7, number8);
    }
    $("#output").text(result);
  });
});

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number3, number4) {
  return number3 - number4;
};

var multiply = function(number5, number6) {
  return number5 * number6;
};

var divide = function(number7, number8) {
  return number7 / number8;
};

