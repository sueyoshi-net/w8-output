const loginBase = document.querySelector("#loginBase");
const inputEmail = document.querySelector("#YourEmail");
const inputPassword = document.querySelector("#Password");
const buttonSave = document.querySelector("#save");

buttonSave.addEventListener("click", () => {
  const inputEmailData = inputEmail.value; //Eメールの入力欄から値を取得
  const inputPasswordlData = inputPassword.value; //パスワード入力欄から値を取得

  localStorage.setItem("keyEmail", inputEmailData); //ローカルストレージにEメールを保存
  localStorage.setItem("keyPassword", inputPasswordlData); //ローカルストレージにパスワードを保存

  localStorage.getItem("keyEmail", inputEmailData); //ローカルストレージからEメールを取得
  localStorage.getItem("keyPassword", inputPasswordlData); //ローカルストレージからパスワードを取得
});
