

const slugify = (string) => { 
    // const normaliseTitle = string.toLowerCase();
    // const words = normaliseTitle.split(' ');
    // const slug = words.join('-');
    return string.toLowerCase().split(' ').join('-');
    

}

// console.log(slugify('khdfhk fdhfdkh fdh fdkh' ));
//////////////////////////////////////////////////////////////////
// const fn = function() {
//     console.log(arguments);
//     const args = Array.from(arguments);
//     console.log(args);

    
// }
// fn(1, 2, 3);
// fn(1,2,3,4,5);

const wer = function () { 
    const werArr = Array(arguments);
    console.log(werArr);
}

// wer('a', 'b', 'c');
//////////////////////////////////////////////////////////////////////
const tyu = function (a,b,c,...args) { 
    console.log(`${ a } ${ b } ${ c } ${ args }`);
    console.log(args.sort());
    let result = 0;
    for (const elem of args) {
        
          result += elem;
        
    }

    return result;
}

// console.log('Сумма = ', tyu(1, 2, 3, 4, 5, 6, 7, 5));
//////////////////////////////////////////////////////////////////////////

const filterNumbers = function (masyv,...args) {
    let newMasyv = [];
    for (const arg of args) {
        if (masyv.includes(arg)) { 
            newMasyv.push(arg)
        }

        }
    return newMasyv;
};

// console.log('Результат роботи функції =',filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log('Результат роботи функції =',filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log('Результат роботи функції =',filterNumbers([100,200,300,400,500], 7,1,200,64));


//////////////////////////////////////////////////////////////////////////////
const numberss = [5, 10, 15, 20, 25];

 numberss.forEach((number,indexNumber,originalMasyv) =>{
    //  console.log(originalMasyv);
    //  console.log('indexNumber', indexNumber, 'number ', number, 'of', originalMasyv);
     
     
 })
const dubleNuberss=numberss.map(number=> {
    // console.log('number', number);
    return number*2;
})
// console.log('numberss:',numberss);
// console.log('dubleNuberss: ',dubleNuberss);

////////////////////////////////////////////////////////////////
const ArrSiteNav = document.querySelector('.site-nav');
// console.log(ArrSiteNav);
const childrenArrSiteNav = ArrSiteNav.children;
// console.log(childrenArrSiteNav);

function fn(arrs,result) {
  for (const iterator of arrs) {
    result=iterator.children[0].textContent;
  console.log(result);  
  }  
    
}

// fn(childrenArrSiteNav)
///////////////////////////////////////////////////////////////////////////////


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310 , points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470 , points: 92, online: true },
    { id: 'player-3', name: 'Riwi', timePlayed: 230 , points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150 , points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80 , points: 48, online: true },
   
];
players.map(el => el.name)

// console.log(playerNames);

const playerId = players.map(el => el.id);
// console.log(playerId);

const playerPoint = players.map(el => el.points)
// console.log('playerPoint до змін',playerPoint);

const upadetPlayers = players.map(el => (el.points * 1.1).toFixed(0));
// console.log('playerPoint після змін',upadetPlayers);


const res = players.map(({ name, online })=> ({ 
    name,
    online,

}))
// console.log(res);
// console.table(players)
const playerIdToUdate = 'player-3';
const updatesPlayers = players.map(player => {
    // console.log('player.id =',player.id);
    
    if (player.id===playerIdToUdate) {
        // console.log('Ми знайшли, те що потрібно оновити');  
        // return 'Це буде оновлений об"єкт ' 
        return player.timePlayed * 100;
    }
    // return 'Цей об"єкт  залишиться без змін'
    return player.timePlayed;
   
 })

// console.table(updatesPlayers);
const testFo = players.map(elem => {
  
    if (elem.name.length<=4) {
        return elem.name
      
    }
    return '000';

 })

// console.log(testFo);
//////////////////////////////////////////////////////////////////////////////
const obj = {
    a: 5,
    b:{ 
        c: 10,
        x:20,    
    }
    
}
// console.log(obj);
const copy = {
    ...obj
}

// console.log(copy);
// console.log(obj.b===copy.b);

const playersTwo = [
    { id: 'player-1', name: 'Mango', timePlayed: 310 , points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470 , points: 92, online: true },
    { id: 'player-3', name: 'Riwi', timePlayed: 230 , points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150 , points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80 , points: 48, online: true },
   
];

