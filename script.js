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
// const book = {
//   title: "The Last Kindom",
//   author: "Bernard Cornwell",
//   genres: ["historcal prose", "adventure"],
//   rating: 8.38,
// };
// for (const key in book) {
//   // console.log(`${key} - ${book[key]}` );
//   ////////////////////////////////////////////////////////////////////////////



// }
// const keys = Object.keys(book);
// console.log(keys);

////////////////////////////////////////////////////////////////////////////////
// const book = {
//   title: "The Last Kindom",
//   author: "Bernard Cornwell",
//   genres: ["historcal prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// const values = Object.values(book);
// for (const key of keys) {
//   // console.log(key);
//   // console.log(book[key]);
//   }
// console.log(keys);
// console.log(values);
///////////////////////////////////////////////////////////////////
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,

// };
// const values = Object.values(goods);
// console.log(values);
// let total = 0;
// for (const value of values) {
//   total = total + value;
// }
// console.log(total);
//
///////////////////////////////////////////////////////////
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cronwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// const entries = Object.entries(book);
// console.log(entries);

// console.log(book);

///////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// let totalRating = 0;

// for (const book of books) {
//   // console.log(book);
//   // console.log(book.title);
//   // console.log(book.author);
//   // console.log(book.rating);
//   console.log(`Ретиннг книжки${book.title} дорівнює ${book.rating}`);
//   totalRating = totalRating + book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(`"Середній рейтинг дорівнює :" ${averageRating}`);
// // console.log(averageRating);
// /////////////////////////////////////////////////////////////////////////////

// const apartment = {
// imgUrl :"https://via.placeholder.com/640x480",
// descr:"Spacious apartment in the city center",
// rating:4,
// price:2153,
// tags:["premium", "promoted", "top"],
// }
// console.log("🚀 ~ file: script.js ~ line 1120 ~ apartment", apartment)
// /////////////////////////////////////////////////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment.rating;
// console.log(aptRating);
// const aptDescr = apartment.descr;
// console.log(aptDescr);
// const aptPrice = apartment.price;
// console.log(aptPrice);
// const aptTags = apartment.tags;
// console.log(aptTags);
// ////////////////////////////////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const ownerName = apartment.owner.name;
// // console.log("🚀 ~ file: script.js ~ line 1155 ~ ownerName", ownerName)
// const ownerPhone = apartment.owner.phone;
// // console.log("🚀 ~ file: script.js ~ line 1157 ~ ownerPhone", ownerPhone)
// const ownerEmail = apartment.owner.email;
// // console.log("🚀 ~ file: script.js ~ line 1159 ~ ownerEmail", ownerEmail)
// const numberOfTags = apartment.tags.length;
// console.log("🚀 ~ file: script.js ~ line 1161 ~ numberOfTags", numberOfTags)
// const firstTag = apartment.tags[0];
// console.log("🚀 ~ file: script.js ~ line 1163 ~ firstTag", firstTag);
// const lengthTag = apartment.tags.length;
// const lastTag = apartment.tags[lengthTag-1];
// console.log("🚀 ~ file: script.js ~ line 1165 ~ lastTag", lastTag)
// // ////////////////////////////////////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment["rating"];
// console.log("🚀 ~ file: script.js ~ line 1178 ~ aptRating", aptRating)
// const aptDescr = apartment["descr"];
// console.log("🚀 ~ file: script.js ~ line 1180 ~ aptDescr", aptDescr)
// const aptPrice = apartment["price"];
// console.log("🚀 ~ file: script.js ~ line 1182 ~ aptPrice", aptPrice)
// const aptTags = apartment["tags"];
// console.log("🚀 ~ file: script.js ~ line 1184 ~ aptTags", aptTags)
// // //////////////////////////////////////////////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// console.log(apartment.price);
// apartment.rating = 4.7;
// console.log("🚀 ~ file: script.js ~ line 1202 ~ apartment.rating", apartment.rating)

// apartment.owner.name ="Henry Sibola";
// console.log("🚀 ~ file: script.js ~ line 1205 ~ apartment.name", apartment.name)

// apartment.tags.push("trusted");
// console.log("🚀 ~ file: script.js ~ line 1208 ~ apartment.tags", apartment.tags)
// ///////////////////////////////////////////////////////////////////////////////////////
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },

// };

// apartment.area = 60;
// apartment.rooms = 3;
// location = {country :"Jamaica",
//             city:"Kingston",
// }
/////////////////////////////////////////////////////////////////////////////////////////


// const nums1 = [1, 2, 3, 4];
// const nums2 = [5, 6, 7, 8];
// const arr = [...nums1, ...nums2];

// const defaultUser = {
//   name: "",
//   age: 0,
//   email: "",
// };

// const user1 = {
//   ...defaultUser,
//   age: 22,
// };
////////////////////////////////////////////////////
// const user = {
//   name: "Ivan",
//   surname: "Slivenko",
//   age: 22,

// };

// function getfullName({name, surname,...}) {
//   return name + " " + surname;
// }
// const fullName = getfullName(user);
// console.log(fullName);
///////////////////////////////////////////////////////
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);
//////////////////////////////////////////////////////////////////////////////
// const user = {
//   name: "Alex",
//   age: 30,
  
// };
// console.log(user);

// console.dir(Object);

// const arr = ["h", "e", "l", "l", "o"];
// console.table(arr);
// console.table(user);

/////////////////////////////////////////////////////////////////////////////////
// const Langs = ["python", "javascript", "c++", "haskel", "php", "ryby"];
// const LangsSorted = Langs.sort();
// console.log("🚀 ~ file: script.js ~ line 1293 ~ LangsSorted", LangsSorted)

// for (const j in Langs) {
//   let wasSwap = false;
//   for (let j= 0; j < Langs.length - 1; j++) {
//     if (Langs[j].charCodeAt(0) > Langs[j + 1].charCodeAt(0)){
//       const swap = Langs[j];
//       Langs[j] = Langs[j + 1];
//       Langs[j + 1] = swap;
//       wasSwap = true;
//     }
//     if (!wasSwap) break;
//   }

// }
// console.log(Langs);
// /////////////////////////////////////////////////////////////////////////////////////////////
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]:"jqueryismyjam",


//   // Change code above this line
// };
// console.log(credentials.email);
// console.log(credentials.password);
// /////////////////////////////////////////////////////////////////////////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.table(apartment);
// console.log(keys);
// console.log(values);
// // Change code below this line
///////////////////////////////////////////////////////////////////////////
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
//   // Change code above this line
// }
//////////////////////////////////////////////////////////////////
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventyre"],
//   rating: 8.38,
// }

// const keys = Object.keys(book);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(book[key]);
//   }


// ////////////////////////////////////////////////////////////////////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
//   // console.log(values);
// }
// console.log(values);

// //keys = ["descr", "rating", "price"];
// //values = ["Spacious apartment in the city center", 4, 2153];
// // //////////////////////////////////////////////////////////////////////////////

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const ObjectAlt = Object.keys(object);
//   console.log(ObjectAlt);
//     for (const key of ObjectAlt ) {
//       propCount = propCount + 1;
//     }
//     console.log(propCount);
//   return propCount;
//   // Change code above this line
// }
// countProps({})

