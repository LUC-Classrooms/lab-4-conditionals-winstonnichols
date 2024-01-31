# Lab 4 - Conditional Statements

_Make a P5 sketch interactive with if() else_

In this lab, we see the following block of code already set up for you in the ```draw()``` function:

```javascript
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    
  }
  else { 
    // otherwise do this:
    
  }
  ellipse(width/2, height/2, 100, 100);
```

The state of the P5 variable ```mouseIsPressed``` is always either ```true``` or ```false``` (depending on whether you are pressing the mouse button or not). Because this ```if()``` statement is inside the P5 ```draw()``` function, it is evaluated 60 times per second (the default P5 animation _frame rate_). Whatever code you place in the ```if(){ }``` block will execute while the mouse is down. Whatever code you place in the ```else { }``` block will execute when the mouse is up.

### Intstructions:

1. add some code into the ```if( ){} else {}``` statements to make the circle **change color** when the mouse is pressed. You code will go between the ```{ curly brackets }```

2. for **extra credit** (1pt), restructure this so that the if() statement also controls the value of a variable that **re-sizes** or **moves** the circle. 

### When you are done
* **commit** your changes on GitHub as "Lab 4 Submitted"
* **download** your lab project as a **.zip** archive and submit it on **Sakai** as an attachment to Lab 4
* include a link to your GitHub repository in the comments

