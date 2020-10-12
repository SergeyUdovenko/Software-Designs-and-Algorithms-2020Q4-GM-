import { ItemComparator } from './ItemComparator';
import { Item } from './Item';

export class Inventory implements ItemComparator {
    private items: Array<Item> = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    public compare(first, second): number {
        if (first.value < second.value) {
            return 1;
        } else if (first.value > second.value) {
            return -1;
        }
    }
    sort(comparator?: ItemComparator): void {
        this.items.sort((a, b) => {
            if (comparator) {
                return comparator.compare(a, b);
            } else {
                return a.value - b.value;
            }
        });
    }

    toString(): string {
        return this.items.join(', ');
    }
}
