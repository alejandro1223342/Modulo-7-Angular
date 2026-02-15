import { Invoice } from "../model/Invoice";

export const invoiceData: Invoice = {
    id: "001",
    company: {
        ruc: "1050518594001",
        name: "Alejandro Muñoz",
        address: {
            city: "Quito",
            principalStreet: "Av. Amazonas",
            secondaryStreet: "Av. Shyris",
            code: "N-57"
        }
    },
    customer: {
        id: "0401224407001",
        name: "Javier",
        surName: "Muñoz",
        address: {
            city: "Ibarra",
            principalStreet: "Venezuela",
            secondaryStreet: "Uruguay",
            code: "4-73"
        }
    },
    items: [
        {
            id: "001",
            product: {
                id: "001",
                name: "Papas sin Marca",
                price: 10,
                description: "Product Description",
                category: {
                    id: "001",
                    name: "Snack"
                }
            },
            quantity: 10,
        },
        {
            id: "002",
            product: {
                id: "002",
                name: "Doros",
                price: 0.60,
                description: "Snack",
                category: {
                    id: "001",
                    name: "Snack"
                }
            },
            quantity: 5,
        },
        {
            id: "003",
            product: {
                id: "003",
                name: "Coca Cola",
                price: 1.50,
                description: "Bebida",
                category: {
                    id: "002",
                    name: "Bebida"
                }
            },
            quantity: 2,
        }
    ]

}