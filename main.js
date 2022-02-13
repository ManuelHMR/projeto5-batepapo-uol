let user = {

}
let userName = document.querySelector('.inputName')

function login() {
  if (userName.value.length !== 0) {
    document.querySelector('.login_screen').classList.add('hidden')
  } else {
    alert(`Digite o seu nome!`)
  }
}
function addMessage() {
  let newUserMessage = document.querySelector('.chat').value
  newMessage(newUserMessage)
}
function newMessage(msg) {
  let displayedMessages = document.querySelector('.messages')
  displayedMessages.innerHTML = displayedMessages.innerHTML + `<div class="singleMessage"><span>${userName.value} </span> para <span>TODOS </span>: ${msg}</div>`;
}
function openAside() {
  document.querySelector('aside').setAttribute('style', 'right: 0px')
  document.querySelector('.shadow').classList.remove('hidden')
}
function removeShadow(){
  document.querySelector('aside').setAttribute('style', 'right: -258px')
  document.querySelector('.shadow').classList.add('hidden')
}


let apiMessagesObj
let responseMessage = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages")
responseMessage.then(responseMessageReturn)
function responseMessageReturn(apiMessages){
  apiMessagesObj = apiMessages.data
  displayAllMessages()
}

function displayAllMessages(){
  for(let i = 0; i < apiMessagesObj.length; i++){
    newMessage(apiMessagesObj[i].text)
  }
  
}
