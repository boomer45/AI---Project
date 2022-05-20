function addUser() {
    person_name = document.getElementById("person_name_input").value;

    localStorage.setItem("person_name", person_name);

    window.location = "index.html";
}
