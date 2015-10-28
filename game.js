var name = prompt('What is your name?');

    alert('Hello nice to meet you '+ name + ', enjoy your coffee!');

    var coffee = prompt('How did the coffee taste?');

    alert('Glad it tasted ' + coffee +'!');



    var no =0;
    var yes=0;

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

    alert(name+' you got '+yes+' correct and '+no+' wrong');
    alert('Connor does live in washington');
    alert("Connor does own a dog");
    alert('Connor does not snowboard, he skis');
    alert('You answered '+question1+ ' to question 1');
    alert('You answered '+question2+ ' to question 2');
    alert('You answered '+question3+ ' to question 3');


    var correct = false;

    var question4 = prompt('Now time for one more question.. how old am I?');

    while (correct === false) {
      if (parseInt(question4) === 21) {
        correct = true;
        var yes=yes+1
      } else if (parseInt(question4) < 21) {
        question4 = prompt('I am older than that! Try again!');
      } else {
        question4 = prompt('I am younger than that! try again!');
      }
    }
        alert('That is correct!');

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
    var question6 = prompt('How many days is this 201 class?');

    while (correct === false) {
      if (parseInt(question6) === 20) {
        correct = true;
        var yes=yes+1;
      } else if (parseInt(question6) < 20) {
        question4 = prompt('It is more than that! Try again!');
      } else {
        question4 = prompt('It is less than that! try again!');
      }
    }
        alert('That is correct!');
        
    alert(name+' you got '+yes+' correct and '+no+' wrong');
