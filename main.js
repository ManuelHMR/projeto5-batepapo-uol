const urlPARTICIPANTS = "https://mock-api.driven.com.br/api/v4/uol/participants";
const urlSTATUS = "https://mock-api.driven.com.br/api/v4/uol/participants ";
const urlMESSAGES ="https://mock-api.driven.com.br/api/v4/uol/messages";
let userName = document.querySelector('.inputName')
let userObj
let participantsPromise
function login() {
  userObj = {
    name: userName.value
  }
  participantsPromise = axios.post(urlPARTICIPANTS, userObj)
  participantsPromise.then(loged)
  participantsPromise.catch(loginError)
}
function loged(){
  document.querySelector('.login_screen').classList.add('hidden')
}
function loginError(){
  alert(`Digite o seu nome!`)
}
function addMessage() {
  let newUserMessage = document.querySelector('.chat').value
  newMessage(newUserMessage)
}
function newMessage(type, time, from, to, msg) {
  let displayedMessages = document.querySelector('.messages')
  displayedMessages.innerHTML = displayedMessages.innerHTML + `<div class="singleMessage ${type}"><span><span class="timeStyle">(${time})</span> <span class="strong">${from}</span> para <span class="strong">${to}</span>: ${msg}</span></div>`;
}

let apiMessagesObj
let responseMessage = axios.get(urlMESSAGES)
responseMessage.then(responseMessageReturn)
function responseMessageReturn(apiMessages){
  apiMessagesObj = apiMessages.data
  console.log(apiMessagesObj)
  displayAllMessages()
}

function displayAllMessages(){
  for(let i = 0; i < apiMessagesObj.length; i++){
    newMessage(apiMessagesObj[i].type, apiMessagesObj[i].time, apiMessagesObj[i].from, apiMessagesObj[i].to, apiMessagesObj[i].text)
  }
}


function openAside() {
  document.querySelector('aside').setAttribute('style', 'right: 0px')
  document.querySelector('.shadow').classList.remove('hidden')
}
function removeShadow(){
  document.querySelector('aside').setAttribute('style', 'right: -258px')
  document.querySelector('.shadow').classList.add('hidden')
}