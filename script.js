const checkInput = () => {
    let userInput = document.getElementById('inpuut').value.trim().toLowerCase();
    if (userInput === "happy mothers day 10") {
        document.getElementById('GoodJob').innerText = 'WOW! you got this far, before we continue, happy mothers day, but heres the riddle: a piece of styro-foam taped to
        the wall 💲.';
    }
};
