export class Provider {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;

    constructor(firstNameInput, lastNameInput, emailInput, phoneInput)
    {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.email = emailInput;
        this.phone = phoneInput;
    }
}
