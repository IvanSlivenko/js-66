// console.log("Helloy, world");
// console.log("22");
// console.log(2 + 2);

// console.log(2+2*2);

////////////////////////////////////////////////
// Порахуй сумму яблук та винограду та різницю яблук та винограду
// const apples = 47;
// const grapes = 135;
// const total = grapes + apples;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);
/////////////////////////////////////////////////////

// // Заміни вираз  перевизначення комбінованим оператором
//


///////////////////////////////////////////////////////
// Розбери приорітет операторів в інструкції привласнення  значення константи result
// const result = 108 + 223 - 2 * 5;
// console.log(result);

// let nam = 5;
// console.log(nam);//5
// console.log(nam ** 2);//25

// let num = 5;
// console.log(num ** 5);//5 в 5-тій степені
// console.log(num ** 0.5) // 5*0.5
///////////////////////////////////////////////////////
//Напиши скрипт, який виводить у консоль заокругленні в гору вниз значення константи  value
//використовуй методи math.floor() math.cell()math.round()

//const value = 27.5;
// console.log("🚀 ~ file: script.js ~ line 38 ~ value", value)
// console.log(Math.floor(value)); //27
// console.log(Math.ceil(value));//28
// console.log(Math.round(value)); //28

///////////////////////////////////////////////////////////////////
//Склади фразу  :"Cyberdyne System has 200 bots in stock"  за допомогою шаблонних рядків
// const companyName = 'Cyberdyne System';
// const repairBots = 150;
// const defenseBots = 50;
// const massage = `${companyName} has ${repairBots + defenseBots} bots in stock`;
// console.log(massage); //Cyberdyne System has 200 bots in stock
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
//Напиши скрипт, що розраховує індекс масси тіла.Для цього необхідно розділити вагу в кілораммах на квадрат
//висоти людини в метрах
 
//Вага = Wtight  = 88.3
//Зріст Height = 1.75

//роздільник чисел може бути кома

//індекс масси тіла необхідно округлити до однієї цифри після коми




// let weight = "88,3";
// // let weiht = "88.3";
// let height = "1.75";



//variant 1

// Знайти та замінити символ "," на символ "." у строці
// weight = Number(weight.replace(",", "."));
// height = Number(height.replace(",", "."));

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));// підносимо до степені 2 змінну height
// // виводимо повідомлення константи bmi, яку округлюємо за
// //допомогою toFixed до сотих
// //за допомогою Number переводимо строку створену методом toFixed в число

// console.log(bmi);
// // отримуємо повідомлення: 28.83



//variant 2

// Алгоритм:
//1.Знаходимо індекс символу " , ";
//2.Скопіюємо число після коми ;
//3.Склеїмо  цілу частину і дробову та поставимо правильний розділювач (.);
//4.

// const commaIndex = weight.indexOf(","); // Знаходимо індекс коми
// console.log("🚀 ~ file: script.js ~ line 95 ~ commaIndex", commaIndex);

// const valueAfterComma = weight.slice(commaIndex + 1); //Копіюємо числа після коми
// console.log("🚀 ~ file: script.js ~ line 98 ~ valueAfterComma", valueAfterComma);

// const valueBeforeComma = (Number.parseInt(weight)); //Копіюємо число до коми
// console.log("🚀 ~ file: script.js ~ line 100 ~ valueBeforeComma", valueBeforeComma)

// weight = +`${valueBeforeComma}${"."}${valueAfterComma}`; // З"єднуємо строки та переводимо в число
// console.log("🚀 ~ file: script.js ~ line 100 ~ weight =", weight)

// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));// підносимо до степені 2 змінну height
// console.log("🚀 ~ file: script.js ~ line 101 ~ bmi", bmi)
///////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

// console.log(6 % 4); // Оператор % показує остачу після ділення на ціле число (6:4 = 1 цілих;  1*4=4; 6 - 4 = 2 цілих)
///////////////////////////////////////////////////////////////////////////////////////////////////////

// let cost = 0;
// const subscription = "free";
// if (subscription === "free") {
// cost = 100;
// }
// console.log(cost);


// let cost = 10;
// const subscription = "free";
// if (subscription === "pro") {
// cost = 100;
// }
// console.log(cost);

//////////////////////////////////////////////////////////////////

// let test;
// test = (Math.random(test).toFixed(2)) * (10 - 1);
// console.log(test);
// test = Math.ceil(test);
// console.log(test);

// const Min = 1;
// const Max = 10;

