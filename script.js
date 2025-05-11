const checkInput = () => {
    let userInput = document.getElementById('inpuut').value.trim().toLowerCase();
    if (userInput === "happy mothers day 10") {
        document.getElementById('GoodJob').innerText = 'good job';
    }
};
