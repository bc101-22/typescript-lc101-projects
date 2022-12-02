import { Payload } from './Payload'
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass(items: Payload[]): number {
        let totalMass: number = 0;
            // regular for loop implementation
        // for (let i: number = 0; i < items.length; i++) {
        //     totalMass += items[i].massKg;
        // }
        // return totalMass;

            // array.forEach implementation
        // items.forEach(item => {
        //     totalMass += item.massKg;
        // })
        
        items.forEach(function(item) {
            totalMass += item.massKg;
        })
        return totalMass;
    }

    currentMassKg(): number {
        let totalMass : number = 0;
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        let withinWeightLimit = this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        return withinWeightLimit;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}