export function validateEmail(email: string): string | null {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

  const requiredError = required(email);

  if (requiredError) {
    return requiredError;
  }

  return !emailRegex.test(email) ? "Некорректное значение email" : null;
}

export function validatePassword(password: string): string | null {
  const minLengthError = minLength(password, 5);

  if (minLengthError) {
    return minLengthError;
  }

  if (minLengthError) {
    return minLengthError;
  }

  return null;
}

export function confirmPassword(
  password: string,
  confirmation: string,
): string | null {
  return password !== confirmation ? "Пароли должны совпадать" : null;
}

function required(field: string): string | null {
  return !field ? "Данное поле обязательно" : null;
}

function minLength(field: string, length: number): string | null {
  return field.length < length
    ? `Поле должно иметь больше ${length} символов`
    : null;
}
