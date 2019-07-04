export class Listing {
    name: string;
    location: string;
    price: number;
    description: string;

    constructor(nameInput, locationInput, priceInput, descriptionInput)
    {
        this.name = nameInput;
        this.location = locationInput;
        this.price = priceInput;
        this.description = descriptionInput;
    }
}
