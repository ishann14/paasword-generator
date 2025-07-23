class PasswordGenerator {
    constructor() {
        this.length = 12;
        this.includeUppercase = true;
        this.includeLowercase = true;
        this.includeNumbers = true;
        this.includeSpecialChars = true;
    }

    generate() {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let charSet = '';
        if (this.includeUppercase) charSet += uppercaseChars;
        if (this.includeLowercase) charSet += lowercaseChars;
        if (this.includeNumbers) charSet += numberChars;
        if (this.includeSpecialChars) charSet += specialChars;

        if (charSet.length === 0) {
            throw new Error('Please select at least one character type.');
        }

        let password = '';
        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }

        return password;
    }
}

document.querySelector('.password').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseInt(document.querySelector('#length').value, 10);
    const includeUppercase = document.querySelector('#uppercase').checked;
    const includeLowercase = document.querySelector('#lowercase').checked;
    const includeNumbers = document.querySelector('#numbers').checked;
    const includeSpecialChars = document.querySelector('#special').checked;

    const generator = new PasswordGenerator();
    generator.length = length;
    generator.includeUppercase = includeUppercase;
    generator.includeLowercase = includeLowercase;
    generator.includeNumbers = includeNumbers;
    generator.includeSpecialChars = includeSpecialChars;

    try {
        const password = generator.generate();
        document.querySelector('.result').textContent = `🔑 Generated Password: ${password}`;
    } catch (error) {
        document.querySelector('.result').textContent = error.message;
    }
});
