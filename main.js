/**
 * 1.랜덤번호 지정 
 * 2. 유저가 번호를 입력한다 . 그리고 go라는 버튼을 누름 
 * 3.만약 유저가 랜덤 번호를 맞추면 "맞췄습니다!"
 * 4.랜덤 번호 < 유저번호 "Down!
 * 5.랜덤 번호 > 유저번호 "Up!"
 * 6.버튼을 누르면 게임이 리셋된다 
 * 7.5번의 기회를 다 쓰면 게임이 끝남 (더 이상 추측 불가 , 버튼이 Disabled)
 * 8.유저가 1~100 범위 밖에 숫자를 입력하면 알려준다, 기회를 깎지 않는다 . 
 * 9.유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깎지 않는다. 
 */



// 0.랜덤번호 지정 
// 1.유저가 번호를 입력

// 2버튼 누름 
// 2-1.버튼에 클릭이벤트 만들어주기 
// 2-2.함수를 매개변수로 넘겨주기 


// 3.유저가 입력한 번호 < 랜덤번호 
// 4."UP!!"
// 5.유저가 입력한 번호 > 랜덤번호
// 6."DOWN!!"

// 7리셋버튼 만들어주기 (버튼이벤트/누르면 리셋되는함수- 입력했던 숫자가 사라져야하고, 다시 정답이 생겨야함) 

// 6play함수 실행시 5번의 chance가 하나씩 깎이게됨 
// 7. chances가 1보다 작아지면 버튼이 비 활성화 됨 
// 8.history 만들어 주기 (같은 숫자를 입력했던 내역 있는지 확인 => 있으면 이미 입력한 값입니다  =>기회가 깎이면 안됨 )


let randomNumber = 0 ;
let userNumber = document.getElementById("number-area");
let buttonGo = document.getElementById("btn-go");
let resultArea = document.getElementById("result-area");

let buttonReset = document.getElementById("btn-reset");
let chanceArea = document.getElementById("chance-area");


let chances = 5; //기존 찬스는 5번 
let gameOver = false;

let history = [];

buttonGo.addEventListener("click",play)
buttonReset.addEventListener("click",reset)
userNumber.addEventListener("focus",function(){
  userNumber.value="";})


function randomGame (){
  randomNumber = Math.floor(Math.random()*100)+1;
  console.log("정답은",randomNumber)
}
randomGame ()

function play(){
  userValue = userNumber.value;

  if(userValue < 1 || userValue >100){
    resultArea.textContent = "1-100사이의 숫자를 입력해주세요"
    return;
  }
 if(history.includes(userValue)){
  resultArea.textContent = "이미 입력한 숫자입니다";
  return;
}




  chances--;//1씩 깎임
  chanceArea.textContent=`남은기회:${chances}번`;
  // console.log("기회",chances);
  

  if(userValue < randomNumber){

    resultArea.textContent = "UP"
  } else if(userValue > randomNumber){
    resultArea.textContent = "DOWN"
  } else{
    resultArea.textContent = "정답"}
  
  history.push(userValue);
console.log(history)

if(chances < 1){
  gameOver = true;
}

if ( gameOver == true){
  buttonGo.disabled = true;
}
}

function reset(){
  userNumber.value = "";
  randomGame()
}











// (3트)
// let randomNumber = 0 

// let resultArea = document.getElementById("result-area") ;
// let userNumber = document.getElementById("number-area") ;
// let buttonGo = document.getElementById("btn-go") ;
// //2.유저가 입력한 값 불러오기 
// buttonGo.addEventListener("click",play)

// function randomGame(){
//   randomNumber = Math.floor(Math.random()*100)+1;
//   console.log("정답은",randomNumber)
// }

// randomGame() //1.함수호ㅜㅊ출 

// function play(){
//   let userValue = userNumber.value
//   console.log(userValue)
//   if(userValue<randomNumber){
//     console.log("up")
//   }else if(userValue>randomNumber){
//     console.log("down")
//   }else{
//     console.log("정답입니다")
//   }
// }

// play()

//(2트)
// let randomNumber = 0 ; //1.랜덤번호 지정

// let userNumber = document.getElementById("number-area") //2.유저가 입력했을 때 아이디값 변수지정 
// let buttonGo = document.getElementById("btn-go") //4.버튼에 변수할당
// //5.클릭이벤트 넣어줘야함 ㅇㄷ에? ㅋ 
// buttonGo.addEventListener("click",play)
// function countNumber(){ //3. 랜덤번호 나올 함수 지정 
//   randomNumber = Math.floor(Math.random()*100)+1;
//   console.log("정답은",randomNumber);
// }

// function play(){
//   let userValue = userNumber.value;
//   console.log(userValue)
//   if(userValue<randomNumber){
//     console.log("up")
//   } else if(userValue>randomNumber){
//     console.log("down")
//   } else {
//     console.log("정답")
//   }
// }

// countNumber() //4. 함수 호출 . 자꾸 빼먹음 ㅠ 
// play()

// (1번째 연습)
// let randomNumber = 0; //0.랜덤번호 지정 
// let buttonGo = document.getElementById("btn-go")
// let enterNumber =document.getElementById("number-area")
// buttonGo.addEventListener("click",play)

// let resultArea = document.getElementById("result-area")


// function randomGame(){
//   randomNumber = Math.floor(Math.random()*100)+1;
//   console.log("정답",randomNumber)
// }

// function play(){//인풋에 입력한 값을 불러오는 함수  .
//   let userValue = enterNumber.value;
//   console.log(userValue)
  
//   if(userValue>randomNumber){
//     resultArea.textContent = "down!"
//   } else if(userValue<randomNumber){
//     resultArea.textContent= "up!"
//   }else {
//     resultArea.textContent= "정답입니다!"
//   }
// }



// randomGame()
// play()

/**-----------------------------------------(정답) */

// let computerNum = 0;
// let playButton = document.getElementById("btn-play") 
// let userInput = document.getElementById("user-input")
// let resultArea = document.getElementById("result-area")//결과값 가져올 div 가져와줌 
// playButton.addEventListener("click",play) // play()라는 함수를 매개변수로 넘겨줌 

// function pickRandomNum(){
//   computerNum = Math.floor( Math.random()*100)+1;
//   console.log("정답",computerNum)
// }

// function play(){//유저가 입력한 값을 알아야 비교할 수 있음 //input 값 가져오기 
//  let userValue =  userInput.value;
//  console.log(userValue);
//  //4.랜덤 번호 < 유저번호 "Down!,  5.랜덤 번호 > 유저번호 "Up!"
//  if(userValue < computerNum){
//   resultArea.textContent = "UP!";
//  } else if(userValue > computerNum){
//   resultArea.textContent = "DOWN!";
//  } else {
//   resultArea.textContent = "맞췄습니다!";D
//  }
 
// }
// pickRandomNum()

