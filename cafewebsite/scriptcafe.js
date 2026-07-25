const form = document.getElementById("bookingForm");

const message = document.getElementById("successMessage");


form.addEventListener("submit", function(event){

    event.preventDefault();


    message.innerHTML = 
    "☕ Your table has been reserved successfully!";


    message.style.marginTop = "20px";


    form.reset();

});