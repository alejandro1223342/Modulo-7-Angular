import { InventoryData } from "../model/InventoryData";

export const inventoryData: InventoryData = {
    company: {
        ruc: "1792345678001",
        name: "Fashion Trends S.A.",
        address: {
            city: "Quito",
            principalStreet: "Av. de los Shyris",
            secondaryStreet: "N34-123",
            code: "EC170501"
        }
    },
    products: [
        {
            id: "001",
            name: "Camiseta Algodón Premium",
            category: "Ropa Hombre",
            stocks: [
                { branchName: "Sucursal Norte", stock: 50 },
                { branchName: "Sucursal Sur", stock: 30 },
                { branchName: "Sucursal Centro", stock: 20 },
                { branchName: "Sucursal Cumbayá", stock: 15 },
                { branchName: "Sucursal Tumbaco", stock: 10 }
            ]
        },
        {
            id: "002",
            name: "Jeans Slim Fit",
            category: "Ropa Hombre",
            stocks: [
                { branchName: "Sucursal Norte", stock: 40 },
                { branchName: "Sucursal Sur", stock: 25 },
                { branchName: "Sucursal Centro", stock: 35 },
                { branchName: "Sucursal Cumbayá", stock: 20 },
                { branchName: "Sucursal Tumbaco", stock: 12 }
            ]
        },
        {
            id: "003",
            name: "Vestido de Noche Elegante",
            category: "Ropa Mujer",
            stocks: [
                { branchName: "Sucursal Norte", stock: 15 },
                { branchName: "Sucursal Sur", stock: 10 },
                { branchName: "Sucursal Centro", stock: 8 },
                { branchName: "Sucursal Cumbayá", stock: 25 },
                { branchName: "Sucursal Tumbaco", stock: 18 }
            ]
        },
        {
            id: "004",
            name: "Blusa Seda",
            category: "Ropa Mujer",
            stocks: [
                { branchName: "Sucursal Norte", stock: 30 },
                { branchName: "Sucursal Sur", stock: 20 },
                { branchName: "Sucursal Centro", stock: 25 },
                { branchName: "Sucursal Cumbayá", stock: 30 },
                { branchName: "Sucursal Tumbaco", stock: 22 }
            ]
        },
        {
            id: "005",
            name: "Zapatos Cuero",
            category: "Calzado",
            stocks: [
                { branchName: "Sucursal Norte", stock: 12 },
                { branchName: "Sucursal Sur", stock: 8 },
                { branchName: "Sucursal Centro", stock: 10 },
                { branchName: "Sucursal Cumbayá", stock: 15 },
                { branchName: "Sucursal Tumbaco", stock: 9 }
            ]
        }
    ]
};
