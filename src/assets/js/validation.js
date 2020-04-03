let message = '';
let errorReturn = '';
let proof_password;
let focusable = false;

const checkFocus = field => {
    if (focusable) {
        field.focus();
        field.blur();
    }
};

export const getElement = () => {
    const image = document.querySelector('#image');
    image.focus();
};

export const errorObject = {
    error: errorReturn,
    message: message,
};

const setInvalid = (field, message, error) => {
    errorObject.error = error;
    errorObject.message = message;
    field.classList.add('error-border');
    checkFocus(field);
};

const setValid = (field, error) => {
    const array = field.classList;
    errorObject.error = error;
    errorObject.message = '';
    array.remove('error-border');
};


export const validateName = (event, mainEvent, name) => {
    let error = 'nameError';
    let username;
    let field;
    let item;
    // for onSubmit
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                username = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        username = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (username.trim() === '') {
        setInvalid(field, 'Please do not leave blank', error);
        return false;
    } else if (notOnlyLetters(field)) {
        setInvalid(field, 'Name should only contain letters', error);
        return false;
    } else if (username.length < 2) {
        setInvalid(field, 'Invalid input', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

export const validateMail = (event, mainEvent, name) => {
    let error = 'mailError';
    let mail;
    let field;
    let item;
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                mail = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        mail = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (mail.trim() === '') {
        setInvalid(field, 'Please do not leave blank', error);
        return false;
    } else if (!containsCharacters(field, 5, error)) {
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};
//
// export const validateSubject = (event, mainEvent) => {
//     let error = 'subjectError';
//     let field;
//     let subject;
//     if (event === undefined) {
//         subject = mainEvent.value;
//         field = mainEvent;
//         focusable = true;
//         //    for other validations
//     } else if (mainEvent === undefined) {
//         subject = event.target.value;
//         field = event.target;
//         focusable = false;
//     }
//     if (subject.trim() === '') {
//         setInvalid(field, 'Please do not leave blank', error);
//         return false;
//     } else if (subject.length > 50) {
//         setInvalid(field, 'Subject should not exceed 50 characters', error);
//         return false;
//     } else {
//         setValid(field, error);
//         return true;
//     }
// };
//
// export const validateMessage = (event, mainEvent) => {
//     let error = 'messageError';
//     let field;
//     let message;
//
//     if (event === undefined) {
//         message = mainEvent.value;
//         field = mainEvent;
//         focusable = true;
//         //    for other validations
//     } else if (mainEvent === undefined) {
//         message = event.target.value;
//         field = event.target;
//         focusable = false;
//     }
//     if (message.trim() === '') {
//         setInvalid(field, 'Please do not leave blank', error);
//         return false;
//     } else if (message.length > 200) {
//         setInvalid(field, 'Message should not exceed 200 characters', error);
//         return false;
//     } else {
//         setValid(field, error);
//         return true;
//     }
// };

export const validatePassword = (event, mainEvent, name) => {
    let error = 'passwordError';
    let field;
    let password;
    let item;

    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                password = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        password = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (password.trim() === '') {
        setInvalid(field, 'Please enter password', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

export const validateSpecialPassword = (event, mainEvent, name) => {
    let error = 'passwordError';
    let field;
    let password;
    let item;

    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                password = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    }else if (mainEvent === undefined) {
        password = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (password.trim() === '') {
        setInvalid(field, 'Please enter password', error);
        return false;
    } else if (!containsCharacters(field, 2, error)) {
        return false;
    } else if (password.length < 7) {
        setInvalid(field, 'Password should be at least 7 characters', error);
        return false;
    } else {
        setValid(field, error);
        proof_password = password;
        return true;
    }
};

export const validateConfirmPassword = (event, mainEvent, name) => {
    let error = 'confirmPasswordError';
    let field;
    let confirmPassword;
    let item;

    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                confirmPassword = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        confirmPassword = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (confirmPassword.trim() === '') {
        setInvalid(field, 'Please enter password', error);
        return false;
    } else if (confirmPassword !== proof_password) {
        setInvalid(field, 'Passwords do not match', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

export const validateContact = (event, mainEvent, name) => {
    let error = 'contactError';
    let field;
    let contact;
    let item;

    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                contact = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        contact = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (contact.trim() === '') {
        setInvalid(field, 'Please enter phone number', error);
        return false;
    } else if (isNaN(contact)) {
        setInvalid(field, 'Please enter numbers only', error);
        return false;
    } else if (contact.length < 10 || contact.length > 15) {
        setInvalid(field, 'Contact should not be less than 10 digits and not more than 15', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

export const validateAddress = (event, mainEvent, name) => {
    let error = 'addressError';
    let address;
    let field;
    let item;

    // for onSubmit
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                address = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        address = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (address.trim() === '') {
        setInvalid(field, 'Please do not leave blank', error);
        return false;
    } else if (address.length < 2) {
        setInvalid(field, 'Invalid name', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

const validateRadioButtons = (event, name, error) => {
    let item;
    let focusItem;
    let i = 0;
    for (item of event.target) {
        if (item.name === name) {
            focusItem = item;
            if (item.checked) {
                i++;
            }
        }
    }
    if (i > 0) {
        errorObject.error = error;
        errorObject.message = '';
        return true;
    } else {
        errorObject.error = error;
        errorObject.message = 'Please make a selection';
        focusItem.focus();
        return false;
    }
};

const validateRegion = (event, name) => {
    let item;
    for (item of event.target) {
        if (item.name === name) {
            if (item.value.toLowerCase() === 'select an option' || item.value === 'true') {
                setInvalid(item, 'Please select a region', 'regionError');
                focusable = true;
                return false;
            } else {
                setValid(item, 'regionError');
                return true;
            }
        }
    }
};

export const validateDescription = (event, mainEvent, name) => {
    let error = 'descriptionError';
    let description;
    let field;
    let item;
    // for onSubmit
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                description = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
        //    for other validations
    } else if (mainEvent === undefined) {
        description = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (description.trim() === '') {
        setInvalid(field, 'Please do not leave blank', error);
        return false;
    } else if (description.length < 10) {
        setInvalid(field, 'Please give a better description', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};


export const validateTown = (event, mainEvent, name) => {
    let error = 'townError';
    let town;
    let field;
    let item;
    // for onSubmit
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                town = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
    } else if (mainEvent === undefined) {
        town = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (town.trim() === '') {
        setInvalid(field, 'Please do not leave blank', error);
        return false;
    } else if (notOnlyLetters(field)) {
        setInvalid(field, 'Name should not contain numbers', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

export const validatePrice = (event, mainEvent, name) => {
    let error = 'priceError';
    let field;
    let price;
    let item;
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                mainEvent = item;
                price = mainEvent.value;
                field = mainEvent;
                focusable = true;
            }
        }
    } else if (mainEvent === undefined) {
        price = event.target.value;
        field = event.target;
        focusable = false;
    }
    if (price.trim() === '') {
        setInvalid(field, 'Please do not leave blank', error);
        return false;
    } else {
        setValid(field, error);
        return true;
    }
};

export const validateImages = (event, mainEvent, name) => {
    let item;
    let myFiles;
    if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === name) {
                myFiles = item;
                focusable = true;
            }
        }
    } else if (mainEvent === undefined) {
        myFiles = event.target;
        focusable = false;
    }
    if (myFiles.files.length < 3) {
        errorObject.error = 'imageError';
        errorObject.message = 'Please upload at least 3 images';
        getElement();
        return false;
    } else if (myFiles.files.length > 5) {
        errorObject.error = 'imageError';
        errorObject.message = 'Please upload a maximum of 5 images';
        getElement();
        return false;
    } else {
        errorObject.error = 'imageError';
        errorObject.message = '';
        return true;
    }
};

// UTILS
const containsCharacters = (field, code, error) => {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter", error);
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter and one number", error);
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter, one upper case letter and one number", error);
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter, one upper case letter, one number and one special character", error);
        case 5:
            // for emails
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(field, regEx, "Invalid Email", error));
        case 6:
            // check if only numbers
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
            return matchWithRegEx(field, regEx, "Please enter a valid phone number", error);
        default:
            return false
    }
};

const matchWithRegEx = (field, regEx, message, error) => {
    if (field.value.toLowerCase().match(regEx)) {
        setValid(field, error);
        return true;
    } else {
        setInvalid(field, message, error);
        return false;
    }
};
const notOnlyLetters = (field) => {
    return !/^[a-zA-Z ]+$/.test(field.value);
};


// MAIN VALIDATORS

export const loginValidate = event => {
    return validateMail(undefined, event, 'email') && validatePassword(undefined, event, 'password');
};

export const signUpValidate = event => {
    return validateName(undefined, event, 'displayName') && validateMail(undefined, event, 'email') &&
        validateSpecialPassword(undefined, event, 'password') && validateConfirmPassword(undefined, event, 'confirmPassword')
        && validateContact(undefined, event, 'contact') && validateAddress(undefined, event, 'address');
};


export const provideSpaceValidate = event => {
    return validateName(undefined, event, 'name') && validateMail(undefined, event, 'email')
        && validateContact(undefined, event, 'contact') && validateAddress(undefined, event, 'address')
        && validateRadioButtons(event, 'property_type', 'propertyError') &&
        validateDescription(undefined, event, 'description')
        && validateRegion(event, 'region') && validateTown(undefined, event, 'town') &&
        validateImages(undefined, event, 'property_images') &&
        validatePrice(undefined, event, 'price') &&
        validateRadioButtons(event, 'negotiation_status', 'negotiationError');
};

export const editSpaceValidate = event => {
    return validateName(undefined, event, 'name') && validateMail(undefined, event, 'email')
        && validateContact(undefined, event, 'contact') && validateAddress(undefined, event, 'address')
        && validateDescription(undefined, event, 'description')
        && validateRegion(event, 'region') && validateTown(undefined, event, 'town') &&
        validatePrice(undefined, event, 'price') &&
        validateRadioButtons(event, 'negotiation_status', 'negotiationError');
};

export const editProfileValidate = event => {
    return validateName(undefined, event, 'displayName') && validateMail(undefined, event, 'email')
        && validateContact(undefined, event, 'contact') && validateAddress(undefined, event, 'address');
};