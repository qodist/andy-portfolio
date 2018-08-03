// FIRST TAB MENU
function openSection (evt, sectionName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-menu__content");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-menu__links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen-1").click();

// SECOND TAB MENU
function openSectionTwo (evt, sectionName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-menu__content--1");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-menu__links--1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen-2").click();

// CLOSE NAVIGATION MENU
var checkbox = document.querySelector(".navigation__checkbox");
var items = document.querySelectorAll(".navigation__item");

items.forEach(function(item){
    item.addEventListener("click", function(){
        checkbox.checked = false;
    });
});

// CONTACT FORM

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAK8Z5K_hBqtQAVd-rzVMcZUvPzc95VX8s",
    authDomain: "portfolio-contact-form-c12a6.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-c12a6.firebaseio.com",
    projectId: "portfolio-contact-form-c12a6",
    storageBucket: "portfolio-contact-form-c12a6.appspot.com",
    messagingSenderId: "353081755880"
  };
firebase.initializeApp(config);

// Reference messages collection
var messageRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    
    // Get values
    var name = getInputVal("name");
    var email = getInputVal("email");
    var message = getInputVal("textarea");

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector(".alert").style.display="block";

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector(".alert").style.display="none";
    }, 3000);

    // Clear form
    document.getElementById("contactForm").reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}