export class RequiredFieldError extends Error {
    constructor(fieldName?: string) {
        const globalRequired = 'BACKEND_ERRORS.VALIDATION.REQUIRED_FIELD';
        const message = !fieldName ? `${globalRequired}.ANY` : `${globalRequired}.${fieldName.toUpperCase()}`;
        super(message);
        this.name = 'RequiredFieldError';
    }
}


export class RequiredEnumError extends Error {
    constructor() {
        super('BACKEND_ERRORS.VALIDATION.INVALID_ENUM_VALUE');
        this.name = 'RequiredEnumError';
    }
}