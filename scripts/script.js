let currentSection = 1;

function showNextSection() {
    const totalSections = 4;

    document.getElementById(`section-${currentSection}`).style.display = 'none';

    currentSection++;

    if (currentSection <= totalSections) {
        document.getElementById(`section-${currentSection}`).style.display = 'block';
    }

    const nextStepBtn = document.getElementById('next-step-btn');
    if (currentSection === totalSections) {
        nextStepBtn.textContent = 'Last Step';
    } else if (currentSection > totalSections) {
        nextStepBtn.type = 'Get Free Consult';
    }
}
