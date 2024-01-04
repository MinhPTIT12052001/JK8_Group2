var name1 = document.getElementById("name")
var email = document.getElementById("email")
var website = document.getElementById("website")
var mess = document.getElementById("message")

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");
  
    parent.classList.add("error");
    small.innerText = message;
}

function checkRequired() {
    listInput = [name1, email, website, mess]

    listInput.forEach(element => {
    //     element.value = element.value.trim();

    // if (!element.value) {
    //   showError(element, " duoc de trong");
    // }
    if(!name1.value.trim()) {
        showError(name1, "This field is required");
    }
    if(!email.value.trim()) {
        showError(email, "A valid email address is required");
    }
    if(!website.value.trim()) {
        showError(website, "A valid url is required");
    }
    if(!mess.value.trim()) {
        showError(mess, "This field is required");
    }
    });
}
  