// test = Min + (Math.random(test).toFixed(2)) * (Max - Min)
// test = Math.ceil(test);
// console.log(test);
/////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// console.log("test");
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 34 && 'kiwi');

/////////////////////////////////////////////////

// const question = prompt("Введіть пароль");

// // console.log("🚀 ~ file: script.js ~ line 157 ~ question", question)
// if (question === "1") {
//     alert("Пароль вірний");
// }
// else {
//     alert("Не вірний пароль");
//  }

///////////////////////////////////////////////////////////////
// const hours = 14;
// const minutes = 35;

// let message = " ";

// if (minutes === 0) {
//     message = `${hours} г.`;

// }
// else {

//     message = `${hours} г. ${minutes} хв.`;
// }
// console.log(message);
////////////////////////////////////////////////////////////////

// const UserInput = +prompt("Введіть число");
// // console.log("🚀 ~ file: script.js ~ line 184 ~ UserInput",
// // typeof UserInput)
// // console.log();

// if (UserInput > 0) {
//     // alert("Це позитивне число")
//     console.log("Це позитивне число");
// }
// else if (UserInput === 0) {
//     // alert("Це 0")
//     console.log("Це 0");
// }
// else if (UserInput < 0) {
//     // alert("Це негативне число")
//     console.log("Це негативне число");
// }


/////////////////////////////////////////////////////////////////////////
// const a = 200;
// const b = 180;
// if (a > 100 && b > 100) {
//     if (a > b)
//         console.log(a);
//     {
//         console.log(b);
//     }
// else {
//         console.log(b + 512);

//     }
// }
/////////////////////////////////////////////////////////////////////////
// const a = 200;
// const b = 180;
// console.log(Math.max(a, b));
////////////////////////////////////////////////////////////////////////

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i+=5) {
//     // if (i % 5===0)console.log(i);
    
//     console.log(i);
//     }

///////////////////////////////////////////////////////////////////////



// const userLogin = prompt("Bиведіть логін");


// if (userLogin === "admin") {
//     const password = +prompt("Введіть пароль");
//     if (password ===11) {
       
//         alert("Привіт!");
//     }
//     else {
//         alert(" Пароль не вірний");
//     }
    

// }
// else if (userLogin != "admin") {
//     alert("Логін не вірний.");
//  }

/////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// console.log(true && 3); //3
// console.log(false && 3); //false
// console.log(true && 4 && 'kiwi'); // kiwi
// console.log(true && 0 && 'kiwi');// 0
// console.log(true || 3);// true
// console.log(true|| 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 ||undefined); // 2
// console.log((1 && null && 2)>0); // 1 && null =null ; null && 2 = null ; null>0 = null = false
// console.log(null || (2 && 3) || 4); // 2 && 3 = 3 ; Null || 3 = 3;
///////////////////////////////////////////////////////////////////////////////////////
// const quwestion = prompt("Яка офіційна назва JS ?");
// if (quwestion.toLowerCase() === "ECMAScript".toLowerCase()) {
//     alert("Вірно");
// } else {
//     alert("Не вірно");
// }
 ///////////////////////////////////////////////////////////////////////

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients[1]);// Poly
///////////////////////////////////////////////////////////
// const clients = ["Mango", "Poly", "Ajax"];
// clients[1] = "Omega";
// clients[2] = "Alfa";
// console.log(clients[1]);
// console.log(clients);
///////////////////////////////////////////////////////////
// const clients = ["Mango", "Poly", "Ajax"];
// clients[1] = "Omega";
// clients[2] = "Alfa";
// console.log(clients[1]); //Omega
// console.log(clients);//(3) ['Mango', 'Omega', 'Alfa']
// console.log(clients.length);//3
//////////////////////////////////////////////////////////////
// const clients = ["Mango", "Poly", "Ajax"];
// clients[1] = "Omega";
// clients[2] = "Alfa";
// // console.log(clients[1]); //Omega
// // console.log(clients);//(3) ['Mango', 'Omega', 'Alfa']
// // console.log(clients.length);//3
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex);//2
// console.log(clients[lastElementIndex]);//Alfa
/////////////////////////////////////////////////////////////
// const clients = ["Mango", "Poly", "Ajax"];
// for (let i=0; i < clients.length; i+=1 ){
//   console.log(clients[i])  ;// Mango  Poly  Ajax
// }
///////////////////////////////////////////////////////////////////
// const a = ["Mango"];
// const b = a;
// a.push("Poly");
// b.push("Ajax");

