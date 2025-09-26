//Se inicia la conexion con el DOM
const createOrderButton = document.querySelector("#createOrder");
const modalNewOrder = document.querySelector("#modalCreateOrder");
const closeUpButton = document.querySelector("#closeButton");
const closeModalButton = document.querySelector("#cancelModalButton");
const submitOrderButton = document.querySelector("#addUserInfo");
const orderCreatedModal = document.querySelector("#modalOrderCreated");
const orderTable = document.querySelector("#userOrders");
const searchOrdersButton = document.querySelector("#searchOrders");
const searchDataButton = document.querySelector("#searchId");
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
            <p>Ha sido creada la orden N°: <b>${lastOrder.newOrder}</b></p>
            <button id="closeOderCreated" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
     </div>
        </div>`;
        document.getElementById("closeOderCreated").addEventListener("click", () => {
          showData()
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
  let rows = ""
  userData.slice().reverse().forEach( lastOrder=> {
    rows += 
`<tr class="border border-gray-300">
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.newOrder}</td>
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.name}</td>
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.service}</td>
  <td class="border border-gray-300 ... bg-blue-100 p-4">${lastOrder.request}</td>
  <td class="border border-gray-300 ... bg-blue-100"></td>
  <td class="border border-gray-300 ... bg-blue-100"></td>
  </tr>`
 
  });
  orderTable.innerHTML = rows
}

//modal para buscar ordenes
searchOrdersButton.addEventListener("click", (e) => {
  e.preventDefault()
  const searchInput = document.querySelector("#modalSearchOrder");
  searchInput.style.display = "flex";})
document.querySelector("#closeSearch").addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = document.querySelector("#modalSearchOrder");
  searchInput.style.display = "none";
})

// funcion para buscar ordenes por ID
searchDataButton.addEventListener("click", (e) => {
  e.preventDefault();
if(document.querySelector("#search").value === "") {
    alert("Debes ingresar un ID");
    return
  } 
  
    let userData = JSON.parse(localStorage.getItem('userData')) || []
    let found = false
    userData.forEach((order) => {
      if (order.newOrder === document.querySelector("#search").value) {
        orderTable.innerHTML = `
          <tr class="border border-gray-300">
            <td class="border border-gray-300 ... p-4" style = "background:#c0c8ca">${order.newOrder}</td>
            <td class="border border-gray-300 ... p-4" style = "background:#c0c8ca">${order.name}</td>
            <td class="border border-gray-300 ... p-4" style = "background:#c0c8ca">${order.service}</td>
            <td class="border border-gray-300 ... p-4" style = "background:#c0c8ca">${order.request}</td>
            <td class="border border-gray-300 ..."></td>
            <td class="border border-gray-300 ..."></td>
          </tr>`;
          document.querySelector("#modalSearchOrder").style.display = "none";
          found = true
      }
      
     

    })
if(!found) {
    alert("Orden no encontrada");
    document.querySelector("#search").value = "";
  }
})
//funcion para actualizar ordenes
document.querySelector("#updateOrders").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#updateOrder").style.display = "flex";
})
document.querySelector("#closeUpdateModal").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#updateOrder").style.display = "none";
}); 

//funcion para buscar ordenes por ID en el modal de actualizacion
document.querySelector("#searchUserInfo").addEventListener("click", (e) => {
  e.preventDefault();
  if(document.querySelector("#searchOrder2").value === "" || document.querySelector("#searchOrder2").value === null) {
    alert("Debes ingresar un ID");
    return
  }
  else if(document.querySelector("#searchOrder2").value !== "") {
    let userData = JSON.parse(localStorage.getItem('userData')) || []
    userData.forEach((updatedOrder) => {
  if(updatedOrder.newOrder === document.querySelector("#searchOrder2").value) {
    document.querySelector("#modifyUserInfo").style.display = "flex";
    document.querySelector("#newName").value = updatedOrder.name;
    document.querySelector("#newLastName").value = updatedOrder.lastName;
    document.querySelector("#newEmail").value = updatedOrder.email;
    document.querySelector("#newTitle").value = updatedOrder.service;
    document.querySelector("#newService").value = updatedOrder.request;
    document.querySelector("#searchOrder2").setAttribute("disabled", "true");
    document.querySelector("#searchOrder2").style.backgroundColor = "#c0c8ca";
    document.querySelector("#searchOrder2").style.color = "#000"
}
 
  }
)}
})
function storageData() {
userData.forEach((order) => {
  if(order.newOrder === document.querySelector("#searchOrder2").value) {
    order.name = document.querySelector("#newName").value;
    order.lastName = document.querySelector("#newLastName").value;
    order.email = document.querySelector("#newEmail").value;
    order.service = document.querySelector("#newTitle").value;
    order.request = document.querySelector("#newService").value;
    
  }
})
localStorage.setItem("userData", JSON.stringify(userData));
}
function modifyData() {
  document.querySelector("#modifyUserInfo").addEventListener("click", (e) => {
    e.preventDefault();
    storageData()
    showData()
   document.querySelector("#updateOrder").style.display = "none";
   document.querySelector("#modifyUserInfo").style.display = "none";
   document.querySelector("#updateOrder").style.display = "none";
   document.querySelector("#searchOrder2").removeAttribute("disabled");
   document.querySelector("#searchOrder2").style.backgroundColor = "#fff";
   document.querySelector("#searchOrder2").style.color = "#000";
   document.querySelector("#searchOrder2").value = "";
   alert("Orden actualizada correctamente");
}
)}
modifyData()
showData()