// countProps({ name: "Mango", age: 2 })

//   //повертає 2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
//   //повертає 3
// // ///////////////////////////////////////////////////////////////////////////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line

//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
//   console.log(keys);
//   console.log(values);

//  // keys - це масив ["descr", "rating", "price"]
// // values - це масив ["Spacious apartment in the city center", 4, 2153]

// // //////////////////////////////////////////////////////////////////////////////
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // const arrKeys = Object.keys(salaries);
//   const arrValues = Object.values(salaries);
  
//   for (const key of arrValues) {
//     totalSalary = totalSalary + key;

//   }

//   // Change code above this line
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({})
//   //повертає 0
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
//   //повертає 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
//   //повертає 400
// //   /////////////////////////////////////////////////////////////////////
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (let i = 0; i <= colors.length - 1;i=i+1) {
//   for (const key of colors){

//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
// // ////////////////////////////////////////////////////////////////////////////

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let tovapPrice = null;

// for (let key of products) {
//   if (key.name === productName) {
//     tovapPrice = key.price;
//     }
//   }
//   console.log(tovapPrice);
// return tovapPrice;
// }


//   // Change code above this line

// getProductPrice("Radar")
//   //повертає 1300.
// getProductPrice("Grip")
//   //повертає 1200.
// getProductPrice("Droid")
//   //повертає 400.
// getProductPrice("Engine")
// // повертає null.
// // //////////////////////////////////////////////////////////////////////////
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

    
  
//   arr = [];
//   for (const key of products) {
//     if (key[propName]) {
//       arr.push(key[propName]);
//     }
//      }
//     console.log(arr);
//     return arr;

    

//     // Change code above this line
 
// }

// getAllPropValues("name")
//   //повертає ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity")
//   //повертає [4, 3, 7, 9]
// getAllPropValues("price")
//   // повертає [1300, 2700, 400, 1200]
// getAllPropValues("category")
//   //повертає []
// // //////////////////////////////////////////////////
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//   // Change code below this line
//   totalPrice=0;
  
//   for (let product of products) {
//     // console.log("................................" );
//     // console.log(productName);
//     // console.log(product.name);
//     // console.log("................................" );
    
//     if (product.name === productName) {
//   // console.log("ok");
//       totalPrice = product.price * product.quantity;
//       // console.log(totalPrice);
// }
  
// }
//   console.log(totalPrice);
//   return totalPrice;

//   // Change code above this line
// }

// calculateTotalPrice("Blaster")
//   //повертає 0
// calculateTotalPrice("Radar")
//   //повертає 5200
// calculateTotalPrice("Droid")
//   //повертає 2800
// calculateTotalPrice("Grip")
//   //повертає 10800
// calculateTotalPrice("Scanner")
//   //повертає 8100
//   ////////////////////////////////////////////////
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(...temps);
// console.log(Math.max(...temps));
////////////////////////////////////////////////////
// const temps = [14, -4, 8, 11];
// console.log("🚀 ~ file: script.js ~ line 1592 ~ temps", temps)
// const copyOfTemps = [...temps];
// console.log("🚀 ~ file: script.js ~ line 1593 ~ copyOfTemps", copyOfTemps)
// ////////////////////////////////////////////////////////////////////////////
// const first = { proA: 5, proB: 10, proC: 50 };
// const second = { proC: 15, proD: 20 };

// const third = { ...first, ...second };
// console.table(second);
// console.log(Object.keys(second));
// console.log(Object.values(second));
///////////////////////////////////////////////
// function multiply(...args) {

//   console.log(args);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4,);
/////////////////////////////////////////////////////

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log("......................");
//   console.log(firstNumber);
//   console.log("......................");
//   console.log(secondNumber);
//   console.log("......................");
//   console.log(...otherArgs);
//   console.log("......................");
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1,2,3,4,5)
// ///////////////////////////////////////////////////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
////////////////////////////////////////////////////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

//icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204
//////////////////////////////////////////////////////////////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//       yesterday:highYesterday,
//        today:highToday,
//        tomorrow:highTomorrow,
//        icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//       } = highTemperatures;


// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
//highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//////////////////////////////////////////////////////////////////////////////////////////
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb,} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// ////////////////////////////////////////////////////
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line`



// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const { today: {
//   low:lowToday,
//   high:highToday,
//   icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
// },
//   tomorrow: {
//     low:lowTomorrow,
//     high:highTomorrow,
//     icon:tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   }
// } = forecast;

// console.log(lowToday);
// console.log(highToday);
// console.log(todayIcon);
// console.log(lowTomorrow);
// console.log(highTomorrow);
// console.log(tomorrowIcon);
// ////////////////////////////////////////////////////////////////////////////////
// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today: { low: todayLow,
//       high: todayHigh
//     },
//     tomorrow: { low: tomorrowLow,
//       high: tomorrowHigh
//     }
//   } = forecast;
//     // Change code above this line
//   const x = (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4
//   console.log(x);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })
// //повертає 28.5
// calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })
//  //повертає 37
// ///////////////////////////////////////////////////////////////////////////////////////
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);
// // /////////////////////////////////////////////////////////////////////////
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);
// const bestScore = Math.max(...allScores);
// console.log(bestScore);
// const worstScore = Math.min(...allScores);
// console.log(worstScore);
// ////////////////////////////////////////////////////////////////////////////

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.table(finalSettings);
// ///////////////////////////////////////////////////////////////////////////////////////
// function makeTask(data) {
//   const test = {
    
//     category: "General",
//     priority: "Normal",
//     completed: false,
//   }
//   // Change code below this line
//   console.log({...test, ...data});
//   return { ...test, ...data };
//   // Change code above this line
// }

// makeTask({})
//   //повертає { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// //повертає { category: "Homemade", priority: "Low", text: "Take out the trash",
// //completed: false }
// makeTask({ category: "Finance", text: "Take interest" })
// //повертає { category: "Finance", priority: "Normal", text: "Take interest",
// //completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" })
//   //повертає { category: "General", priority: "Low", text: "Choose shampoo",
//   //completed: false }
// makeTask({ text: "Buy bread" })
//   //повертає { category: "General", priority: "Normal", text: "Buy bread",
//   //completed: false }
//   /////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// function add(...args) {
//   // Change code above this line
//   // console.log(args);
//   rez = 0;
//   for (const arg of args) {
//     rez = rez + arg;
//   }
//   console.log(rez);
//   return rez;
// }
// add(15, 27,100,200,100)
  //повертає 42
// add(12, 4, 11, 48)
  //повертає 75
// add(32, 6, 13, 19, 8)
  //повертає 78
// add(74, 11, 62, 46, 12, 36)
  //повертає 241
//   ////////////////////////////////////////////////////////////////////////////
//   function addOverNum(a,...args) {
  
//     let total = 0;
   
//     for (const arg of args) {
//     // total += arg;
//     if (arg > a) {
//       total = total + arg;
//     }
//     }


//       // console.log("/////////////////////////////////////////");
//       // console.log(etalon);
//       // console.log(altArr);
//       console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(50, 15, 27)
//   //повертає 0
// addOverNum(10, 12, 4, 11, 48, 10, 8)
//   //повертає 71
// addOverNum(15, 32, 6, 13, 19, 8)
//   //повертає 51
// addOverNum(20, 74, 11, 62, 46, 12, 36)
//   //повертає 218
//   //////////////////////////////////////////////////////////////////////////////////
// // Change code below this line
// function findMatches([...masOun],...ars) {
//   const matches = []; // Don't change this line

//   // Change code above this line
//   console.log("////////////////////////");
//   // console.log(masUon);
//   // console.log(...ars);
//   for (let key of ars) {
//     for (let x of masOun) {
//       if (key === x) {
//         matches.push(key);
//       }

//     }

//     }
// console.log(matches);
//   return matches;
//   }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
//   //повертає [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)
//   //повертає [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)
//   //повертає [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16)
//   //повертає []
// /////////////////////////////////////////////////////////////////////////////////////////////
// console.log();
// const user = {
//   name: "Ivan",
//   birdhDate: 1993,
//   getAge: function(){
//     return 2022 - this.birdhDate;
//   },
// };
// console.log(user.getAge());
////////////////////////////////////////////////////

// function sum(a, b) {
//   console.log(a, b);
//   console.log(arguments);
//   return a + b;
//  }
// console.log(sum(5, 9, 7));
// //////////////////////////////////////////////////////
// function sum(a, b, logger) {
  
//   const result = a + b;
//   logger(result);
//   return a + b;
// }
// function logger(arg) {
//   console.log(arg);
// }


// sum(5, 3, logger);
///////////////////////////////////////////////////
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     console.log("Returning all books");
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     console.log(`Adding book ${bookName}`);
//     return `Adding book ${bookName}`;
//   },
//   removeBook(text) {
//     console.log(`Deleting book ${text}`);
//     return `Deleting book ${text}`;
//   },
//   updateBook(name1, name2) {
//     console.log(`Updating book ${name1} to ${name2}`);
//     return `Updating book ${name1} to ${name2}`
//   },
  

//   // Change code above this line
// };

// bookShelf.getBooks()
//   //повертає рядок "Returning all books"

// // bookShelf.addBook
//   //- це метод об'єкта
// bookShelf.addBook("Haze")
//   //повертає рядок "Adding book Haze"
// // bookShelf.removeBook
//   //- це метод об'єкта
// bookShelf.removeBook("Red sunset")
//   //повертає рядок "Deleting book Red sunset"
// // bookShelf.updateBook
//   //- це метод об'єкта
// bookShelf.updateBook("Sands of dune", "Dune")
//   //повертає рядок "Updating book Sands of dune to Dune"
  ////////////////////////////////////////////////////////
// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     console.log(String(this.books).toLowerCase());
//   },
// };
// bookShelf.getBooks();
// //////////////////////////////////////////////
// const bookShelf = {
//   books: ["Останнє королівство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };
// console.log(bookShelf.getBooks());

// bookShelf.addBook("Імла");
// bookShelf.addBook("Страж снів");
// bookShelf.removeBook("Імла");

// console.table(bookShelf);
//////////////////////////////////////////////////
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this.books);
//     const bookIndex = this.books.indexOf(oldName);
//     console.log("🚀 ~ file: script.js:2022 ~ updateBook ~ bookIndex", bookIndex)


//     this.books.splice(bookIndex, 1, newName);
//     // this.books.push(newName);

//     console.log(this.books);
//     console.log("///////////////////////////////");

//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles")
// //, значення властивості books - це масив
// //["The last kingdom", "Dungeon //chronicles",
// //"The guardian of dreams"]

// bookShelf.updateBook("The last kingdom", "Dune")
// //, значення властивості books - це масив ["Dune",
// //"Haze", "The guardian of dreams"]
// ////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName)
//     console.log(this.potions)
//     return this.potions


//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility")
// //, у властивості potions буде масив ["Speed potion",
// //"Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion("Power potion")
//, у властивості potions буде масив ["Speed potion",
//"Dragon breath", "Stone skin", "Invisibility", "Power potion"]
//////////////////////////////////////////////////////////
// const arr = [1, 2, 64, 4, 22, 22, 98, 44, 33];
// console.log(arr);


// // console.log(arr.sort((a, b) => a - b));
// // console.log(arr.sort((a, b) => b - a));
// ////////////////////////////////////////////////////
// const arrSum = arr.reduce((acc,el)=>acc+el,0)
// console.log(arrSum);

// const arrSum = arr.reduce((acc, el, i) => {
//   console.log(i, acc,el,(acc+el));
//   return acc + el
// },0);

/////////////////////////////////////////////
// const arr = ["Katya", "TARAS", "nastya", "alyona", "ALEX", "BogDan"];
// const filtredArr = arr.filter((el) => el === el.toUpperCase());
// console.log(arr);
// console.log(filtredArr);
/////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((el) => el ** 2);
// console.log(arr);
// console.log(newArr);
// // return newArr;


// ////////////////////////////////////

// const student = [
//   {
//   name: "alex",
//   subject: ["Chemystry", "Computer siense"]
//   },
//    {
//   name: "Ivan",
//   subject: ["Chemystry", "Computer siense"]
// }
// ];
// const subject1 = student.map(el => el.subject);
// const subject2=student.flatMap(el => el.subject);
// console.log(subject1);
// console.log(subject2);
//////////////////////////////////////////////////////
// const cars =[
// {
//   make:"Ford",
//   modcar:"Explorer",
//   type:"suv",
//   amount:"mmm",
//   price:100,
//   onSale:false,
//   },
//   {
//   make:"audy",
//   modcar:"Explorer",
//   type:"suv",
//   amount:"mmm",
//   price:150,
//   onSale:false,
//   },
//   {
//   make:"Daha",
//   modcar:"Explorer",
//   type:"suv",
//   amount:"mmm",
//   price:200,
//   onSale:false,
//   },
  
// ]

// const getModCars = (cars) => cars.map(car => car.modcar);

// console.table(getModCars);

// const makeCarsWidthaDiscont = (cars, diskount) => {
//   cars.map((car)=> {
//   car.price-=car.price*diskount
//   }
// })
// console.log(makeCarsWidthaDiscont);
/////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // console.log(this.potions);
//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility")
// //, у властивості potions буде масив ["Speed potion",
// //"Dragon breath", "Stone skin", "Invisibility"]
// atTheOldToad.addPotion("Power potion")
// //, у властивості potions буде масив ["Speed potion",
// //"Dragon breath", "Stone skin", "Invisibility", "Power potion
// //////////////////////////////////////////////////////////
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}`);
//   }

// function registerGuest(name, callback) {
// console.log(`Реєструємо гостя ${name}`),callback(name);

// }
// registerGuest("Манго", greet);
////////////////////////////////////////////////////////
// function processCall(recipient,func1) {
//   const isRecipientAvaiLabe = Math.random() > 5;
//   // console.log(isRecipientAvaiLabe);
//   if (isRecipientAvaiLabe) {
//     console.log(`Абонент ${recipiеnt} не доступний, залиште повідомлення`);
//   } else {
//     console.log(`З"єднуємо з ${recipient}, очікуйту...`);
//   }
// }

// processCall("Mango");