// console.log(a); //(3) ['Mango', 'Poly', 'Ajax']
// console.log(b);//(3) ['Mango', 'Poly', 'Ajax'];
////////////////////////////////////////////////////////////////////////
// const name = "Mango";
// console.log(name.split("")); //(5) ['M', 'a', 'n', 'g', 'o']
////////////////////////////////////////////////////////////////////////

// const message = "JavaSckript - це цікаво";
// console.log(message.split(" "));//(4) ['JavaSckript', '-', 'це', 'цікаво']
///////////////////////////////////////////////////////////////////////////////
// const words = ['JavaSckript', '-', 'це', 'цікаво'];
// console.log(words.join("*"));//JavaSckript*-*це*цікаво
////////////////////////////////////////////////////////////////////////////
// const clients = ["Mango", "Ajax", "Poly", "Kivi"];
// console.log(clients.indexOf("Poly")); //2
// console.log(clients.indexOf("Kivi")); //3
// console.log(clients.includes("Popy"));//false
// console.log(clients.includes("Poly"));//true
///////////////////////////////////////////////////////////////////////////
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";


// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is red fruit`); //cherry is red fruit


// }
///////////////////////////////////////////////////////

// const numbers = [];
// numbers.push(1);
// console.log(numbers);//[1]
// numbers.push(2);
// console.log(numbers);//[1,2]
// numbers.push(3);
// console.log(numbers);//[1,2]
// numbers.push(4);
// console.log(numbers);//[1,2,3]
// numbers.push(5);
// console.log(numbers);//[1,2,3,4]
// numbers.push(5);
// console.log(numbers);//[1,2,3,4,5]
///////////////////////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.pop()); //(5 ) [1, 2, 3, 4]
// console.log(numbers);
// console.log(numbers.pop()); //(4) [1, 2, 3]
// console.log(numbers);
// console.log(numbers.pop()); //(3) [1, 2]
// console.log(numbers);
// console.log(numbers.pop()); //(2) [1]
// console.log(numbers);
/////////////////////////////////////////////////////////////////////////////

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice());
// console.log(clients.slice(1));
// console.log(clients.slice(1, 3));
// console.log(clients.slice(-1));

////////////////////////////////////////////////////////////////////
// const scores = [1, 2, 3, 4, 5];
// const deletedscores = scores.splice(1, 3);
// console.log(deletedscores);//[2,3,4]
// console.log(scores);//[]1,5]

///////////////////////////////////////////////////
// const colors = ["red", "green", "blue"];
// colors.splice(1, 0, "yellow", " pink"); //(5) ['red', 'yellow', ' pink', 'green', 'blue']

// console.log(colors);
///////////////////////////////////////////////////
// const Languages = ["C", "C++", "Java", "JavaScript"];
// Languages.splice(1, 1, "Python");
// console.log(Languages);// (4) ['C', 'Python', 'Java', 'JavaScript']
// Languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(Languages);// (6) ['C', 'Python', 'C#', 'Swift', 'Go', 'JavaScript']
/////////////////////////////////////////////////////////////
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newclients = ["Monkong", "Singu"];
// const allClientsWithOldFirst = oldClients.concat(newclients);
// console.log(allClientsWithOldFirst); //(6) ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']

// const allClientsWithNewFirst = newclients.concat(oldClients);
// console.log(allClientsWithNewFirst); //(6) ['Monkong', 'Singu', 'Mango', 'Ajax', 'Poly', 'Kiwi']

///////////////////////////////////////////////////////////////////////////////////////////////////////
//githowto
//console.log(11);
// let a = 5;
// let b = a;

// a = 7;
// // console.log(a, b);

// const arr = [1, 2, 3];
// const arr2 = arr;
// console.log(arr, arr2);
// arr[1] = 55;
// // console.log(arr, arr2);

// const arr3 = arr.slice(0);
// console.log(arr3);
//////////////////////////////////////

// const dogs = ["Pes", "Sobaca", 3, 4];
// for (let dog of dogs) {
//  console.log(dog);

// }
//////////////////////////////////////////

// const genres = ["Jazz", "Blues"] ;
// console.log("🚀 ~ file: script.js ~ line 428 ~ genres", genres)
// console.log("🚀 ~ file: script.js ~ line 428 ~ genres", genres)
// genres.push("Rock");
// console.log("🚀 ~ file: script.js ~ line 428 ~ genres", genres)
// console.log(genres[0]);
// const arrlength = genres.length-1;
//  console.log("🚀 ~ file: script.js ~ line 434 ~ arrlength", arrlength)
// console.log(genres[arrlength]);
// console.log(genres.shift());
// console.log(genres.slice(0,1))
// console.log(genres);
// // console.log(genres[0]);
// genres.unshift("Country", "Reggae");
//  console.log(genres);

