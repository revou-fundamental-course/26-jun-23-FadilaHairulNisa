const name = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const messages = document.getElementById("message");
const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", function(event) {
    event.preventDefault()
    const name = name.value
    const email = email.value
    const phoneNumber = phoneNumber.value
    const messages = messages.value
    validateForm(name, email, phoneNumber, messages)
})

function validateForm(name, email, phoneNumber, messages) {

    if (name == "") {
        alert("Nama harus diisi");
        return false;
    }

    if (email == "") {
        alert("Email harus diisi");
        return false;
    }

    if (phoneNumber == "") {
        alert("Nomor telepon harus diisi");
        return false;
    }

    if (messages == "") {
        alert("Pesan harus diisi");
        return false;
    }
    else {
        alert("Success");
        return true;
    }
}

var slideIndex = 1;
showSLides(slideIndex);

function plusDivs(n) {
    showSLides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSLides(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for  (i = 0; i <imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 2000);