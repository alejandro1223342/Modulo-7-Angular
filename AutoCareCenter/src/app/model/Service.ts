import { BranchCapacity } from "./BranchCapacity";

export class Service{
    id!: string;
    name!: string;
    type!: string;
    capacities!: BranchCapacity[];
}