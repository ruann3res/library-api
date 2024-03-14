import { Request, Response, badRequest, ok } from '@/application/helpers';
import { Controller } from '@/application/controllers/http';
import { CategoryCreateUseCase } from '@/domain/use-cases';
import { ValidationBuilder, Validator } from '@/application/validation';
import { BadRequestError } from '@/domain/entities/errors';


interface HttpRequest {
    name: string
}

type Model = Error | boolean

export class CategoryCreateController extends Controller {
    constructor(
        private readonly categoryCreateUseCase: CategoryCreateUseCase
    ) {
        super();
    }

    async perform({ body }: Request<HttpRequest>): Promise<Response<Model>> {
        try {
            await this.categoryCreateUseCase({ ...body });
            return ok(true);
        } catch (error) {
            if (error instanceof BadRequestError) return badRequest(error);
            throw error;
        }
    }

    buildValidators({ name }: HttpRequest): Validator[] {
        return [
            ...ValidationBuilder.of({ value: name, fieldName: 'name' }).required().build(),
        ];
    }

}