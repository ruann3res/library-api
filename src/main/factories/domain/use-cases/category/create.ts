import { CategoryCreateUseCase, setupCategoryCreateUseCase } from '@/domain/use-cases';
import { makeCategoryRepository } from '@/main/factories/infrastructure/repository';

export const makeCategoryCreateUseCase = (): CategoryCreateUseCase => {
    return setupCategoryCreateUseCase(makeCategoryRepository());
};