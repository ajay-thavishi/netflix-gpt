export const checkValidData = (name, email, password, isLoginForm) => {
    debugger

    const checkName = /^[a-zA-Z\s'-]+$/.test(name)

    const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)

    const checkPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if (!isLoginForm) {
        if (!checkName) {
            return "Name must contain only letters, spaces, apostrophes, or hyphens."
        }
    }

    if (!checkEmail) {
        return "Enter a valid email address"
    }

    if (!checkPassword) {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    }

    if (checkEmail && checkPassword) {
        return null
    }
}
