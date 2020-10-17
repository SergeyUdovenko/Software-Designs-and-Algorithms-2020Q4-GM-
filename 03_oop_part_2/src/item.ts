import {PagesIterable} from "./pagesIterable";

export abstract class Item {
    currentPage: number = 0;

    abstract toString(): string;

    [Symbol.iterator]() {
        return new PagesIterable(this);
    }
}