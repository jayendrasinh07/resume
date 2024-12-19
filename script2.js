let score = 0;
let timeLeft = 10;
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];

document.getElementById('clickButton').addEventListener('click', function() {
    score++;
    document.getElementById('score').textContent = score;
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

const timer = setInterval(function() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
    } else {
        clearInterval(timer);
        document.getElementById('clickButton').disabled = true;
        alert('Time is up! Your final score is ' + score);
    }
}, 1000);
