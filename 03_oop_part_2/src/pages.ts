import { Page } from './page';
import { PagesIterable } from './pagesIterable';

export class Pages {
    pages: Array<Page>;

    constructor(pages: Array<Page>) {
        this.pages = pages;
    }

    toString(idx: number) {
        return this.pages[idx].toString();
    }

    [Symbol.iterator]() {
        return new PagesIterable(this);
    }
}
