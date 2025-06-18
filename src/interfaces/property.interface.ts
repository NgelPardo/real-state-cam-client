
export interface Property {
    id: string;
    name: string;
    address: string;
    price: number;
    codeInternal: string;
    year: string;
    idOwner: string;
    ownerName?: string;
    image: string;
}

export interface PropertyImage {
    id: string;
    idProperty: string;
    file: string;
    enabled: boolean;
}