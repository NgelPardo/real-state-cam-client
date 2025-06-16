interface SeedProperty {
    id: string;
    name: string;
    address: string;
    price: number;
    codeInternal: string;
    year: string;
    idOwner: string;
    image: PropertyImage;
}

interface PropertyImage {
    id: string;
    idProperty: string;
    file: string;
    enabled: boolean;
}

interface SeedData {
    properties: SeedProperty[],
}

export const initialData: SeedData = {
    properties: [
        {
            id: '1a2b3c4d',
            name: 'Casa Familiar',
            address: 'Calle 123 #45-67, Bogotá',
            price: 450000,
            codeInternal: 'PROP-001',
            year: '2015',
            idOwner: 'owner-123',
            image: {
                id: 'img-001',
                idProperty: '1a2b3c4d',
                file: '/products/dillon-kydd-XGvwt544g8k-unsplash 1.png',
                enabled: true
            }
        },
        {
            id: '2b3c4d5e',
            name: 'Apartamento Moderno',
            address: 'Carrera 10 #80-25, Medellín',
            price: 320000,
            codeInternal: 'PROP-002',
            year: '2019',
            idOwner: 'owner-456',
            image: {
                id: 'img-002',
                idProperty: '2b3c4d5e',
                file: '/products/pexels-binyamin-mellish-106399 1.png',
                enabled: true
            }
        },
        {
            id: '3c4d5e6f',
            name: 'Finca Campestre',
            address: 'Vereda El Rosal, Rionegro',
            price: 780000,
            codeInternal: 'PROP-003',
            year: '2012',
            idOwner: 'owner-789',
            image: {
                id: 'img-003',
                idProperty: '3c4d5e6f',
                file: '/products/pexels-pixabay-259588 1.png',
                enabled: true
            }
        },
        {
            id: '4d5e6f7g',
            name: 'Penthouse de Lujo',
            address: 'Av. El Poblado #15-30, Medellín',
            price: 1200000,
            codeInternal: 'PROP-004',
            year: '2021',
            idOwner: 'owner-321',
            image: {
                id: 'img-004',
                idProperty: '3c4d5e6f',
                file: '/products/photography-with-natural__54035.jpeg',
                enabled: true
            }
        },
        {
            id: '5e6f7g8h',
            name: 'Casa Colonial',
            address: 'Centro Histórico, Cartagena',
            price: 980000,
            codeInternal: 'PROP-005',
            year: '2008',
            idOwner: 'owner-654',
            image: {
                id: 'img-005',
                idProperty: '3c4d5e6f',
                file: '/products/photography-with-natural__54036.jpeg',
                enabled: true
            }
        }
    ]
}