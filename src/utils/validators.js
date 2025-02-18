/**
 * Validate email address
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

/**
 * Validate phone number
 * @param {string} phone
 * @returns {boolean}
 */
export const validatePhoneNumber = (phone) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phone));
};

/**
 * Validate credit card number using Luhn algorithm
 * @param {string} cardNumber
 * @returns {boolean}
 */
export const validateCreditCardNumber = (cardNumber) => {
  const re = /^\d{16}$/;
  if (!re.test(String(cardNumber))) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

/**
 * Validate postal code (US ZIP code format)
 * @param {string} zip
 * @returns {boolean}
 */
export const validatePostalCode = (zip) => {
  const re = /^\d{5}(-\d{4})?$/;
  return re.test(String(zip));
};

/**
 * Validate non-empty string
 * @param {string} value
 * @returns {boolean}
 */
export const validateNonEmptyString = (value) => {
  return value.trim().length > 0;
};
