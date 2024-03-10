document.addEventListener('DOMContentLoaded', function () {
    const timerDisplay = document.getElementById('timer-display');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const workDurationInput = document.getElementById('work-duration');
    const breakDurationInput = document.getElementById('break-duration');

    let timer;
    let minutes = 25;
    let seconds = 0;
    let isWorking = true;

    // Function to start the timer
    function startTimer() {
        timer = setInterval(updateTimer, 1000);
        startBtn.textContent = 'Pause';
    }

    // Function to pause the timer
    function pauseTimer() {
        clearInterval(timer);
        startBtn.textContent = 'Resume';
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(timer);
        minutes = parseInt(workDurationInput.value);
        seconds = 0;
        isWorking = true;
        updateTimerDisplay();
        startBtn.textContent = 'Start';
    }

    // Function to update the timer display
    function updateTimerDisplay() {
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Function to update the timer
    function updateTimer() {
        if (minutes === 0 && seconds === 0) {
            if (isWorking) {
                minutes = parseInt(breakDurationInput.value);
                isWorking = false;
            } else {
                minutes = parseInt(workDurationInput.value);
                isWorking = true;
            }
        } else if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateTimerDisplay();
    }

    // Event listener for start/pause button
    startBtn.addEventListener('click', function () {
        if (startBtn.textContent === 'Start') {
            startTimer();
        } else if (startBtn.textContent === 'Pause') {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    // Event listener for reset button
    resetBtn.addEventListener('click', resetTimer);

    // Initial update of the timer display
    updateTimerDisplay();
});
