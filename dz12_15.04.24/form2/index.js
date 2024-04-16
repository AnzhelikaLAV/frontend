const functionForme = (e) => {
    e.preventDefault();
    const form1 = document.forms.formName;
    const passwordValue = form1.elements.password.value;
    const repeatPasswordValue = form1.elements.RepeatPassword.value;
    const usernameValue = form1.elements.username.value;

    if (passwordValue === repeatPasswordValue && usernameValue !== null) {
        alert("данные отпралены");
    } else {
        alert("повторите ввод, пароли не совпадают");
    }
};
document.getElementById("formId").addEventListener("submit", functionForme);