//////////////////////////////////////////////////////
// const values = "8 11"
// const valuesArray = values.split(" ");
// console.log("🚀 ~ file: script.js ~ line 446 ~ valuesArray", valuesArray);
// const square = valuesArray[0] * valuesArray[1];
// console.log("🚀 ~ file: script.js ~ line 448 ~ square", square);
/////////////////////////////////////////////////////////////////////////

// const fruits = ["oun", "two", "free","foo","fei"];
// for (let i = 0; i < fruits.length; i++) {
   
//     console.log(`${i+1}: ${fruits[i]}`);

// }

///////////////////////////////////////////////////////////////

// const names = "Jacobs,William,Solomon,Artemis";
// const phones = "0674708721,0674708720,0674708722";

// const namesArrey = names.split(",");
// console.log("🚀 ~ file: script.js ~ line 464 ~ namesArrey", namesArrey);
// const phonesArrey = phones.split(",");
// console.log("🚀 ~ file: script.js ~ line 466 ~ phonesArrey", phonesArrey);
// console.log(namesArrey, phonesArrey);
// for (const i in namesArrey) {
//     console.log(i);
//     console.log(`${ namesArrey[i]} : ${ phonesArrey[i]}`);
// }
///////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===5)break
//     console.log(arr[i]);
// }
//////////////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) continue;

//     else console.log(arr[i]);
// }
/////////////////////////////////////////////////////////////////////////////

// console.log("abc".padStart(10, "b"));
// console.log("abc".padEnd(10, "b"));

/////////////////////////////////////////////////////////////////////////////

// function add(a, b) {
//     return a + b;
    
    
// }
// const sum = add(1, 5);
// const sum2 = add(sum,5);
// console.log(sum2);
/////////////////////////////////////////////////////////////////////////////

// function addPositive(a, b) {
//     if (a >= 0 && n >= 0) {
//         return a + b;

//     }
//     else {
//         return 0;
//     }
// }
// const sum = addPositive(-1, 5);
// console.log(sum);
/////////////////////////////////////////////////////////////////////////////
// const bmi = calcBMI("88,3", "1.75");


// function replaceCommaToDot(string){
// return string.replace(",", ".");
// }

// // console.log(replaceCommaToDot(str));

// function getRoundeNumber(number) {
//     return Number(number.toFixed(1));
// }
// // console.log(getRoundeNumber(88.3976));

// const bmi = calcBMI("88,3", "1.75");

// function   calcBMI(weight,height) {
//     weight = replaceCommaToDot(weight);
//     height = replaceCommaToDot(height);

//     return getRoundeNumber(weight / height ** 2);


// }
// console.log(bmi);

////////////////////////////////////////////////////////
// function add(a, b) {
//     return a + b;
// }

// console.log(add(2 + 2 + 2, 2));
//////////////////////////////////////////////////////

// function finLargesNumber(numbers) {
//     let max = numbers[0];
//     // console.log(max);
//     for (const number of numbers) {
//         if (number > max) {
//             max = number
//         }
       
//     }

//     return max;
// }
// console.log(finLargesNumber([5, 1, 7]));
// console.log(finLargesNumber([2, 17, 94, 125, 23, 37]));
// console.log(finLargesNumber([49,4,7,83,12]));
/////////////////////////////////////////////////////////////

// function calAverage() {
//     const numbers = arguments;
//     const numbersAmount = numbers.length;
//     let sum = 0;
    
//     for (const number of numbers) {
//         sum += number; // sum = sum + number
//     }
//     return sum / numbersAmount;
// }

// console.log(calAverage(1,2,3,4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(27, 43, 2, 8, 36));

///////////////////////////////////////////////////////////////
// function calculateEngravingPrice(message, pricePerWord) {
//     const words = message.split(" ");
//     const sum = words.length * pricePerWord;
//     // return sum;
//     console.log(words);
//     console.log(sum);
// }



// calculateEngravingPrice("JavaScript is in my blood", 10)
//   //повертає 50
// calculateEngravingPrice("JavaScript is in my blood", 20)
//   //повертає 100
// calculateEngravingPrice("Web-development is creative work", 40)
//   //повертає 160
// calculateEngravingPrice("Web-development is creative work", 20)
//   //повертає 80
/////////////////////////////////////////////////////////////////////////

