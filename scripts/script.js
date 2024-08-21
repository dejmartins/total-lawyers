let currentSection = 1;
const caution = document.getElementById('caution');

function showNextSection() {
    const totalSections = 5;
    
    document.getElementById(`section-${currentSection}`).style.display = 'none';
    caution.style.display = 'none';

    currentSection++;

    if (currentSection <= totalSections) {
        document.getElementById(`section-${currentSection}`).style.display = 'block';
    }

    const nextStepBtn = document.getElementById('next-step-btn');
    
    if (currentSection === totalSections - 1) {
        nextStepBtn.textContent = 'Last Step';
        caution.style.display = 'block'
    } else if (currentSection === totalSections) {
        nextStepBtn.textContent = 'Get Free Consult';
    }
}
