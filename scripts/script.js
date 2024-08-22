let currentSection = 1;
const totalSections = 5;
const caution = document.getElementById('caution');
const termsOfUse = document.getElementById('terms-of-use');

function validateCurrentSection() {
    const currentFormSection = document.getElementById(`section-${currentSection}`);
    const inputs = currentFormSection.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

function hideCurrentSection() {
    document.getElementById(`section-${currentSection}`).style.display = 'none';
    caution.style.display = 'none';
    termsOfUse.style.display = 'none';
}

function showNextSection() {
    currentSection++;
    if (currentSection <= totalSections) {
        document.getElementById(`section-${currentSection}`).style.display = 'block';

        const instruction = document.getElementById('instruction');
        if (currentSection === 5) {
            instruction.textContent = "Enter your details for a free consult.";
        } else {
            instruction.textContent = "Answer a few questions and continue.";
        }
    }
}


function updateButtonState() {
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

function showNextSectionWithValidation() {
    if (!validateCurrentSection()) {
        alert('Please fill out all required fields before proceeding.');
        return;
    }
    hideCurrentSection();
    showNextSection();
    updateButtonState();
}

function moveFormForMobile() {
    const form = document.querySelector('.right-side');
    const leftSide = document.querySelector('.left-side');

    if (window.innerWidth <= 768) {
        leftSide.insertBefore(form, leftSide.getElementsByTagName('p')[1]);
    } else {
        const banner = document.getElementById('banner');
        banner.appendChild(form);
    }
}

window.addEventListener('resize', moveFormForMobile);
window.addEventListener('load', moveFormForMobile);

