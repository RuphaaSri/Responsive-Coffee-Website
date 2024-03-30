let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    cartItems.classList.remove('active');
}

let cartItems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}

let searchBar = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
    cartItems.classList.remove('active');
}

// contact section - form fill validation
function validateForm() {
    let NameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let phoneNoField = document.getElementById("phoneNo");

    if(NameField.value.trim() == "")
    {
        alert("No blank values allowed");
        return false;
    }
    else if(emailField.value.trim() == "")
    {
        alert("No blank values allowed");
        return false;
    }
    else if(phoneNoField.value.trim() == "")
    {
        alert("No blank values allowed");
        return false;
    }
    if(NameField.value.trim().length < 10 && phoneNoField.value.trim() .length <10)
    {
        alert("Enter max 10 characters");
        return false;
    }
// NameField.value.trim() == "" ||
    else 
    {
        return true;
    }
}