// function makeStringFromArray(array, delimiter) {
//   const string =array.join(delimiter);
//   // Change code below this line



//   // Change code above this line
// //   return string;
//     console.log(string);

// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
//   //повертає "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
//   //повертає "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_")
//   //повертає "top_picks_for_you"
  ///////////////////////////////////////////////////////////////////////////
//   function slugify(title) {
     
//     //   const message = title.replaceAll(" ", "-").toLowerCase();
//       const message = title.split(" ").join("-").toLowerCase();
//       console.log(message);
      
      
//     //   return message
// }
// slugify("Arrays for begginers")
// // повертає "arrays-for-begginers"
// slugify("English for developer")
// // повертає "english-for-developer"
// slugify("Ten secrets of JavaScript")
// // повертає "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS")
// // повертає "how-to-become-a-junior-developer-in-two-weeks"
//////////////////////////////////////////////////////////////////////////////

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);

// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);


//Значення змінної firstTwoEls - це масив ["apple", "plum"]
//Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
//Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]

//////////////////////////////////////////////////////////////////////////
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);



// Оголошена змінна allClients
// Значення змінної allClients - це масив
// ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
//////////////////////////////////////////////////////////////////////////
// function makeArray(firstArray, secondArray, maxLength) {
//     const message = firstArray.concat(secondArray);
//     const messageTwo = message.splice(0, maxLength);
//     console.log("////////////////////////////");
//     // console.log(message);
//     console.log(messageTwo);
  
//   }


// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
//   //повертає ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
//   //повертає ["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
//   //повертає ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
//   //повертає ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
//   //повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)

/////////////////////////////////////////////////////////////////////////////////


// function calculateTotal(number) {
//  // Change code below this line
//     const i = 0;
//     let sum = 0;
//     for (let i = 1; i<=number; i=i+1) {
//         sum =sum+i;
//         // return sum;
//         // console.log(sum);
        
//     }
//     // return sum;
//     console.log(sum);

//   // Change code above this line
// }
// // calculateTotal(1)
//   //повертає 1
// calculateTotal(3)
//   //повертає 6
// calculateTotal(7)
//   //повертає 28
// calculateTotal(18)
//   //повертає 171
// calculateTotal(24);
//   //повертає 300
  /////////////////////////////////////////////////////////////////////////////
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i<= fruits.length-1; i=i+1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
///////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(order) {
//     let total = 0;
    
   
//     for (let i = 0; i <= order.length-1; i = i + 1) {
//         // console.log(order[i]);
//         total = total + order[i];
//     }
  
//     console.log(total);
// //   return total;
// }
// calculateTotalPrice([12, 85, 37, 4])
// // повертає 138
// calculateTotalPrice([164, 48, 291])
// //   //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// //   //повертає 1116
/////////////////////////////////////////////////////////////////////
// function findLongestWord(string) {
//     const arrStryng = string.split(" ");
//     let WordLider = arrStryng[0];

//     for (let i = 0; i <= arrStryng.length-1; i = i + 1) {

//         if (arrStryng[i].length > WordLider.length) {
//             WordLider = arrStryng[i];
//         }
    
//         else {
//             WordLider = WordLider;
//         }
//     }
//       return WordLider ;
//     }
// findLongestWord("The quick brown fox jumped over the lazy dog")
//   //повертає jumped
// findLongestWord("Google do a roll")
// //   //повертає Google.
// findLongestWord("May the force be with you")
// //   //повертає force
///////////////////////////////////////////////////////////////////////////
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
   
//    for(i=min; i<=max; i=i+1){
//      numbers.push(i);
//    }
//     console.log(numbers);
//     return numbers;
// }


// createArrayOfNumbers(1, 3)
//   //повертає [1, 2, 3]
// createArrayOfNumbers(14, 17)
//   //повертає [14, 15, 16, 17]
// createArrayOfNumbers(29, 34)
// // повертає [29, 30, 31, 32, 33, 34]
//////////////////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//     const array = [];

//     for (const number of numbers ) {
//         // console.log(number);
//         if (number > value) {
//             array.push(number);
            
//         }

//     }

//     console.log(array)
//     return array;
// }
// filterArray([1, 2, 3, 4, 5], 3)
//   //повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4)
//   //повертає [5]
// filterArray([1, 2, 3, 4, 5], 5)
//   //повертає []
// filterArray([12, 24, 8, 41, 76], 38)
//   //повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20)
//   //повертає [24, 41, 76]
  //////////////////////////////////////////////////////////////////////////
