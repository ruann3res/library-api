import { TranslateType } from "@/domain/helpers";

export type AuthorType = {
    name: string;
    curriculum?: string
}

export type BookCategoryType = {
    [key in string]: string
}

export type BookType = {
    id: string;
    releaseDate: Date;
    title: string
    authorship: Array<AuthorType>
    category: BookCategoryType;
    language: TranslateType;
}

