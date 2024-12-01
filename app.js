
const quizData = [{
  question:  " What is the correct way to declare a variable in Java?",

a: "int 1number = 5",
b: "int number = 5",
c: "int number = 5",
d: "int number = 5.0",
correct: "b",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},

{

   question: "What is the purpose of the super keyword in Java?",
    a:" It refers to the superclass constructor",
    b: "It refers to the current class instance",
    c: "It is used to call a method from the subclass",
    d: "It is used to inherit fields from the parent class",
    correct:"a",
},

{

    question:"Which block is used to handle exceptions in Java?",
a: "catch",
b: "try",
c: "finally",
d: "All of the above",
  correct:"d",
},
{
question:"Which concept allows a class to inherit fields and methods from another class in Java?",
a: "Abstraction",
b: "Polymorphism",
c: "Inheritance",
d: "Encapsulation",
 correct:"c",

},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
 question: "Which of the following statements is true about the ArrayList class in Java?",
  a: "It is part of the java.util package",
b:"It can hold primitive data types" ,
C:"It can hold only objects of the same type" ,
d: "It is a type of array in Java" ,
   correct: "a",
},


{

    question: "What is the correct way to define an abstract method in Java?",
a:" public void abstract myMethod()",
b:" public abstract void myMethod()",
c: "abstract public void myMethod()",
d:"Both B and C are correct",
correct:"d",
},

{

question: "Which of the following is true about constructors in Java?",
a: "Constructors cannot have a return type",
b: "Constructors can be inherited",
c: "Constructor can be private",
d: "Both A and C are true",
correct:"d",

},

{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}





];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {

document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> "Great job! Thanks for taking the time to solve this quiz!",  you've scored ${correct} / ${total} </h3>
    </div>

    
`
}


loadQuestion(index);
