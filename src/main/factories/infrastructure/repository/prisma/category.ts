import { CategoryRepository } from "@/infrastructure/repository";

export const makeCategoryRepository = (): CategoryRepository => {
    return new CategoryRepository();
};
