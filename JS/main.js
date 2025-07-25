//Se inicia la conexion con el DOM
const createOrderButton = document.querySelector("#createOrder");
const modalNewOrder = document.querySelector("#modalCreateOrder");
const closeUpButton = document.querySelector("#closeButton");
const closeModalButton = document.querySelector("#cancelModalButton");
const submitOrderButton = document.querySelector("#addUserInfo");
const orderCreatedModal = document.querySelector("#modalOrderCreated");
const orderTable = document.querySelector("#userOrders");

modalNewOrder.style.display = "none";

createOrderButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalNewOrder.style.display = "flex";
  modalNewOrder.style.justifyContent = "center";
});

function closeModalCard() {
  modalNewOrder.style.display = "none";
}

closeModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeModalCard();
});
closeUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  closeModalCard();
});
//se crea funcion para almacenar los datos del usuario
submitOrderButton.addEventListener("click", (e) => {
  e.preventDefault();
  const nameUser = document.querySelector("#userName").value;
  const lastNameUser = document.querySelector("#userLastName").value;
  const emailUser = document.querySelector("#userEmail").value;
  const requestUser = document.querySelector("#userRequest").value;
  const serviceLabel = document.querySelector("#serviceTitle").value;
  if (
    nameUser !== "" &&
    lastNameUser !== "" &&
    emailUser !== "" &&
    requestUser !== "" &&
    serviceLabel !== ""
  )

  {
    submitOrder(nameUser, lastNameUser, emailUser, requestUser, serviceLabel);
    closeModalCard();
    storageData()
    document.querySelector("#userName").value = "";
    document.querySelector("#userLastName").value = "";
    document.querySelector("#userEmail").value = "";
    document.querySelector("#userRequest").value = "";
    document.querySelector("#serviceTitle").value = "";
    //se llama a la funcion para crear el modal de orden creada

    orderCreatedAlert()
  }
  else if (
    nameUser === "" || lastNameUser === "" || emailUser === "" || requestUser === ""
  ) {
    alert("Debes completar todos los campos");
  }

  else {
    alert("Debes completar todos los campos");
  }
});

function submitOrder(name, lastName, email, request, service) {
  userData.push({
    name: name,
    lastName: lastName,
    email: email,
    request: request,
    newOrder: createUid(),
    service: service,
  });
}
function storageData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}

// funcion para crear modal de orden creada

function orderCreatedAlert() {
  const lastOrder = userData[userData.length - 1]
  orderCreatedModal.style.display = "flex";
  orderCreatedModal.innerHTML =
   `<div class ="fixed inset-0 z-50 flex justify-center items-center bg-black/40 p-4">
        <div class = "bg-blue-400/90 p-4 rounded-lg text-center">
        <span id= "closeOderCreated" class="flex justify-end"><img class="w-4" src="./assets/cancelar.png" alt=""></span>
            <p>Ha sido creada la orden N°: <b>${lastOrder.newOrder}</b></p>
     </div>
        </div>`;
        document.getElementById("closeOderCreated").addEventListener("click", () => {
          orderCreatedModal.style.display = "none";
        })
}

// funcion para crear ID unico 
function createUid() {

return Math.random().toString(30).slice(2)}

//funcion para traer datos del localStorage
function showData(){
  let userData = JSON.parse(localStorage.getItem('userData')) || []
  if(userData.length === 0) return
  const orderTable = document.querySelector("#userOrders")
  const lastOrder= userData[userData.length - 1]

orderTable.innerHTML = 
`<tr class="border border-gray-300">
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.newOrder}</td>
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.service}</td>
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.request}</td>
  <td class="border border-gray-300 ... bg-blue-100"></td>
  <td class="border border-gray-300 ... bg-blue-100"></td>
  </tr>`;
  const orderStatus = document.querySelector("#orderStatus");
  orderStatus.style.display = "table-cell";

}
submitOrderButton.addEventListener("click", (e) => {
  e.preventDefault()
  showData()
})
