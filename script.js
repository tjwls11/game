const startButton = document.getElementById('startButton')
const instructions = document.getElementById('instructions')
const result = document.getElementById('result')

let startTime, endTime
let timeoutId

startButton.addEventListener('click', startGame)

function startGame() {
  instructions.textContent = "곧 '클릭하세요!' 메시지가 나타납니다..."
  result.textContent = ''
  startButton.disabled = true

  const randomTime = Math.floor(Math.random() * 3000) + 2000
  timeoutId = setTimeout(showClickMessage, randomTime)
}

function showClickMessage() {
  instructions.textContent = "'클릭하세요!'"
  startTime = new Date()
  document.body.addEventListener('click', recordReactionTime)
}

function recordReactionTime() {
  endTime = new Date()
  const reactionTime = (endTime - startTime) / 1000

  result.textContent = `당신의 반응 속도는 ${reactionTime}초입니다.`
  instructions.textContent = "다시 시작하려면 '시작하기' 버튼을 누르세요!"

  document.body.removeEventListener('click', recordReactionTime)
  startButton.disabled = false
}
