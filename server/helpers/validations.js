const _ = require("lodash");

// validates the datas that is being sent from client
module.exports = (fieldsToValidate, data) => {
  let errors = {};
  const fields = {
    name: {
      message: "name field is required",
      validate: () => {
        const value = _.get(data, "name");
        if (value) {
          return true;
        }
        return false;
      }
    },
    username: {
      message:
        "Username is invalid, can have only letters, numbers and underscores(_)",
      validate: () => {
        // validates the username field
        const value = _.get(data, "username");
        if (value) {
          return true;
        }
        return false;
      }
    },
    password: {
      message:
        "Invalid password provided, passwords should be 6 and above in length and can contain",
      validate: () => {
        // validates the password field
        const value = _.get(data, "password");
        if (value) {
          return true;
        }
        return false;
      }
    }
  };

  _.each(fieldsToValidate, field => {
    const currentField = _.get(fields, field);
    if (currentField) {
      const fieldIsValid = currentField.validate();
      if (!fieldIsValid) {
        errors = { ...errors, [field]: _.get(currentField, "message") };
      }
    }
  });
  return errors;
};
