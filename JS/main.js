const createOrderButton = document.querySelector('#createOrder')
const modalNewOrder = document.querySelector('#modalCreateOrder')
const closeUpButton = document.querySelector('#closeButton')
const closeModalButton = document.querySelector('#cancelModalButton')
const submitOrderButton = document.querySelector('#addUserInfo')

modalNewOrder.style.display = 'none'

createOrderButton.addEventListener('click', (e) => {
    e.preventDefault
    modalNewOrder.style.display = 'flex'
    modalNewOrder.style.justifyContent = 'center'
    
})


 
closeModalButton.addEventListener('click', (e) => {
    e.preventDefault()
    modalNewOrder.style.display = 'none'
})
closeUpButton.addEventListener('click', (e) => {
    e.preventDefault()
    modalNewOrder.style.display = 'none'
})

submitOrderButton.addEventListener('click', (e) => {
    e.preventDefault()
    const nameUser = document.querySelector('#userName').value
    const lastNameUser = document.querySelector('#userLastName').value
    const emailUser = document.querySelector('#userEmail').value
    const requestUser = document.querySelector('#userRequest').value
    if(nameUser !== '' && lastNameUser !== '' && emailUser !== '' && requestUser !== '') {
    submitOrder( nameUser, lastNameUser, emailUser, requestUser)
    storageData()
        modalNewOrder.style.display = 'none'
        document.querySelector('#userName').value = ''
        document.querySelector('#userLastName').value = ''
        document.querySelector('#userEmail').value = ''
        document.querySelector('#userRequest').value = ''
    } else {
        alert("debes completar todos los campos")
    }
})
        
   
function submitOrder(name, lastName, email, request) {
 userData.push({
    name: name,
    lastName: lastName,
    email: email,
    request: request})
    
}
function storageData(){
    localStorage.setItem('userData', JSON.stringify(userData))
}
 
    // Here you would typically send the order to your server or process it further
