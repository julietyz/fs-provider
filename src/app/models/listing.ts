export class Listing {
    name: string;
    location: string;
    price: number

    constructor(nameInput, locationInput, priceInput)
    {
        this.name = nameInput;
        this.location = locationInput;
        this.price = priceInput;
    }
}
