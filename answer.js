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


//(4트)
let randomNumber = 0;

let resultArea = document.getElementById("result-area");
let userNumber = document.getElementById("number-area");
let buttonGo = document.getElementById("btn-go");

let buttonReset = document.getElementById("btn-reset");
let chances = 5 ; //클릭할 때 마다 기회가 줄어야함 
let gameOver = false;
let chanceArea = document.getElementById("chance-area");

let history = [];


buttonGo.addEventListener("click", play);;
buttonReset.addEventListener("click",reset);
userNumber.addEventListener("focus",function(){
  userNumber.value="";//잠깐 쓰고 끝날 함수일때는 선언을 안해도됨 . 선언하면 메모리 찬다 
});

function randomGame (){
  randomNumber = Math.floor(Math.random()*100)+1;
  console.log("정답은",randomNumber);
}

randomGame ();

function play(){
  let userValue = userNumber.value;


  if(userValue<1 || userValue>100){
    resultArea.textContent = "1과 100 사이의 숫자로 입력해주세요";
    return;
  }

  if(history.includes(userValue)){
    resultArea.textContent = "이미 입력한 숫자입니다";
    return;
  }

  // console.log("유저가 고른 값",userValue)
  chances--; //chance가 -1씩 감소한다 
  chanceArea.textContent=`남은찬스:${chances}번`;
  console.log("chance",chances);

  if(userValue > randomNumber){
    resultArea.textContent = "다운";
    // console.log("down")
  } else if(userValue < randomNumber){
    resultArea.textContent = "업";
    // console.log("up")
  } else {
    resultArea.textContent = "정답";
    // console.log("정답")
    gameOver = true;
  }

history.push(userValue);
console.log(history)

  if(chances < 1 ){
    gameOver = true;
  }

  if (gameOver == true){
    buttonGo.disabled = true;
  }
}



function reset(){
  //1.user input창이 깨끗하게 정리되고 
  //2.새로운 번호가 생성되어야 한다 . 
  userNumber.value = "";//1.empty
  randomGame ();//2.

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

