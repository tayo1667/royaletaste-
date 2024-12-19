const royaletasteElement = document.getElementById("royaletaste-title");
const textElement = document.getElementById("typewriter-text");
const royaletasteText = "Royaletaste";
const typewriterText = "Go-to stop for authentic Nigerian food";

let i = 0;
let j = 0;

function typeRoyaletaste() {
    if (i < royaletasteText.length) {
        royaletasteElement.innerHTML += royaletasteText.charAt(i);
        i++;
        setTimeout(typeRoyaletaste, 80); // Reduced delay for faster typing
    } else {
        setTimeout(typeWriter, 300); // Reduced delay before starting the second text
    }
}

function typeWriter() {
    if (j < typewriterText.length) {
        textElement.innerHTML += typewriterText.charAt(j);
        j++;
        setTimeout(typeWriter, 50); // Reduced delay for faster typing
    } else {
        setTimeout(() => {
            // Fade out welcome page
            document.getElementById("welcome-page").style.opacity = "0";
            document.getElementById("welcome-page").style.transition = "opacity 1s ease-in-out";
            
            setTimeout(() => {
                // Show login/signup page
                document.getElementById("login-signup-page").classList.remove("hidden");
                document.getElementById("login-signup-page").style.opacity = "1";
                document.getElementById("login-signup-page").style.transition = "opacity 1s ease-in-out";
            }, 500);
        }, 800); // Reduced overall delay
    }
}

// Show the login form
function showLoginPage() {
    document.getElementById("login-signup-page").innerHTML = `
        <div id="login-form">
            <h2>Login</h2>
            <form id="login-form">
                <input type="text" id="login-username" placeholder="Username" required />
                <input type="password" id="login-password" placeholder="Password" required />
                <button type="submit">Log In</button>
            </form>
        </div>
    `;
    
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle login form submission logic here
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        
        if (username && password) {
            // On successful login, hide the login page and show main content
            document.getElementById("login-signup-page").style.opacity = "0";
            document.getElementById("login-signup-page").style.transition = "opacity 1s ease-in-out";

            setTimeout(() => {
                document.getElementById("main-content").classList.remove("hidden");
                document.getElementById("main-content").style.opacity = "1";
                document.getElementById("main-content").style.transition = "opacity 1s ease-in-out";
            }, 500);
        } else {
            alert("Please fill in both username and password");
        }
    });
}

// Show the sign-up form
function showSignupPage() {
    document.getElementById("login-signup-page").innerHTML = `
        <div id="signup-form">
            <h2>Sign Up</h2>
            <form id="signup-form">
                <input type="text" id="signup-username" placeholder="Username" required />
                <input type="password" id="signup-password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    `;
    
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle sign-up form submission logic here
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        
        if (username && password) {
            // On successful signup, hide the signup page and show main content
            document.getElementById("login-signup-page").style.opacity = "0";
            document.getElementById("login-signup-page").style.transition = "opacity 1s ease-in-out";

            setTimeout(() => {
                document.getElementById("main-content").classList.remove("hidden");
                document.getElementById("main-content").style.opacity = "1";
                document.getElementById("main-content").style.transition = "opacity 1s ease-in-out";
            }, 500);
        } else {
            alert("Please fill in both username and password");
        }
    });
}

window.onload = function () {
    typeRoyaletaste();
};