////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const arrIndex = this.potions.indexOf(potionName);
//     console.log(arrIndex);
//     this.potions.splice(arrIndex, 1);
//     console.log(this.potions);


//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath")
//   //, у властивості potions буде масив ["Speed potion", Stone skin"]
// atTheOldToad.removePotion("Speed potion")
//   //, у властивості potions буде масив ["Stone skin"]
  //////////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const indexPotions = this.potions.indexOf(oldName);
//     // console.log(indexPotions);
//     console.log(this.potions);
//     this.potions.splice(indexPotions, 1, newName);
//     console.log(this.potions);

//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
//   //, у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")
  //, у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]/
//////////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line

//   getPotions() {
//     // console.table(this.potions);
//     for (const potion of this.potions) {
//       // console.log(potion.name);
//       // console.log(potion);
//     }
//     console.log(this.potions);
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     console.table(this.potions);
//     console.log(` в такому переліку потрібно знайти товар з ім"ям ${newPotion.name} `);
//     // console.log(addYes);
//      let addYes = [];
//     for (const potion of this.potions) {
//       // if (this.potions.includes(newPotion)) {
//       if (potion.name.includes(newPotion.name)) {
//           console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//           return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//       // console.log(`${newPotion.name} не дорівнює ${potion.name} тому можемо додати товар ` );
//       addYes.push(1);
//       // console.log(addYes);
//     }
//     // console.log(addYes);
//     if (addYes.length > 0){
//       this.potions.push(newPotion);
//     }
//       console.table(this.potions);
//     },
// ///////////////////////////////////////////////////////////////
//   removePotion(potionName) {
//     const potionIndex = "";
//     const arrName = [];
//     // console.table(this.potions);
//     for (let element of this.potions) {
//       arrName.push(element.name);
//     }
//     // console.table(arrName);
//     // console.log(arrName);
//     // console.log(arrName.indexOf(potionName));
//     this.potions.splice((arrName.indexOf(potionName)),1);
//     // console.table(this.potions);
//     },
// //////////////////////////////////////////////////////////////
//   updatePotionName(oldName, newName) {
//     console.table(this.potions);
//     for (const potione of this.potions) {
//       if (potione.name === oldName)
//       {
//         potione.name = newName;
//       }
//     }
//     console.table(this.potions);
//   },
//   // Change code above this line
// };
/////////////////////////////////////////////////////

// atTheOldToad.getPotions()
  //для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]


// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
  //в масиві potions останнім елементом буде цей об'єкт
  
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
  //в масиві potions останнім елементом буде цей об'єкт

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
  //масив potions не змінюється
  
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
//массив potions не змінюється

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
  //, повертає рядок "Error! Potion Dragon breath is already in your inventory!"

// atTheOldToad.addPotion({ name: "Stone skin", price: 240 })
  //, повертає рядок "Error! Potion Stone skin is already in your inventory!"


// atTheOldToad.removePotion("Dragon breath")
//, у властивості potions буде масив [ { name: "Speed potion", price: 460 },
//{ name: "Stone skin", price: 520 } ]

// atTheOldToad.removePotion("Speed potion")
//, у властивості potions буде масив [ { name: "Dragon breath", price: 780 },
//{ name: "Stone skin", price: 520 }]
///////////////////////////////////////////////////////////////////////////////
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
//, у властивості potions буде масив [{ name: "Speed potion", price: 460 },
//{ name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520
  
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
//, у властивості potions буде масив [{ name: "Speed potion", price: 460 },
//{ name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// //modul4
// function greet(name) {
//   return `Ласкаво просимо ${name}`
// }
// console.log(greet);
/////////////////////////////////////////////////////////
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}`);
// }


// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя${name}`);
//   callback(name);
// };

// registerGuest("Ivan", greet);
// // ///////////////////////////////////////////////////////////////////
// registerGuest("Masha", function notify(name) {
//   console.log(`Шановний(на) ${name}
//   ваш номер буде готовий за 30 хв`);
// })
/////////////////////////////////////////////////////////////
// function processCall(recipient) {
//   const isRecipientAvailable = Math.random() > 0.5;
//   // console.log(isRecipientAvailable);
//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient}  недоступний,
//   залиште повідомлення`);
//   } else {
//     console.log(`З"єднуємо з ${recipient} очікуйте`);
//   }
  
// }
// processCall("sss");
//////////////////////////////////////////////////////////

// function processCall(recipient,onAvailable,onNotAvailable) {
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//     onAvailable(recipient);
 
  
// }

// function takeCall(name) {
//   console.log(`З"эднуємо з ${name}  , очікуйте...`);
// }

// function activateAnsveringMachine(name) {
//   console.log(`Aбонент${name}  недоступний, залиште повідомлення`);
// }

// function leaveHoloMessage(name) {
//   console.log(`Aбонент${name}  недоступний, записуємо голограмму`);
// }
// processCall("Ivan",takeCall, activateAnsveringMachine);
///////////////////////////////////////////////////////////////////////////
// function repatLog(n){
// for (let i = 0; i < n; i += 1) {
//   console.log(i);
// }
// }
// repatLog(5)
///////////////////////////////////////////////////////////////////////////
// function printValue(value) {
//   console.log(value);
// }

