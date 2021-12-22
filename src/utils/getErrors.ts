import { ValidationError } from "yup";

interface IErrors {
    [key: string]: string;
}

const getErrors = (err: ValidationError): IErrors => {
    const errors: IErrors = {};
    err.inner.forEach((error) => {
        if(error.path)
        errors[error.path] = error.message;
    });
    return errors;
}

export { getErrors };