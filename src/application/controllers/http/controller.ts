import { badRequest, Request, Response, serverError } from '@/application/helpers';
import { ValidationComposite, Validator } from '@/application/validation';

export abstract class Controller<T = unknown, Q = unknown> {
    abstract perform(request: Request<T>): Promise<Response>

    buildValidators(httpRequest: T): Validator[] {
        return [];
    }

    async handle(httpRequestBody: T, HttpRequestQuery: Q): Promise<Response> {
        const error = this.validate(httpRequestBody);
        if (error !== undefined) return badRequest(error);
        try {
            return await this.perform({ body: httpRequestBody, query: HttpRequestQuery});
        } catch (error) {
            return serverError(error);
        }
    }

    private validate(httpRequest: T): Error | undefined {
        const validators = this.buildValidators(httpRequest);
        return new ValidationComposite(validators).validate();
    }
}