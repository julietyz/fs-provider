export class Provider {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(firstNameInput, lastNameInput, emailInput, passwordInput)
    {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.email = emailInput;
        this.password = passwordInput;
    }
}
