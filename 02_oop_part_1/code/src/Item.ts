import { Comparable } from './Comparable';

const counter = 0;
const id = 0;

export abstract class Item implements Comparable {
    private readonly counter: number = counter;
    private id: number = id;
    private name: string;
    private weight: number;
    private value: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.weight = weight;
        this.value = value;

        this.id++;
        this.counter++;
    }

    compareTo(other: Item): number {
        if (other.value < this.value) {
            return 1;
        } else if (other.value > this.value) {
            return -1;
        } else if (other.name.toUpperCase() === this.name.toUpperCase()) {
            return 0;
        } else {
            if ([other.name.toUpperCase(), this.name.toUpperCase()].sort()[0] === other.name.toUpperCase()) {
                return 1;
            } else {
                return -1;
            }
        }
    }

    public get numberOfItems(): number {
        return this.counter;
    }

    public get getId(): number {
        return this.id;
    }

    public get getName(): string {
        return this.name;
    }

    public get getValue(): number {
        return this.value;
    }

    public get getWeight(): number {
        return this.weight;
    }

    public set setName(name: string) {
        this.name = name;
    }

    public set setValue(price: number) {
        this.value = price;
    }

    public set setWeight(weight: number) {
        this.weight = weight;
    }

    reset(): void {
        this.id = 0;
    }

    abstract use(): string;

    toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }
}
