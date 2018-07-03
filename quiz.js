function validateQuiz(quizId){
  var selected = document.querySelector('input[name="'+quizId+'"]:checked');
  if (selected){
    var selectedValue = selected.value
    var text = "";
    switch (selectedValue)
    {
       case "q1r1":
       case "q1r2":
           text = "are you sure? Look closer, the switch is open. This means that there is no current in the circuit.\nIf there is no current in the circuit then according to Ohm Law, no potential is consumed in the componentes (in this case the resistor).\nThis means that both ends of the resistor have the same potential (V). One is connected to ground (0V). So the other end (which is the purple end), which potential do you think it has?";
           break;

       case "q1r3":
           text = "Excellent! As the circuit is open, no electric current exists. If there is no current, no potential is consumed by the resistor. This means that both ends of it have the same potential.\nAs the lower end is connected to the ground (0V), then the other end must also have 0V.";
           break;
       case "q2r1":
           text = "Excellent! Contrary to the previous one, when the switch is pressed, the pruple end gets directly connected to the positive end of the battery which has 9V.\nAlso, 9V are consumed in the battery.";
           break;
       case "q2r2":
       case "q2r3":
           text = "are you sure? When the switch is pressed, is there any component between the purple end and the positive end of the battery which is at 9V?";
           break;
    }
    alert(text);
  }
}
