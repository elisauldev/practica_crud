const createOrderButton = document.querySelector("#createOrder");
const modalNewOrder = document.querySelector("#modalCreateOrder");
const closeUpButton = document.querySelector("#closeButton");
const closeModalButton = document.querySelector("#cancelModalButton");
const submitOrderButton = document.querySelector("#addUserInfo");
const orderCreatedModal = document.querySelector("#modalOrderCreated");

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

submitOrderButton.addEventListener("click", (e) => {
  e.preventDefault();
  const nameUser = document.querySelector("#userName").value;
  const lastNameUser = document.querySelector("#userLastName").value;
  const emailUser = document.querySelector("#userEmail").value;
  const requestUser = document.querySelector("#userRequest").value;
  if (
    nameUser !== "" &&
    lastNameUser !== "" &&
    emailUser !== "" &&
    requestUser !== ""
  ) {
    submitOrder(nameUser, lastNameUser, emailUser, requestUser);
    closeModalCard();
    storageData()
    document.querySelector("#userName").value = "";
    document.querySelector("#userLastName").value = "";
    document.querySelector("#userEmail").value = "";
    document.querySelector("#userRequest").value = "";
    
    orderCreatedAlert()
  } else {
    alert("debes completar todos los campos");
  }
});

function submitOrder(name, lastName, email, request,) {
  userData.push({
    name: name,
    lastName: lastName,
    email: email,
    request: request,
    newOrder: createUid(),
  });
}
function storageData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}
// funcion para crear modal de orden creada

function orderCreatedAlert() {
  orderCreatedModal.style.display = "flex";
  orderCreatedModal.innerHTML =
   `<div class ="fixed inset-0 z-50 flex justify-center items-center bg-black/40 p-4">
        <div class = "bg-blue-400/90 p-4 rounded-lg text-center">
        <span id= "closeOderCreated" class="flex justify-end"><img class="w-4" src="./assets/cancelar.png" alt=""></span>
            <p>Ha sido creada la orden N°</p>
     </div>
        </div>`;
        document.getElementById("closeOderCreated").addEventListener("click", () => {
          orderCreatedModal.style.display = "none";
        })
}

// funcion para crear ID unico 
function createUid() {

return Math.random().toString(30).slice(2)}