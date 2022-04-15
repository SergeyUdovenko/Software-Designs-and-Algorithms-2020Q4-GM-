import { Pages } from './pages';
import { Item } from './item';

export class Magazine extends Item {
    title: string;
    pages: Pages;

    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.pages.length}, ${this.pages.pages[this.currentPage]}`;
    }

    set setTitle(title: string) {
        this.title = title;
    }

    get getTitle(): string {
        return this.title;
    }
}
