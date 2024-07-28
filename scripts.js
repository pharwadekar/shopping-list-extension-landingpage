document.querySelector('button').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    // Redirect after a delay
    setTimeout(() => {
        window.location.href = 'https://chrome.google.com/webstore/detail/stillneedtoaddthis';
    }, 3000);
});

document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('.toggle-icon');
        if (answer.style.display === 'none' || !answer.style.display) {
            answer.style.display = 'block';
            icon.textContent = '−';
        } else {
             answer.style.display = 'none';
            icon.textContent = '+';
        }
     });
});
