interface ValidReturn {
    continueWork: boolean;
    message: string;
}

export const validateValues = (inputKey: string, inputValue: string
): ValidReturn => {
    const passwordValid: RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/

    switch (inputKey) {
        case "userName":
            if (inputValue.length < 5
            ) return {
                continueWork: false, message: "Имя должно состоять минимум из 5 символов"
            };
            break;
        case "userEmail":
            const emailRegex: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
            const validEmail = emailRegex.test(inputValue);

            if (inputValue.length === 0) return {
                continueWork: false, message: "Заплните электронную почту"
            };

            if (!validEmail) return {
                continueWork: false, message: "Неверный адрес электронной почты"
            };

            break;
        case "userPassword":
        case "confirmUserPassword":
            const validPassword = passwordValid.test(inputValue);

            if (inputValue.length === 0) return {
                continueWork: false,
                message: "Заполните пароль",
            };

            if (!validPassword) return {
                continueWork: false,
                message: "Пароль должен содержать английские буквы и цифры, минимум один специальный символ !@#$%^&* и не содержать пробелов.",
            };

            break;
        case "categoryType":
            if (inputValue.length < 3
            ) return {
                continueWork: false, message: "Название категории должно состоять минимум из 3 символов"
            };
            break;
        default:
            return {
                continueWork: false,
                message: "Произошла ошибка, повторите попытку",
            };
    }
    return { continueWork: true, message: "" };
};
