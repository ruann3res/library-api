import { BadRequestError } from "@/domain/entities/errors";
import { CategoryRepository } from "@/infrastructure/repository";


export type CategoryCreateUseCase = (params: { name: string }) => Promise<void>;

type Setup = (categoryRepository: CategoryRepository) => CategoryCreateUseCase;

export const setupCategoryCreateUseCase: Setup = (categoryRepository) => async (params) => {
    const { name } = params;

    const categoryAlreadyExists = await categoryRepository.getByName(name);
    if (categoryAlreadyExists) {
        throw new BadRequestError(`JA EXISTE UMA CATEGORIA '${name}'`)
    }

    await categoryRepository.create(name);
};