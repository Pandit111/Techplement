// Modal functionality
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const courseNameElement = document.getElementById('course-name');
const enrollButtons = document.querySelectorAll('.enroll-btn');

// Handle modal open
enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.getAttribute('data-course');
        courseNameElement.textContent = `You have selected the "${courseName}" course.`;
        modal.style.display = 'flex';
    });
});

// Handle modal close
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