const numbers = [5, 10, 15, 20, 25];
const newNumbers = numbers.filter((number) => {
    return number > 10
})
// console.log('numbers',numbers);//numbers (5) [5, 10, 15, 20, 25]
// console.log('newnumbers',newNumbers);  //newnumbers (3) [15, 20, 25]

const onlainePlayers = playersTwo.filter((player)=> !player.online===true)

// console.table(onlainePlayers);

const hardcorePlayers = players.filter((elem) => elem.timePlayed > 250);
// console.table(hardcorePlayers);

const playersThree = [
    { id: 'player-1', name: 'Mango', timePlayed: 310 , points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470 , points: 92, online: true },
    { id: 'player-3', name: 'Riwi', timePlayed: 230 , points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150 , points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80 , points: 48, online: true },
   
];

const PlayerIdToFind = 'player-3';

const playerWithId = playersThree.find((elem) => elem.id===PlayerIdToFind);
// console.log(playerWithId);


const numbersThree = [5, 10, 15, 20, 25];
const numberThree = numbersThree.find(elem => elem > 15);
// console.log(numberThree);//20

const playerNameToFind = 'Mango';
const playerWithName = players.find(elem => elem.name === playerNameToFind);
// console.log(`name ${playerWithName.name} points ${playerWithName.points}`);

const isAllOnline=players.every(elem=>elem.online)
// console.log(isAllOnline);
const supers = players.every(elem => elem.timePlayed > 50);
// console.log(supers);//true
//////////////////////////////////////////////////////////

// const mouseMoveTest = document.querySelector('.js-coordsTest') 
// let mouseMoveCbInvocationCounterTest = 0;
// window.addEventListener('mousemove',onMouseMoveTest);

// function onMouseMoveTest(event) {
//     mouseMoveCbInvocationCounterTest += 1;   
//     mouseMoveTest.textContent = `total: 
//     ${mouseMoveCbInvocationCounterTest}`; 
// }

/////////////////////////////////////////////////////////

const coordsOutputRef = document.querySelector('.js-coords')
// console.log(coordsOutputRef);

let mouseMoveCbInvocationCounter = 0;
function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;
    coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove : ${mouseMoveCbInvocationCounter},
    X:${event.clientX},
    Y:${event.clientY}
    `;
}
// window.addEventListener('mousemove', onMouseMove);

// const throttledonMouseMove=_.throttle(onMouseMove,500)
// window.addEventListener('mousemove', _.throttle(onMouseMove,500));

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  
    inputCbInvocationCounter += 1;
    
    outputRef.textContent = 
    `Кількість викликів onInputChange : ${inputCbInvocationCounter},
    // Значення : ${event}`;
    
  
    
}


const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.is-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', handleTargetBtnClick);
function handleTargetBtnClick() {
 console.log('targetBtn')
}


// addListenerBtn.addEventListener('click',handleaddListenerBtnClick);
function handleAddListenerBtnClick(event) {
    console.log(event);
    console.log('Клік по цільовій кнопці');
}

addListenerBtn.addEventListener('click', (event) => { 
    console.log(event.currentTarget);
    console.log('Вішаю подію на цільову кнопку');
    targetBtn.addEventListener('click', handleAddListenerBtnClick)
})

removeListenerBtn.addEventListener('click', (event) => { 
   console.log(event.currentTarget);
    console.log('Знімаємо подію з цільової кнопки');
    targetBtn.removeEventListener('click',handleAddListenerBtnClick)
})

//////////////////////////////////////////////////////////////////////////
const form = document.querySelector('.js-register-form');

form.addEventListener('submit',onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault();
    // console.dir(event.currentTarget.elements.email.value);
    // console.dir(event.currentTarget.elements.password.value);
    // console.dir(event.currentTarget.elements.subscription.value);
    // console.log('Це сабміт форми');

//     const formElements = event.currentTarget.elements;
//     console.log(formElements);
//     const email = formElements.email.value;
//     const password = formElements.password.value;
//     const subscription = formElements.subscription.value;

//     // console.log('email',email);
//     // console.log('password', password);
    
//     const formData = {
//         email,
//         password,
//         subscription,

//     };

// console.log(formData);
    
    const formDataTwo = new FormData(event.currentTarget);
    console.log(formDataTwo);
    formDataTwo.forEach((value, name) => {
        console.log('onFormSabmit -> name', name);
        console.log('onFormSubmit -> value',value);
     })
}



 