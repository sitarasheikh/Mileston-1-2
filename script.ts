const toggleButton = document.getElementById('toggleButton') as HTMLElement;

toggleButton.addEventListener('click', () => {
    const skillsSection = document.getElementById('skillsSection') as HTMLElement;
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});

