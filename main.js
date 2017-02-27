
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var numberValue = parseInt(answerPTagWithValue.textContent);
  numberValue = numberValue * 2
  answerPTagWithValue.textContent = numberValue
  // console.log(numberValue)

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var colorCircle = document.querySelector("#circle-bw")

  var circleStyles = window.getComputedStyle(colorCircle)

  if(circleStyles.backgroundColor === "rgb(0, 0, 0)"){
    colorCircle.style.background = "rgb(250, 250, 250)"
  } else {
    colorCircle.style.background = "rgb(0, 0, 0)"
  }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var growCircleEl = document.querySelector('.circle-red')
  var growCircleStyles = window.getComputedStyle(growCircleEl)
  var circleHeight = parseInt(growCircleStyles.height)
  var circleWidth = parseInt(growCircleStyles.width)
  console.log(circleHeight)
  if(circleWidth < 300){
    growCircleEl.style.height = (circleHeight * 2) + "px"
    growCircleEl.style.width = (circleWidth * 2) + "px"
    console.log(circleWidth)
  } else {
    growCircleEl.style.height = "40px"
    growCircleEl.style.width = "40px"
  }


})

document.querySelector("#remove button").addEventListener('click',function(){
//   // TASK #5
  // console.log("hi")

  var containerEl = document.querySelector("#user-list")
  var liEls = document.querySelectorAll("#user-list li")
  // console.log(liEls)

  forEach(liEls, function(li, index, theArray){
    if(li.className.indexOf('inactive') >= 0){
      containerEl.removeChild(li)
      // console.log("hi")
    }
  })

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

var squaresEl = document.querySelectorAll(".square")
// console.log(squaresEl)
for(var i = squaresEl.length -1; i >= 0; i--){
  var insertReverseSquares = document.querySelector('#reverse-squares .answer-box')
  // console.log(insertSquares)
  insertReverseSquares.appendChild(squaresEl[i]);
}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})

var forEach = function(arr, func){
 for(var i = 0 ; i < arr.length; i++){
  func(arr[i], i, arr)
 }
}
