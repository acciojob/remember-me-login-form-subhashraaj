const loginForm = document.querySelector("#loginForm");
const username = document.querySelector("#username").value;
const password = document.querySelector("#password").value;
const checkbox = document.querySelector("#checkbox");
const submit = document.querySelector("#submit");
let userExist = false;

window.addEventListener("load", () => {
    loginForm.style.display = "flex";
});
function checkBoxFunction() {
    if (checkbox.checked == true) {
        return true
    }
};
submit.addEventListener("click", (e) => {
    e.preventDefault()
    //console.log(checkBoxFunction())
    alert("Logged in as.")
    if (checkBoxFunction()) {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        userExist = true;
    };
});
console.log(userExist)
if(userExist === true){
    document.querySelector("#existing").style.display="block";
}
