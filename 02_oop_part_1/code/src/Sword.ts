import { Weapon } from './Weapon';

export class Sword extends Weapon {
    private readonly damage: number;

    constructor(defaultName = 'sword', baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(defaultName, value, baseDamage, baseDurability, weight);

        this.damage = baseDamage;
    }

    polish(): void {
        this.damageModifier += this.MODIFIER_CHANGE_RATE + (this.damage / 100) * 0.25;
    }
}
