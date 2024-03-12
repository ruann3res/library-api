import {
    Validator,
    Required,
    RequiredString,
    RequiredNumber,
    RequiredEnum
} from '@/application/validation';

export type RequiredPropsType = Array<{ field: string, type: 'string' | 'number' }>

export class ValidationBuilder {
    private constructor(private readonly value: any, private readonly fieldName?: string, private readonly validators: Validator[] = []) { }

    static of({ value, fieldName }: { value: any, fieldName?: string }): ValidationBuilder {
        return new ValidationBuilder(value, fieldName);
    }

    required(): this {
        if (typeof this.value === 'number') {
            this.validators.push(new RequiredNumber(this.value, this.fieldName));
        } else if (typeof this.value === 'string') {
            this.validators.push(new RequiredString(this.value, this.fieldName));
        } else {
            this.validators.push(new Required(this.value, this.fieldName));
        }
        return this;
    }

    enum<T>(enumObject: Record<string, T>) {
        this.validators.push(new RequiredEnum(this.value, enumObject, this.fieldName));
        return this;
    }

    requiredProps({ validate }: { validate: RequiredPropsType }): this {
        // para validar como objeto {}
        validate.forEach(({ field, type }) => {
            if (type === 'number') {
                this.validators.push(new RequiredNumber(this.value[field], `${this.fieldName}.${field}`));
            } else if (type === 'string') {
                this.validators.push(new RequiredString(this.value[field], `${this.fieldName}.${field}`));
            } else {
                this.validators.push(new Required(this.value[field], `${this.fieldName}.${field}`));
            }
        });

        return this;
    }

    build(): Validator[] {
        return this.validators;
    }
}