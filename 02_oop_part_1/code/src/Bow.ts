import { Weapon } from './Weapon';

export class Bow extends Weapon {
    constructor(defaultName = 'bow', baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(defaultName, value, baseDamage, baseDurability, weight);
    }

    polish(): void {
        if (this.durabilityModifier <= 1) {
            this.durabilityModifier = 1;
        } else {
            this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
        }
    }
}