// // printValue("ok");
// function prettyPrint(value) {
//   console.log("Login value: ",value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// repeat(3, printValue);
// repeat(3, prettyPrint);
//////////////////////////////////////////////////////////////////////
// const numbers = [5, 10, 15, 20, 25];
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Iндекс ${i}, значення ${numbers[i]}`);
// // }
// ///////////////////////////////////
// numbers.forEach(function (number, index) { console.log(`Iндекс ${index}, значення ${number}`) });
///////////////////////////////////////////////////////////////////////////////////////////////////////
// function classicAdd(a, b, c) {
//   const sum = a + b + c;
//   // console.log(sum);
//   return sum;
// }
// classicAdd(5, 5, 5);
// ////////////////////////////////////////
// const arrAdd = (a, b, c) => {
//   const sumTwo = a + b + c;
//   console.log(sumTwo);
// }

// arrAdd(5, 5, 6);
/////////////////////////////////////////
// const add = (...args) => { console.log(args); }
// add(1, 2, 3, 4, 5);
/////////////////////////////////////////////
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
// console.log(` Ірдекс${index}, значення  ${number}`);
// });
/////////////////////////////////////////////////////////
// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach((number, index)=>{
//  console.log(` Індекс${index}, значення  ${number}`);
// })
/////////////////////////////////////////////////////////
// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) => {
//  console.log(` Індекс${index}, значення  ${number}`);
// };
// numbers.forEach(logMessage);
/////////////////////////////////////////////////////////
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];
// for (let  i=0; i < numbers.length; i=+1) {
//   if (numbers[i]>3) {
//     filteredNumbers.push(numbers[i]);

//   }
// }
// // console.log(filteredNumbers);
// // console.log(111);

// console.log(111);
/////////////////////////////////////////////////////////////
// const dirtyMultiply = (array, value)=> {
//   for (let i = 0; i < array.length; i +=1) {
//     array[i] = array[i] * value;
//     console.log(array[i]);
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers,2);
// console.log(numbers);
////////////////////////////////////////////////////////////////////
// const pureMultyPley = (array,value)=> {
//   const newArray = [];
// array.forEach(element => {
//   newArray.push(element * value);
// });
//   console.log(newArray);
//   return newArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// const doubleNumbers = pureMultyPley(numbers, 2);
//////////////////////////////////////////////////////////////////////
// const student = [
//   { name: "Ivan", courses: ["Математика", "Фізика"] },
//   { name: "Petro", courses: ["Інформатика", "Математика"] },
//   { name: "Stepan", courses: ["Фізика", "Біологія"] },
// ];
// const message = student.map(student => student.courses);
// console.log(message);
// const messageFry = student.flatMap(student => student.courses);
// console.log(messageFry);


// //Математика,
// //Фізика
// //Інформатика
// //Біологія
/////////////////////////////////////////////////////////////////////////
// const values = [51, -3, 27, 21, -68, 42, -37];
// console.log(values);

// const positiveValues = values.filter(value => value > 0);
// console.log(positiveValues);

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);
//////////////////////////////////////////////////////////////////////////////
//  const student = [
//   { name: "Ivan", courses: ["Математика", "Фізика"] },
//   { name: "Petro", courses: ["Інформатика", "Математика"] },
//   { name: "Stepan", courses: ["Фізика", "Біологія"] },
// ];
// const allCoursese = student.flatMap(student => student.courses);
// console.log(allCoursese);

// const uniqueCourses = allCoursese.filter((course, index, array) => array.indexOf(course) === index)
// console.log(uniqueCourses);
///////////////////////////////////////////////////////////////////////////
// const LOW_SCORE = 50;
// const HIGN_SCORE = 80;
// const students = [
//   { name: "Ivan", score: 83 },
//   { name: "Petro", score: 59 },
//   { name: "Stepan", score: 37 },
//   { name: "Volodumur", score: 94 },
//   {name:"Sergiy",score:64},

// ];

// const best = students.filter(students => students.score > HIGN_SCORE);
// console.log(best);

// const worst = students.filter(students => students.score < LOW_SCORE);
// console.log(worst);
// const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGN_SCORE);
// console.log(average);
/////////////////////////////////////////////////////////////////////////////////////////
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// const x = colorPickerOptions.find(Option => Option.label === "blue");
// console.log(x);

// const y = colorPickerOptions.findIndex(option => option.label === "blue");
// console.log(y);
///////////////////////////////////////////////////////////////////////////////////////////
// function makePizza() {

//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// console.log(result);

// const pointer = makePizza;
//////////////////////////////////////////////////
//4/2
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line

// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
// }
// makeMessage("Royal Grand",makePizza);
// makeMessage("Ultracheese", deliverPizza);
///////////////////////////////////////////////////////////
//4/3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName)  {
//   console.log(`Eating pizza ${pizzaName}.`);
// });


// // Доповни другий виклик функції makePizza(pizzaName, callback),
// // передавши другим аргументом інлайн колбек - функцію eatPizza(pizzaName),
// // яка логує рядок "Eating pizza <назва піци>".

// // Оголошена функція makePizza
// // Функція makePizza приймає два параметри
// // Другим аргументом під час виклику makePizza("Ultracheese")
// // передана функція eatPizza з єдиним параметром pizzaName
//////////////////////////////////////////////////////////////////////
//4/4

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName,makePizza,onOrderError) {
  
//     // for (const element of this.pizzas) {
//       console.log("//");
//       console.log(this.pizzas);
//       console.log(pizzaName);
//       // console.log(element);
      
//       if (this.pizzas.includes(pizzaName)) {
//       console.log("ok");
//       makePizza(pizzaName);
//       } else {
//         console.log("trabl");
//       onOrderError(pizzaName);
//     }
//   // }
// },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   console.log(`Error! There is no pizza with a name  ${pizzaName} in the assortment. `);
//   return `Error! There is no pizza with a name  ${pizzaName} in the assortment. `;
// }

// Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError)
// повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError)
//повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError)
//повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError)
//повертає "Error! There is no pizza with a name Vienna in the assortment."
///////////////////////////////////////////////////////////////////////////////////////
// var bar = "global";

// function foo() {
//   console.log(this.bar);
// }
// foo();
// var obj1 = {
//   bar: "obj1",
//   foo: foo,

// }
// obj1.foo();
// var obj2 = {
//   bar:"obj2"
// };
// foo.call(obj2);
// new foo();
////////////////////////////////////////////////////////////
// var foo = {
//   a:42
// }

// var bar = Object.create(foo);

// bar.b = "222";
// console.log(bar.a);
// console.log(bar.b);
//////////////////////////////////////////////////
// var name = "Ivan";
// function identify() {
// // console.log(this.name.toUpperCase());
//   return this.name.toUpperCase();
// };
  
// identify();
// function speak() {
//   var greting = "Hello, I'm " + identify.call(this)
//   console.log(greting);
// };
// speak();
// ////////////////////////////////////////////////////////////////
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function(number,index){
//     totalPrice=totalPrice+number;
//   });
  

//   // Change code above this line
//   // console.log(totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice([12, 85, 37, 4])
// //повертає 138
// calculateTotalPrice([164, 48, 291])
//   //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
//   //повертає 1116
// ////////////////////////////////////////////////////////////////////////
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//     numbers.forEach(function (number, index) {
//       if (number > value) {
         
//       filteredNumbers.push(number);
//     };
//   });
  
//   // Change code above this line
//   console.log(filteredNumbers);
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
// filterArray([12, 24, 8, 41, 76], 20)
//   //повертає [24, 41, 76]
////////////////////////////////////////////////////////////////////////////////
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line


// firstArray.forEach(function(element,index) {
//   if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
// });
    
// console.log("//////////////////////////");
//   console.log(firstArray);
//   console.log(secondArray);
//   console.log(commonElements);

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4])
//   //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
//   //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
//   //повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
//   //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])
//   //повертає []
////////////////////////////////////////////////////////////////////////////////
//   var calculateTotalPrice=(quantity, pricePerItem)=> {
//   // Change code above this line
//     var result = quantity * pricePerItem;
//     console.log(result);
//     return result;
// }
// calculateTotalPrice(5, 100)
//   //повертає 500
// calculateTotalPrice(8, 60)
//   //повертає 480
// calculateTotalPrice(3, 400)
//   //повертає 1200
  /////////////////////////////////////////////////////////////////////////////////
  // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
// const calculateTotalPrice = (quantity, pricePerItem) =>
//  quantity * pricePerItem;
 
// // };
// // Change code above this line
// calculateTotalPrice(5, 100)
//   //повертає 500
// calculateTotalPrice(8, 60)
//   //повертає 480
// calculateTotalPrice(3, 400)
//   //повертає 1200
  ////////////////////////////////////////////////////////
// Change code below this line
// const calculateTotalPrice=(orderedItems)=> {
//   let totalPrice = 0;

//   orderedItems.forEach((item,index)=> {
//     totalPrice += item;
//   });
// console.log(totalPrice);
//   return totalPrice;
// }
// // Change code above this line
// calculateTotalPrice([12, 85, 37, 4])
//   //повертає 138
// calculateTotalPrice([164, 48, 291])
//   //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
//   //повертає 1116
  ///////////////////////////////////////////////////////////
// const filterArray=(numbers, value)=> {
//   const filteredNumbers = [];

//   numbers.forEach((number,index)=> {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   console.log(filteredNumbers);
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
// filterArray([12, 24, 8, 41, 76], 20)
//   //повертає [24, 41, 76]
  //////////////////////////////////////////////////
// // Change code below this line
// const getCommonElements=(firstArray, secondArray)=> {
//   const commonElements = [];

//   firstArray.forEach((element,index)=> {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
// console.log(commonElements);
//   return commonElements;
// }
// getCommonElements([1, 2, 3], [2, 4])
//   //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
//   //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
//   //повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
//   //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])
//   //повертає []
  /////////////////////////////////////////////////
// function changeEven(numbers, value) {
//   // Change code below this line
//   const NumbersTwo = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       // numbers[i] = numbers[i] + value;
//       NumbersTwo.push(numbers[i] + value)
//     }
//     else {
//       NumbersTwo.push(numbers[i]);
//     }
//   }
//   // Change code above this line
//   console.log("//////////////////////////");
//   console.log(numbers);
//   console.log(NumbersTwo);
//   return NumbersTwo;
// }
// changeEven([1, 2, 3, 4, 5], 10)
//   //повертає новий масив [1, 12, 3, 14, 5]
// changeEven([2, 8, 3, 7, 4, 6], 10)
//   //повертає новий масив [12, 18, 3, 7, 14, 16]
// changeEven([17, 24, 68, 31, 42], 100)
//   //повертає новий масив [17, 124, 168, 31, 142]
// changeEven([44, 13, 81, 92, 36, 54], 100)
//   //повертає новий масив [144, 13, 81, 192, 136, 154]
  //////////////////////////////////////
//   /////////////////////////////////////////////////////////////////////
//   const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planeta=>planeta.length);
// console.log(planetsLengths);

// //Оголошена змінна planets
// // Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// // Оголошена змінна planetsLengths
// // Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// //////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(element => element.title);
// console.log(titles);

// // Значення змінної titles - це масив ["The Last Kingdom",
// //"Beside Still Waters", "The Dream of a Ridiculous Man",
// //"Redder Than Blood", "Enemy of God"]
//////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(element => element = element.genres);
// console.log(genres);

// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserEmails = users => {
//     const arrayEmail =users.map(element=>element=element.email)
// console.log(arrayEmail);
//   };
//   // Change code above this line

// getUserEmails(users);

// // Виклик функції із зазначеним масивом користувачів повертає масив
// //["moorehensley@indexia.com", "sharlenebush@tubesys.com",
// //"rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com",
// //"blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
///////////////////////////////////////////////////////////////////////////////////
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// const oddNumbers = numbers.filter(number => number % 2 >0 );;
// console.log("///////////////////////////////");
// console.log(numbers);
// console.log(evenNumbers);
// console.log(oddNumbers);


// // Оголошена змінна numbers
// // Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// // Оголошена змінна evenNumbers
// // Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// // Оголошена змінна oddNumbers
// // Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// // Для перебирання масиву numbers використаний метод filter()
///////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(element=>element.genres);
// const uniqueGenres = allGenres.filter((genr, index, allGenres) => allGenres.indexOf(genr) === index);


// console.log(allGenres);
// console.log(uniqueGenres);
// // Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// // Оголошена змінна uniqueGenres
// // Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// // Для обчислення значення змінної allGenders використаний метод flatMap()
// // Для обчислення значення змінної uniqueGenres використаний метод filter()
/////////////////////////////////////////////////////////////////////////////////////////////////////а
// function identify() {
//   return this.name.toUpperCase();
// };

// function speak() {
//   var greeting = "Helloy, I'm " + identify.call(this);
//   console.log(greeting);
// };

// var me = {
//   name:"Kule"
// };

// var yor = {
//   name:"Reader"
// };
// // identify.call(me);
// speak.call(me);
// speak.call(yor);
///////////////////////////////////////////////////////////////////////////////

// function foo(num) {
//   console.log("foo" + num);
//   foo.count++;
// };

// foo.count = 0;

// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// };
// console.log(foo.count);
///////////////////////////////////////////////////////////
// function foo(num) {
//   console.log("foo" + num);
//   data.test++;
// };

// var data = {
//   test: 0
// };



// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// };
// console.log(data.test);
///////////////////////////////////////////////
// function foo(num) {
//   console.log("foo" + num);
//   this.count++;
// };

// foo.count = 0;

// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo.call(foo,i);
//   }
// };
// console.log(foo.count);
///////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(element=>element.genres);
// const uniqueGenres = allGenres.filter((genr, index, allGenres) => allGenres.indexOf(genr) === index);


// console.log(allGenres);
// console.log(uniqueGenres);
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()
////////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);
//////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getUsersWithEyeColor = (users, color) => {
  
//   return users.filter(user => user.eyeColor.includes(color));


  
// };

// getUsersWithEyeColor = (users,"blue");
// Change code above this line

// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив

// Change code below this line

// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];
// const getUsersWithAge = (users, minAge, maxAge) => {


//   return users.filter(user => user.age > minAge && user.age < maxAge);

// };
// // Change code above this line
////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user=>user.friends.includes(friendName))
// };
// Change code above this line
////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// const getFriends = (users) => {
//   const allFrends = users.flatMap(user=>user.friends);
//   console.log(allFrends);
//   const uniqueFrends = allFrends.filter((user,index,array)=>array.indexOf(user)===index);

// console.log(uniqueFrends);
// return uniqueFrends;
// };
// // Change code above this line
// getFriends(users);
//////////////////////////////////////////////////////////////////////////
// const tests = ["Один", "Два", "Три", "Три", 5, 6, 7, 8, 9, 10];
// console.log("🚀 ~ file: script.js:3573 ~ test", tests)
// // const testTwo = tests.filter((test) => test > 5);
// const testTwo = tests.filter((test, index, testTwo) => testTwo.indexOf(test) === index)


// console.log("🚀 ~ file: script.js:3575 ~ testTwo", testTwo)
////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// // const getActiveUsers = (users) => users.filter(user => (user.isActive));
// const getActiveUsers = (users) => {
//   // const allUsers = users.flatMap((user) =>`${user.name} isActive ${user.isActive}`);
//   // console.table(allUsers);
//   console.table(users);
//   const activeUsers = users.filter((user) => user.isActive === true);
//   console.table(activeUsers);
//  }




// getActiveUsers(users);
// getActiveUsers(users, ["Sharlene Bush", "Elma Head", "Carey Barr","Sheree Anthony"]);
// Change code above this line
// getActiveUsers( "Sharlene Bush", "Elma Head", "Carey Barr","Sheree Anthony");
// Виклик функції із зазначеним масивом користувачів повертає
// масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ];

// const getInactiveUsers =(users)=> users.filter(user=>user.isActive===false);
   

// // Change code above this line
////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// // const bookWithTitle = (books) => {
// //   console.table(books)
// //   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// //   const result = books.find((elemnet) => elemnet.title === BOOK_TITLE)
// //   console.table(result);
// // }
// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);

// const bookByAuthor = books.find(book => book.author === AUTHOR);
// // console.table(books);
// // const bookByAuthor = (books) => {
// //   console.table(books)
// //   const AUTHOR = 'Robert Sheckley';
// //   const result = books.find((elemnet) => elemnet.author === AUTHOR)
// //   console.table(result);
// // }
// // bookWithTitle(books);
// // bookByAuthor(books);
//////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }

// ];

// const getUserWithEmail = (users, email) => users.find(user=>user.email===email);
// // Change code above this line
///////////////////////////////////////////////////////////////////////////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// console.log("🚀 ~ file: script.js:3870 ~ eachElementInFirstIsEven", eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2> 0);
// console.log("🚀 ~ file: script.js:3874 ~ eachElementInFirstIsOdd", eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// console.log("🚀 ~ file: script.js:3878 ~ eachElementInSecondIsEven", eachElementInSecondIsEven);

// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 > 0);
// console.log("🚀 ~ file: script.js:3882 ~ eachElementInSecondIsOdd", eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// console.log("🚀 ~ file: script.js:3882 ~ eachElementInThirdIsEven", eachElementInThirdIsEven);

// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 > 0);
// console.log("🚀 ~ file: script.js:3884 ~ eachElementInThirdIsOdd", eachElementInThirdIsOdd);
///////////////////////////////////////////////////////////////////////////////////////////
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(element=>element % 2===0);
// console.log("🚀 ~ file: script.js:3893 ~ anyElementInFirstIsEven", anyElementInFirstIsEven)
// const anyElementInFirstIsOdd = firstArray.some(element=>element % 2 >0);
// console.log("🚀 ~ file: script.js:3895 ~ anyElementInFirstIsOdd", anyElementInFirstIsOdd)

// const anyElementInSecondIsEven = secondArray.some(element=>element % 2===0);
// console.log("🚀 ~ file: script.js:3898 ~ anyElementInSecondIsEven", anyElementInSecondIsEven)
// const anyElementInSecondIsOdd = secondArray.some(element=>element % 2 >0);
// console.log("🚀 ~ file: script.js:3900 ~ anyElementInSecondIsOdd", anyElementInSecondIsOdd)

// const anyElementInThirdIsEven = thirdArray.some(element=>element % 2===0);
// console.log("🚀 ~ file: script.js:3903 ~ anyElementInThirdIsEven", anyElementInThirdIsEven)
// const anyElementInThirdIsOdd = thirdArray.some(element=>element % 2 >0);
// console.log("🚀 ~ file: script.js:3905 ~ anyElementInThirdIsOdd", anyElementInThirdIsOdd)
////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const isAnyUserActive = (users) => {
// users.some(user=>user.isActive)
//   console.log();(isAnyUserActive);
// };

// isAnyUserActive(users);
// // Change code above this line
/////////////////////////////////////////////////////////////////////////
// var arr = [0, 1, 2, 3];
// var total = arr.reduce((accum, element) => {
//  console.log("🚀 ~ file: script.js:3984 ~ total ~ element", element)
//  console.log("🚀 ~ file: script.js:3984 ~ total ~ accum", accum)
 
//   return accum + element;
// }, 0 );
// console.log("🚀 ~ file: script.js:3988 ~ total ~ total", total)
// console.log(total);
/////////////////////////////////////////////////////////////////////////////////
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes);
// // Change code below this line

// const totalPlayTime = playtimes.reduce((accum, curent) => {
//   return accum + curent;
// }, 0);
// console.log("🚀 ~ file: script.js:4002 ~ totalPlayTime", totalPlayTime)

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log("🚀 ~ file: script.js:4009 ~ averagePlayTime", averagePlayTime)

// // Значення змінної totalPlayTime - це число 2692
// // Значення змінної averagePlayTime - це число 673
/////////////////////////////////////////////////////////////////////////////////////////
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const totalAveragePlaytimePerGame = players.reduce((accum, element) =>
// {
//    const result=(element.playtime / element.gamesPlayed)
//   return accum + result;
//  }, 0);
// console.log(totalAveragePlaytimePerGame);

// Значення змінної totalAveragePlaytimePerGame - це число 1023
////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// const calculateTotalBalance = (users) =>users.reduce((accum, user)=> {
//   const result = accum + user.balance;
//   // console.log(result);
//   return result;
  
// },0);
// // Change code above this line
// // Виклик функції із зазначеним масивом користувачів повертає число 20916

// calculateTotalBalance(users);
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const getTotalFriendCount = (users) =>  users.reduce((accum, element) => {
//   const result= accum + element.friends.length;
// // console.log(result);

//   return result;
// }, 0);
// // Change code above this line
// getTotalFriendCount(users);
//////////////////////////////////////////////////////////////////////////////////////

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(releaseDates);
// console.log(ascendingReleaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(authors);
// console.log(alphabeticalAuthors);
// ////////////////////////////////////////////////////////////////////////
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort((a,b) => a - b);
// console.log(descendingReleaseDates);
// /////////////////////////////////////////////////////////////////////////////
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = authors.sort((a, b) => a.localeCompare(b));
// console.log("🚀 ~ file: script.js:4220 ~ authorsInAlphabetOrder", authorsInAlphabetOrder)


// const authorsInReversedOrder = authors.sort((a, b) => b.localeCompare(a));;
// console.log("🚀 ~ file: script.js:4223 ~ authorsInReversedOrder", authorsInReversedOrder)
////////////////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((first,second)=>first.author.localeCompare(second.author));
// console.log("🚀 ~ file: script.js:4248 ~ sortedByAuthorName", sortedByAuthorName)


// const sortedByReversedAuthorName = [...books].sort((first,second)=>second.author.localeCompare(first.author));
// console.log("🚀 ~ file: script.js:4252 ~ sortedByReversedAuthorName", sortedByReversedAuthorName)


// const sortedByAscendingRating = [...books].sort((first, second) => first.rating - second.rating);
// console.log("🚀 ~ file: script.js:4256 ~ sortedByAscendingRating", sortedByAscendingRating)



// const sortedByDescentingRating = [...books].sort((first, second) => second.rating - first.rating);
// console.log("🚀 ~ file: script.js:4261 ~ sortedByDescentingRating", sortedByDescentingRating)
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// const sortByAscendingBalance = (users) => [...users].sort((first, second) => first.balance - second.balance);

// sortByAscendingBalance(users);

// // Change code above this line
/////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const sortByDescendingFriendCount = (users) => [...users].sort((first, second) =>
//   second.friends.length-first.friends.length);

// // Change code above this line
// sortByDescendingFriendCount(users);

//////////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const sortByName = (users) => {
//  const x= [...users].sort((first, second) => first.name.localeCompare (second.name))
//   console.table(x);
//   return x;
// };


// // Change code above this line
// sortByName(users);
/////////////////////////////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter((book, index, arr) =>
//   book.rating > MIN_BOOK_RATING).map(element => element.author).sort((first, second)=> first.localeCompare(second));


// console.table(books);
// console.log(names);
///////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users =[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getNamesSortedByFriendCount = (users) => {
//   const result= [...users].sort((first, second) => first.friends.length -
//     second.friends.length).map(element => element.name);
//   console.log(result);
//   return result;
 

// }
// getNamesSortedByFriendCount(users);

// // Change code above this line
// //["Moore Hensley", "Sharlene Bush",
// //"Elma Head", "Sheree Anthony",
// //"Ross Vazquez", "Carey Barr",
// //"Blackburn Dotson"]
//////////////////////////////////////////////////////////////////////////////////////////////
// Change code below this line
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// const getSortedFriends = (users) => {
//   const result = [...users].flatMap(element => element.friends).filter((frend, index, arr) => arr.indexOf(frend) === index).sort((first, second) => first.localeCompare(second));
//   console.log("🚀 ~ file: script.js:4671 ~ getSortedFriends ~ result", result);
  
  
 
//   // console.table(uniqueFrends);
// };
// getSortedFriends(users);
// // Change code above this line
/////////////////////////////////////////////////////////////////////////////////////
// const users=[
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // const getTotalBalanceByGender = (users, gender) => {

// //   const result=[...users].filter((element, index, arr) => element.gender === gender);
// //   // console.table(result);
// //   const totalBalanse = result.reduce(((accum,element) =>accum + element.balance),0);
// //   console.log(totalBalanse);
// // };

// const getTotalBalanceByGender = (users, gender) =>
//   [...users].filter((element, index, arr) =>
//   element.gender === gender).reduce(((accum, element) =>
//     accum + element.balance), 0);
//  // Change code above this line

// getTotalBalanceByGender(users, "male");
// getTotalBalanceByGender(users, "female");
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
////////////////////////////////////////////////////////////////////////////////////////////
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
     
//     return this.pizzas.includes(pizzaName);
    
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       console.log( `Sorry, there is no pizza named «${pizzaName}»`);
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     console.log(`Order accepted, preparing «${pizzaName}» pizza`);
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// pizzaPalace.order("Smoked");
// pizzaPalace.order("Four meats");
// pizzaPalace.order("Big Mike");
// pizzaPalace.order("Viennese");
// повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"
//////////////////////////////////////////////////////////////////////////////////////////////////////
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//////////////////////////////////////////////////////////////////////////////////////
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// Виклик historyService.getOrdersLog()
// повертає рядок з переліком даних всіх замовлень з властивості orders
// Виклик historyService.getEmails() повертає масив всіх унікальних
// поштових адрес з властивості orders
// Виклик historyService.getOrdersByEmail("solomon@topmail.net")
// повертає[{ email: "solomon@topmail.net", dish: "Burger" },
//   { email: "solomon@topmail.net", dish: "Apple pie" }]
// Виклик historyService.getOrdersByEmail("artemis@coldmail.net")
// повертає[{ email: "artemis@coldmail.net", dish: "Pizza" }]
////////////////////////////////////////////////////////////////////////////////////////////////////
// const animal = {
//   lengs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog);
// console.log(animal.isPrototypeOf(dog));
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));
// console.log(dog.lengs);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));
// console.log(child.hasOwnProperty("name"));
// console.log(child.name);
// console.log(child.hasOwnProperty("age"));
// console.log(child.age);
// console.log(child.hasOwnProperty("surname"));
// console.log(child.surname);
// console.log(child.hasOwnProperty("heritage"));
// console.log(child.heritage);
// console.log(parent.isPrototypeOf(child));
// // Change code above this line
// ////////////////////////////////////////////////////////////////////////////////////
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// Change code above this line
//////////////////////////////////////////////////////////////////////////////////////////////
// class User {
  
// }
// const mango = new User();
// console.log(mango);

// const Poly = new User;
// console.log(Poly);
///////////////////////////////////////////////////////////////////////////////////////////////
// class User {
//   constructor(name, email,tel) {
//     this.name = name;
//     this.email = email;
//     this.tel = tel;

//   }

// }

// const mango = new User("Mango", "mango@mail.com",0674708721);
// console.log(mango);

// const poly = new User("Poly", "poly@mail.com",0674708721);
// console.log(poly);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   constructor(brand,model,prise) {
//     this.brand = brand;
//     this.model = model;
//     this.prise = prise;
//   }
//   // Change code above this line
// }
// const testOwn = new Car("Audi", "Q3", 36000);
// console.log("🚀 ~ file: script.js:4950 ~ testOwn", testOwn)
// const testTwo = new Car("BMW", "X5", 58900);
// console.log("🚀 ~ file: script.js:4952 ~ testTwo", testTwo)
// const testfry = new Car("Nissan","Murano", 31700);
// console.log("🚀 ~ file: script.js:4954 ~ testfry", testfry)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
//   getEmail() {
//     console.log(this.email);
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }
// /////////////////////////////////////////////////////////////////
// Change code above this line
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     // console.log(this.items);
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//     return this.items;
//   }
//   removeItem(itemToRemove) {
//     const leng = this.items.length;
//     console.log("🚀 ~ file: script.js:5003 ~ Storage ~ removeItem ~ leng", leng)
    
//     for (let i = 0; i < this.items.length; i= i+1) {
//       console.log(this.items[i]);
//       if (this.items[i].includes(itemToRemove))
//           this.items.splice(i,1);
//     }
//   //   }
//   //   this.items.cplice(Storage.indexOf(itemToRemove),1);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems());
// //["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems());
// //["Nanitoids", "Antigravitator", "Droid"]

////////////////////////////////////////////////////////////////////////////////////
// Change code above this line

// class StringBuilder{
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue(initialValue) {
//     return this.value;
//   }
//   padStart(initialValue) {
//     this.value = initialValue+this.value;
//   }
//   padEnd(initialValue) {
//     this.value = this.value + initialValue;
//   }
//   padBoth(initialValue) {
//     this.value = initialValue + this.value + initialValue;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
/////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   #brand;
//   constructor ({brand,model,price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
// class Storage {
//   // Change code below this line
// #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
/////////////////////////////////////////////////////////////////////////////////////////////////
// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// //////////////////////////////////////////////////////////////////////////////////////
// class User {
//   #email;
//   constructor({name,email}) {
//     this.name = name;
//     this.#email = email;
//   }
//   get email(){
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (newEmail==="") {
//       console.error("Помилка,пошта не може бути порожнім рядком!");
//       return;
//     }
//     this.#email = newEmail;

//     }

//   }

// const mango = new User({ name: "Mango", email:"mango@mail.com" })
// console.log(mango.name);
// console.log(mango.email);
// mango.email = "mango@superemail.com";
// console.log(mango.email);
// /////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }
// const auto = new Car({ brand:"Audy", model:"LS", price: 7000});
// console.log(auto.Brand);
// // auto.brand = "BMW";
// // console.log(auto.Brand);
// /////////////////////////////////////////////////////////////////////////////////////////
// class User {
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR:"editor",
//   }
//   #email;
//   #role;
//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }
//   get role() {
//     return this.role;
//   }
//   set role(newRole) {
//     this.role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// })
// console.log(mango.Roles);
// console.log(User.Roles);
// //////////////////////////////////////////////////////////////////////////
// class Car {
//   static MAX_PRICE = 50000; 
//   // Change code below this line
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE)
//     { 
//        this.#price = newPrice;
      
//     }
//    return(`Ваша ціна вище ${Car.MAX_PRICE} `);
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// ///////////////////////////////////////////////////////////////


