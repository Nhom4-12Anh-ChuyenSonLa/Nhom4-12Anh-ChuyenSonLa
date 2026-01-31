document.addEventListener('DOMContentLoaded', function() {
    
    const menuToggle = document.getElementById('mobile-menu');
    const navbarList = document.querySelector('.navbar-list');

    if (menuToggle && navbarList) {
        menuToggle.addEventListener('click', function() {
            navbarList.classList.toggle('active');
            this.classList.toggle('is-active');
        });
    }

    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarList.classList.contains('active')) {
                navbarList.classList.remove('active');
                menuToggle.classList.remove('is-active');
            }
        });
    });

    window.submitQuiz = function() {
        const answers = { q1: 'D', q2: 'B', q3: 'C', q4: 'A', q5: 'A' };
        let score = 0;
        let total = 5;
        
        const quizItems = document.querySelectorAll('.quiz__item');
        if (quizItems.length === 0) return;

        quizItems.forEach(block => {
            block.classList.remove('quiz__item--correct', 'quiz__item--wrong');
        });

        for (let i = 1; i <= total; i++) {
            const qName = 'q' + i;
            const radios = document.getElementsByName(qName);
            const block = document.getElementById(qName + '-block');
            let isSelected = false;

            for (let radio of radios) {
                if (radio.checked) {
                    isSelected = true;
                    if (radio.value === answers[qName]) {
                        score++;
                        block.classList.add('quiz__item--correct');
                    } else {
                        block.classList.add('quiz__item--wrong');
                    }
                }
            }
            if (!isSelected && block) block.classList.add('quiz__item--wrong');
        }

        const resultArea = document.getElementById('result-area');
        if (resultArea) {
            resultArea.innerHTML = `<h3>Kết quả: ${score}/${total} câu đúng!</h3>`;
            resultArea.style.color = (score === total) ? "#4CAF50" : "#D4AF37";
        }
    };
});