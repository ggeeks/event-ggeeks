import valid from 'validator';

function isEmpty(value) {
  return valid.isEmpty(value);
}

function isEmail(value) {
  return valid.isEmail(value);
}

function isPhone(value) {
  return valid.isMobilePhone(value, 'en-IN');
}

function regValidation(data){
    const errors = {};

    let nameError = isEmpty(data.name) ? 'Name is required' : '';
    let emailError = isEmpty(data.email) ? 'Email is required' : (!isEmail(data.email) ? 'Please provide a valid Email' : '');
    let phoneNumberError = isEmpty(String(data.phoneNumber)) ? 'Phone Number is required' : (!isPhone(String(data.phoneNumber)) ? 'Please provide a valid Phone Number' : '');

    if (nameError) errors.name = 'Name is required';
    if (emailError) errors.email = emailError;
    if (phoneNumberError) errors.phoneNumber = phoneNumberError;

    return { errors };
}

export default regValidation;