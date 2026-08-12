function checkEligibility() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value;
    const resultEl = document.getElementById('result');

    // Basic validation
    if (!name || !email || !age) {
    resultEl.textContent = "Please fill in all fields.";
    resultEl.className = "not-eligible";
    return;
}

    if (age >= 18) {
        resultEl.textContent = `${name}, you are ${age} years old `;
        resultEl.className = "eligible";
    } else {
        resultEl.textContent = `${name}, you are not 18 years old `;
        resultEl.className = "not-eligible";
    }
}