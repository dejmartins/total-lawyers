let currentSection = 1;
const caution = document.getElementById('caution');
const termsOfUse = document.getElementById('terms-of-use');

function showNextSection() {
    const totalSections = 5;
    
    caution.style.display = 'none';
    termsOfUse.style.display = 'none';
    document.getElementById(`section-${currentSection}`).style.display = 'none';

    currentSection++;

    if (currentSection <= totalSections) {
        document.getElementById(`section-${currentSection}`).style.display = 'block';
    }

    const nextStepBtn = document.getElementById('next-step-btn');
    
    if (currentSection === totalSections - 1) {
        caution.style.display = 'block';
        nextStepBtn.textContent = 'Last Step';
    } else if (currentSection === totalSections) {
        termsOfUse.style.display = 'block';
        nextStepBtn.textContent = 'Get Free Consult';
        nextStepBtn.type = 'submit';
    } else if (currentSection > totalSections) {
        location.reload();
    }
}
