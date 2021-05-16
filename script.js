'use strict'


let total = arrIns.push('4')
console.log(arrIns.join(' '))
alert(total)


var m = 4
console.log(m)
m = 5 
console.log(m)
let b = m
console.log(b)
const c = b + 1 
console.log(c)

//строки
let str = 'Hello, World!';
console.log(str[5]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// цикл for
function func(){


    for (let i = 0; i < 3; i++) { 
        console.log(i);
    } }

    let empt = [];						
    let num = [2, 3, 5, 7, 11];		
    let mix = [ 27, true, "a" ];	
    let [number, bool, char] = mix //деструктуруюче присвоювання
    console.log(number)
    console.log(bool)
    console.log(char)
    
   let f = 3
   let arrf = [f + 1, f+2, f+3] 
  
   //ініціалізація
   // масив

   const arr1 = [5, 'abc', true, null, undefined]; 
    arr1[10] = 27;

    arr1.forEach(function(item, i, arr) {
        console.log( i + ": " + item + " (масив:" + arr + ")" );
      });

    // об єкт

    let obj = {
        x : 1,
        y : 2,
    }

    obj.z = 3

    //for in в об єктах
    for (let key in obj) {
        
      
        console.log( "Ключ: " + key + " значення: " + obj[key] );
      }
      for (let key of arr1) {
        console.log(key);
    }

    for (let key of arr1) {
        console.log(key);
    }
    
 
    const s = JSON.stringify(obj);
    console.log(s);
    
    const obj2 = JSON.parse(s);
    console.dir(obj);
    
    // цикл while
    let counter = 0;
    while (counter< 5) {
        console.log(counter);
        counter++;
    }
    
    // цикл do .. while
    // let сount = 0;
    // do {
    //     count++;
    //     console.log(counter)
    // } while (count < 5);
    
//функції

    func1();
    function func1() {
        console.log('hello world');
    }
    
    // function expression
    const func2 = function() {
        console.log('hello world');
    }
    
    // arrow function expression
    const func3 = () => {
        console.log('hello world');
    }
    
    // named function expression 
    const func4 = function func5() { 
        console.log('hello world');
        
    }

    let name="admin"
    
    setTimeout(function(){
        alert(name);
    },1000);
    
// аргументи
  let sum = (a, b) => {
      return a + b
  }


  // параметри за замовчуванням

  let multiply = (a, b = 2) => {
    return a * b;
  }

  console.log(multiply(5)) //10
  console.log(multiply(2,3)) //6
  
  //spread 
  var arr = [2, 3];
  var data = [1, ...arr, 4, 5];
  console.log(data); // [1 2 3 4 5]
  function summa(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(summa(1, 2, 3));
  // expected output: 6
  
  console.log(summa(1, 2, 3, 4));
  // expected output: 10

  const fruits = ['apple', 'orange', 'banana', 'pineapple'];

  // ... – rest-оператор
  const [first, ...rest] = fruits; 
  console.log(first); // 'apple'
  console.log(rest); // ['orange', 'banana', 'pineapple']

  // closure

function calcfunc(a){
    return function(){
        console.log(10 * a)
    }
}
 
const calc = calcfunc(27)
calc()

function sumfunc (a){
    return function(b){
        return a + b
    }
}

const add = sumfunc(2)
console.log(add(12)) //14
console.log(add(22)) //24
const add1 = sumfunc(10)
console.log(add1(40))//50

function multfunc (a){
    return function(b){
        return a * b
    }
}

const mult = multfunc(10)
console.log(mult(10)) //100


function getCounter() {
    let counter = 0;
    return function() {
      return counter++;
    }
  }
  let count = getCounter();
  console.log(count());  // 0
  console.log(count());  // 1
  console.log(count());  // 2
  
  //IIFE

  (function (){
      console.log("hello world")
  })()
var shownum
  (shownum = function(a = 2) {
      console.log(a)
  })()
  shownum(5)

  // стара версія
// var v = 2
//  (function() {
//      var v = 4 //приватна зміна анонімної функції
//      console.log(v)
//  }) ()
//  console.log(v)//2

 // нова версія ES6

 let n = 3

 {
     let n = 5
     console.log(n) // окремий блок
 }

 console.log(n)

 // паттерн модуль

 let calculator = (function(){
    let data = { number: 0};
     
    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9


const div = document.querySelector('div');

function addOnClick(element) {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    });
};

addOnClick(div);


