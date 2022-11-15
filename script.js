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

