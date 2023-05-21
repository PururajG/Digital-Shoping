
function showsearchbox() {
    const searchbox = document.getElementById('searchbox').style.display = "block";
    const cardlist = document.getElementById('card-list').style.display = "none";
    const user = document.getElementById('user').style.display = "none";
}

function hidesearchbox() {
    const cardlist = document.getElementById('searchbox').style.display = "none";
}

function showcardlist() {
    const searchbox = document.getElementById('searchbox').style.display = "none";
    const cardlist = document.getElementById('card-list').style.display = "block";
    const user = document.getElementById('user').style.display = "none";
}

function hidecardlist() {
    const cardlist = document.getElementById('card-list').style.display = "none";
}

function showuser() {
    const searchbox = document.getElementById('searchbox').style.display = "none";
    const cardlist = document.getElementById('card-list').style.display = "none";
    const user = document.getElementById('user').style.display = "block";
}

function hideuser() {
    const cardlist = document.getElementById('user').style.display = "none";
}
// -----------------------------for login form pop up-----------------------------
function showloginpopup() {
    const hideloginpopup = document.getElementById('login-popup').style.display = "block";
    const showloginpopup = document.getElementById('user').style.display = "none";
}
function hideloginpopup() {
    const hideloginpopup = document.getElementById('login-popup').style.display = "none";
}


//For  product details page img 


function chengeimg1() {
    const subimg = document.getElementById('subimg2');

    mainimg.src = 'Images/Smart watch small (1).jpg'
}


function chengeimg2() {
    const subimg = document.getElementById('subimg2');

    mainimg.src = 'Images/Smart watch small (2).jpg'
}
function chengeimg3() {
    const subimg = document.getElementById('subimg2');

    mainimg.src = 'Images/Smart watch small (3).jpg'
}
function chengeimg4() {
    const subimg = document.getElementById('subimg2');

    mainimg.src = 'Images/Smart watch small (4).jpg'
}



// for  product details page  counting

// // Select increment and decrement buttons
// const incrementCount = document.getElementById("increment-count");
// const decrementCount = document.getElementById("decrement-count");

// // Select total count
// const totalCount = document.getElementById("total-count");

// // Variable to track count
// var count = 0;

// // Display initial count value
// totalCount.innerHTML = count;

// // Function to increment count
// const handleIncrement = () => {
//     count++;
//     totalCount.innerHTML = count;
// };

// // Function to decrement count
// const handleDecrement = () => {
//     count--;
//     totalCount.innerHTML = count;
// };

// Add click event to buttons
// incrementCount.addEventListener("click", handleIncrement)
// decrementCount.addEventListener("click", handleDecrement);





// const plus = document.querySelector(".plus"),
//     minus = document.querySelector(".minus"),
//     num = document.querySelector(".num");
// let a = 1;
// plus.addEventListener("click", () => {

//     a++;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;

// });

// minus.addEventListener("click", () => {

//     if (a > 1) {
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         num.innerText = a;
//     }

// });