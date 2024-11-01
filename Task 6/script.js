if (!sessionStorage.getItem('leaveCount')) {
    sessionStorage.setItem('leaveCount', 0);
}

//* ///////////////////////////////////////////

let submitBtn = document.querySelector("#submit")
let examForm = document.getElementById('examForm');
let warningMessage = document.getElementById('warningMessage');
let resultDiv = document.getElementById('result');

submitBtn.onclick = submitExam

function submitExam() {
    let answers = {
        q1: 'c',
        q2: 'a',
        q3: 'b',
        q4: 'c',
        q5: 'c'
    };

    let score = 0;

    for (let [question, answer] of Object.entries(answers)) {

        let userAnswer = document.querySelector(`input[name="${question}"]:checked`);

        if (userAnswer) {
            sessionStorage.setItem(question,userAnswer.value)
            if ( userAnswer.value === answer) 
                score++;
        }
    }

    resultDiv.textContent = `You scored ${score} out of ${Object.keys(answers).length}`;
}

//* ///////////////////////////////////////////  reload


window.onload = function () {
    
    let inputs = examForm.querySelectorAll('input[type="radio"]');
   
    inputs.forEach(input => {
       
        let answer = sessionStorage.getItem(input.name);
       
        if (input.value === answer) {
            input.checked = true;
        }
    });

    sessionStorage.setItem('isReloading', 'false');
};

window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('isReloading', 'true');
});


// //* ///////////////////////////////////////////

document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden' && sessionStorage.getItem('isReloading') === 'false') {
        handleTabLeave();
    }
});

function handleTabLeave() {
    let leaveCount = parseInt(sessionStorage.getItem('leaveCount'));
    leaveCount += 1;

    sessionStorage.setItem('leaveCount', leaveCount);

    warningMessage.textContent = `Warning: You have left the exam tab ${leaveCount} times.`;

    if (leaveCount >= 3) {
        lockExam();
    }
}

function lockExam() {
    warningMessage.textContent = 'Exam locked. You exceeded the limit of tab switches.';
    examForm.style.display ='none'
}
