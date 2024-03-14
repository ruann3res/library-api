import { CategoryCreateController,Controller } from '@/application/controllers/http';
import { makeCategoryCreateUseCase } from '@/main/factories/domain/use-cases';

export const makeCategoryCreateController = (): Controller => {
    return new CategoryCreateController(makeCategoryCreateUseCase());
};