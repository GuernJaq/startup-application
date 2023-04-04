function login(){
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    console.log("Done",nameEl.value)
    window.location.href = "vote1.html";
}