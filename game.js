var answer1 = document.getElementById(ans1);
var answer2 = document.getElementById(ans2);
var answer3 = document.getElementById(ans3);
var answer4 = document.getElementById(ans4);
var answer5 = document.getElementById(ans5);
var answer6 = document.getElementById(ans6);





var name = prompt('What is your name?');

    alert('Hello nice to meet you '+ name + ', enjoy your coffee!');

    var coffee = prompt('How did the coffee taste?');

    alert('Glad it tasted ' + coffee +'!');



    var no =0;
    var yes=0;

    function1(answer1);
    function2(answer2);
    function3(answer3);
    function4(answer4);
    function5(answer5);
    function6(answer6);




  function function1() {
    var question1 = prompt('Does Connor live in washington?');


    if (question1.toLowerCase() =='yes' || question1.toLowerCase() =='y' ) {
      alert('That is correct!');
      console.log('You got this right because you answered '+question1);
      var yes=yes+1;
    } else {
      alert("That is not correct I do live in Washington");
      var no=no+1;
      console.log('You got this wrong because you answered '+question1);
    }
  }

  function function2() {
    var question2 = prompt('Does Connor own a dog?');

    if (question2.toLowerCase() =='yes' || question2.toLowerCase() =='y') {
      alert('That is correct!');
      var yes=yes+1;
      console.log('You got this right because you answered '+question2);
    } else {
      alert("That is wrong I do own a puppy!");
      var no=no+1;
      console.log('You got this wrong because you answered '+question2);
    }
  }

  function function3() {
    var question3 = prompt('Does Connor snowboard?');

    if (question3.toLowerCase() =='no' || question3.toLowerCase() =='n') {
      alert('That is correct!');
      var yes=yes+1;
      console.log('You got this right because you answered '+question3);
    } else {
      alert("That is wrong I ski");
      var no=no+1;
      console.log('You got this wrong because you answered '+question3);
    }
  }
    alert(name+' you got '+yes+' correct and '+no+' wrong');
    alert('Connor does live in washington');
    alert("Connor does own a dog");
    alert('Connor does not snowboard, he skis');
    alert('You answered '+question1+ ' to question 1');
    alert('You answered '+question2+ ' to question 2');
    alert('You answered '+question3+ ' to question 3');


    var correct = false;

  function function4() {
    var question4 = prompt('Now time for one more question.. how old am I?');

    while (correct === false) {
      if (parseInt(question4) === 21) {
        correct = true;
        var yes=yes+1;
        alert('That is correct!');

      } else if (parseInt(question4) < 21) {
        question4 = prompt('I am older than that! Try again!');
      } else {
        question4 = prompt('I am younger than that! try again!');
      }
    }
  }

  function function5() {
    var question5 = prompt('Are we in seattle?');

    if (question5.toLowerCase() =='yes' || question5.toLowerCase() =='y') {
      alert('That is correct!');
      var yes=yes+1;
      console.log('You got this right because you answered '+question5);
    } else {
      alert("That is wrong I do own a puppy!");
      var no=no+1;
      console.log('You got this wrong because you answered '+question5);
    }
  }

  function function6() {
    var question6 = prompt('How many days is this 201 class?');

    while (correct === false) {
      if (parseInt(question6) === 20) {
        correct = true;
        var yes=yes+1;
        alert('That is correct!');
      } else if (parseInt(question6) < 20) {
        question4 = prompt('It is more than that! Try again!');
      } else {
        question4 = prompt('It is less than that! try again!');
      }
    }
  }

  alert(name+' you got '+yes+' correct and '+no+' wrong');
