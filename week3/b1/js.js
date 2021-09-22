function setFormMessage(formElement, type, message) {
   const messageElement = formElement.querySelector(".form__message");
   messageElement.textContent = message;
   messageElement.classList.remove("form__message--success", "form__message--error");
   messageElement.classList.add(`form__message--${type}`);
}
document.addEventListener("DOMContentLoaded", () => {
   const loginForm = document.querySelector("#login");
   const createAccountForm = document.querySelector("#createAccount");
   document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form__hidden");
      createAccountForm.classList.remove("form__hidden");
   })
   document.querySelector("#linkLogin").addEventListener("click", () => {
      loginForm.classList.remove("form__hidden");
      createAccountForm.classList.add("form__hidden");
   })
   loginForm.addEventListener("submit", e => {
      e.preventDefault();
      setFormMessage(loginForm, 'error', "Tên đăng nhập hoặc mật khẩu không đúng");
   });
   createAccountForm.addEventListener("submit", e => {
      e.preventDefault();
      setFormMessage(createAccountForm, 'success', "Đăng ký thành công");
   });
});