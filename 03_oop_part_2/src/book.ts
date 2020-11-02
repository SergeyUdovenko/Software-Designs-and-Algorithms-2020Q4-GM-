import { Pages } from './pages';
import { Item } from './item';
import { Page } from './page';

export class Book extends Item {
    title: string;
    author: string;
    pages: Pages;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}, ${this.pages.pages[this.currentPage]}`;
    }

    set setAuthor(author: string) {
        this.author = author;
    }

    set setTitle(title: string) {
        this.title = title;
    }

    get getAuthor(): string {
        return this.author;
    }

    get getTitle(): string {
        return this.title;
    }
}
