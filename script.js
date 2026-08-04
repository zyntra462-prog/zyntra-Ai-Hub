console.log("Welcome to ZYNTRA AI Hub");
function copyNumber(number){

navigator.clipboard.writeText(number);

alert("Phone number copied!");

}

const workflows = {
    simple001: {
        name: "AI Email Automation",
        price: 29,
        category: "Simple",
        description: "Automates email responses using AI."
    },

    simple002: {
        name: "Google Sheets Automation",
        price: 39,
        category: "Simple",
        description: "Automatically updates spreadsheets."
    },

    advanced001: {
        name: "AI Customer Support Agent",
        price: 149,
        category: "Advanced",
        description: "24/7 AI-powered customer support."
    }
};

/* ==========================================
   ZYNTRA AI Hub Workflow Database
========================================== */

const workflows = {

    simple001: {
        id: "simple001",
        name: "AI Email Automation",
        price: 29,
        category: "Simple",
        image: "images/email.png",
        description: "Automatically reply to emails using AI."
    },

    simple002: {
        id: "simple002",
        name: "AI Invoice Generator",
        price: 39,
        category: "Simple",
        image: "images/invoice.png",
        description: "Generate professional invoices automatically."
    },

    advanced001: {
        id: "advanced001",
        name: "AI Customer Support Agent",
        price: 149,
        category: "Advanced",
        image: "images/support.png",
        description: "A complete AI chatbot for customer support."
    }

};


/* ==========================================
   Buy Workflow
========================================== */

function buyWorkflow(id){

    alert("Selected workflow: " + id);

}

function login(){

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if(username === "ZyntraAdmin" && password === "MySecret123"){

window.location.href = "dashboard.html";

}else{

document.getElementById("error").innerHTML =
"Wrong username or password.";

}

}