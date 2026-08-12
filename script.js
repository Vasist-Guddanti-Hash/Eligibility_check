function checkEligibility() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const resultEl = document.getElementById('result');

    if (!name || !email || !dob) {
        resultEl.textContent = "Please fill in all fields.";
        resultEl.className = "not-eligible";
        return;
    }
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }
    if (age >= 18) {
        resultEl.textContent = `${name}, you are ${age} years old and eligible.`;
        resultEl.className = "eligible";
    } else {
        resultEl.textContent = `${name}, you are ${age} years old and not eligible.`;
        resultEl.className = "not-eligible";
    }
}