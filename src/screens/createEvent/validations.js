export const eventValidations = (values) => {
    const error = {}
    const requiredField = [ 'title', 'description' ];
    const errorMessage = 'Need to be more longer';
    
    requiredField.forEach(field => {
        if (!values[field]) {
            error[field] = "Required";
        }
    });

    if (values.title && values.title.length < 6) {
        error.title = errorMessage;
    }
    if (values.description && values.description.length < 6) {
        error.description = errorMessage;
    }

    return error;
}