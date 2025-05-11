const messages = {
    0: 'under this laptop',
    1: 'under the big poster by this laptop',
    2: 'free day, ill just tell you the code "55"',
    3: "Luke 2:1-20 (read it)"
};

const showMessage = () => {
    let today = new Date().getDay();
    let storedDay = localStorage.getItem("lastDisplayedDay");

    if (storedDay == null || storedDay != today) {
        localStorage.setItem('dailyMessage', messages[today]);
        localStorage.setItem("lastDisplayedDay", today);
    }

    let messageElement = document.getElementById("dailyMessage");
    if (messageElement) {
        messageElement.innerText = localStorage.getItem("dailyMessage");
    } else {
        console.warn("Element with ID 'dailyMessage' not found in the document.");
    }
};

document.addEventListener("DOMContentLoaded", showMessage);

const checkInput = () => {
    let userInput = document.getElementById('inpuut').value.trim().toLowerCase();
    if (userInput === "hi") {
        document.getElementById('GoodJob').innerText = 'good job';
    }
};