let addEmployee = () => {
    let submitButton = document.querySelector('.employee__form__input_submit');
    let validity = true;

    submitButton.addEventListener('click', () => {
        if(submitButton.value === 'Сохранить') {
            checkValidation (regExp, validity);
        }
    });
}

let activateValidation = (inputs, regExp, checkingArray) => {
    inputs.forEach(el => {
        for (let key in regExp) {
            if (el.name === key) {
                let result = regExp[key].test(el.value);

                if (!result) {
                    el.classList.add('error');
                    el.nextElementSibling.classList.add('employee__form__error_visible');
                    el.nextElementSibling.classList.remove('employee__form__error_transparent');
                    let mistake = key.value = false
                    checkingArray.push(mistake);
                } else {
                    el.classList.remove('error');
                    el.nextElementSibling.classList.add('employee__form__error_transparent');
                    el.nextElementSibling.classList.remove('employee__form__error_visible');
                }
            }
        }
    })
}