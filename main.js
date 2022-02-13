const urlPARTICIPANTS = "https://mock-api.driven.com.br/api/v4/uol/participants";
const urlSTATUS = "https://mock-api.driven.com.br/api/v4/uol/participants ";
const urlMESSAGES ="https://mock-api.driven.com.br/api/v4/uol/messages";
let userName = document.querySelector('.inputName')
let userObj
let statusPromise
let participantsPromise
let messagePromise
let apiMessagesObj
let responseMessage = axios.get(urlMESSAGES)
let displayedMessages = document.querySelector('.messages')
function login() {
  userObj = {
    name: userName.value
  }
  participantsPromise = axios.post(urlPARTICIPANTS, userObj)
  participantsPromise.then(logged)
  participantsPromise.catch(loginError)
}
function logged(){
  document.querySelector('.login_screen').classList.add('hidden')
  document.querySelector('footer').classList.remove('hidden')
  setInterval(loadMessages, 3000)
  setInterval(stayLogged, 3000)
  responseMessage.then(responseMessageReturn)
}
function loginError(loginErrorData){
  console.log(loginErrorData)
  alert(`Erro no login! Digite outro nome.`)
}
function stayLogged(){
  userObj = {
    name: userName.value
  }
  statusPromise = axios.post(urlSTATUS, userObj)
  statusPromise.then()
}
function loadMessages(){
  displayedMessages.innerHTML = ''
  responseMessage = axios.get(urlMESSAGES)
  responseMessage.then(responseMessageReturn)
}
function addMessage() {
  let newUserMessage = document.querySelector('.chat').value
  userObj = {
    from: userName.value,
    to: "Todos",
    text: newUserMessage,
    type: "message"
  }
  statusPromise = axios.post(urlMESSAGES, userObj)
  statusPromise.then()
}
function newMessage(type, time, from, to, msg) {
  displayedMessages.innerHTML = displayedMessages.innerHTML + `<div class="singleMessage ${type}"><span><span class="timeStyle">(${time})</span> <span class="strong">${from}</span> para <span class="strong">${to}</span>: ${msg}</span></div>`;
}
function responseMessageReturn(apiMessages){
  apiMessagesObj = apiMessages.data
  console.log(apiMessagesObj)
  displayAllMessages()
}
function displayAllMessages(){
  for(let i = 0; i < apiMessagesObj.length; i++){
    newMessage(apiMessagesObj[i].type, apiMessagesObj[i].time, apiMessagesObj[i].from, apiMessagesObj[i].to, apiMessagesObj[i].text)
  }
  const messagesArr = document.querySelectorAll('.singleMessage');
  messagesArr[messagesArr.length-1].scrollIntoView();
}
function openAside() {
  document.querySelector('aside').setAttribute('style', 'right: 0px')
  document.querySelector('.shadow').classList.remove('hidden')
}
function removeShadow(){
  document.querySelector('aside').setAttribute('style', 'right: -258px')
  document.querySelector('.shadow').classList.add('hidden')
}