// function checkFruit(fruit) {

//     const fruits = ["apple", "plum", "pear", "orange"];
//    return fruits.includes(fruit);
//     //console.log(message);
// }

// checkFruit("plum")
//   //повертає true
// checkFruit("mandarin")
//   //повертає false
// checkFruit("pear")
//   //повертає true
// checkFruit("Pear")
//   //повертає false
// checkFruit("apple")
//   //повертає true
  //////////////////////////////////////////////////////////////////////
// function getCommonElements(array1, array2) {
//   const array3 = [];
//   for (let i = 0; i <= array1.length - 1; i = i + 1) {
 
//     if (array2.includes(array1[i])) {
//       array3.push(array1[i]);
//     }

//   }
//   console.log(array3);
//   return array3
// }
// getCommonElements([1, 2, 3], [2, 4])
//   //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
//                  //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
//   //повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
//   //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])
//   //повертає []
// /////////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(order) {
//   let total = 0;

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (const ordery of order) {
//     total =total + ordery;
//   }
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])
//   //повертає 138
// calculateTotalPrice([164, 48, 291])
//   //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
//   //повертає 1116
// calculateTotalPrice([])
//   //повертає 0
//   /////////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {

//   const filteredNumbers = [];

//     for (const number of numbers) {
   
//     if (number > value) {
//       filteredNumbers.push(number);
//     }

//   }

//  console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3)
//   //повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4)
//   //повертає [5]
// filterArray([1, 2, 3, 4, 5], 5)
//   //повертає []
// filterArray([12, 24, 8, 41, 76], 38)
//   //повертає [41, 76]
// filterArray([12, 24, 8, 41, 7])
//////////////////////////////////////////////////////////////////
// function getEvenNumbers(start, end) {
//   const array = [];
//   const array2 = [];
//   for (let i = start; i<= end; i=i+1) {
//     array.push(i);
    
//   }
//   for (let numer of array) {
//     if (numer%2===0 ) {
//       array2.push(numer);
//     }
//   }
//   console.log(array2);
//   return array2;
//   }
// getEvenNumbers(2, 5)
//   //повертає [2, 4]
// getEvenNumbers(3, 11)
//   //повертає [4, 6, 8, 10]
// getEvenNumbers(6, 12)
//   //повертає [6, 8, 10, 12]
// getEvenNumbers(8, 8)
//   //повертає [8]
// getEvenNumbers(7, 7)
//   //повертає []
//   ///////////////////////////////////////////////////////////////////
// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       // break;
//        console.log(number);
// return number;
//     }
//   }
 
//  }
// findNumber(2, 6, 5)
//   //повертає 5
// findNumber(8, 17, 3)
//   //повертає 9
// findNumber(6, 9, 4)
//   //повертає 8
// findNumber(16, 35, 7)
// /////////////////////////////////////////////////////////////////////
// function includes(array, value) {
// for (const arr of array) {
//     if (arr === value) {
//       console.log(true);
//       return true;
//         }
//   }
//     console.log(false);
//     return false
// }
 
// includes([1, 2, 3, 4, 5], 3)
//   //повертає true
// includes([1, 2, 3, 4, 5], 17)
//   //повертає false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
//   //повертає true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
//   //повертає false
// includes(["apple", "plum", "pear", "orange"], "plum")
//   //повертає true
// includes(["apple", "plum", "pear", "orange"], "kiwi")
//   //повертає false
//   ///////////////////////////////////////////////////////////////////

// const book = {
//   title: "The Last KongDom",
//   author: "Bernard Cornwell",
//   genres: ["historycsl prose", "adventure"],
//   isPublik: true,
//   rating: 8.38,
//   price :100.50,
  
// }
// const booktitle = book.title;
// console.log(booktitle);
// const bookGenres = book.genres;
// console.log(bookGenres);
// const bookPrice = book.price;
// console.log(bookPrice);
////////////////////////////////////////////////////////////////////////
// const user = {
//   name: "Ivan",
//   tag: "jgluke",
//   location: {
//     contry: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
  
// }
// const locat = user.location;

// console.log(locat.city);
// console.log(locat.contry);
// // console.log(11);
///////////////////////////////////////////////////////////////////////////
// const namy = "Ivan";
// const Famili = "Slivenko";

// const User = {
//   namy,
//   Famili,
// };
// console.log(User.namy);
// console.log(User.Famili);
// /////////////////////////////////////////////////////////////////////////////


