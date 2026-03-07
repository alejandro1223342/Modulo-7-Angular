import { AutoCareData } from "../model/AutoCareData";

export const autoCareData: AutoCareData = {
    company: {
        ruc:"1790012345001",
        name: "AutoCare Center",
        address: {
            city:"Quito",
            principalStreet: "Av. 10 de Agosto",
            secondaryStreet: "N2-256",
            numBranches:4
        }
    },
    services:[
        {
            id:"S001",
            name: "Mantenimiento Preventivo",
            type:"Mecánica",
            capacities:[
                {branchName: "Sucursal Norte", capacity: 20},
                {branchName: "Sucursal Sur", capacity: 15},
                {branchName: "Sucursal Este", capacity: 10},
                {branchName: "Sucursal Oeste", capacity: 12}
            ]
        }
    ]

}