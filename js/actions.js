let checkValidation = (regExp, validity) => {
    let inputs = document.querySelectorAll('.employee__form__input_error');
    validity = true;
    let checkingArray = [];

    activateValidation(inputs, regExp, checkingArray);
    checkingArray.find(item => item === false ? validity = false : true);
    saveEmployee(validity);
}

let editAction = (array, regExp) => {
    let submitButton = document.querySelector('.employee__form__input_submit');
    let employeeList = document.querySelector('.employee__list');
    let editEmployee = document.querySelectorAll('.employee__list__edit');
    let inputs = document.querySelectorAll('.employee__form__input_error');

    editEmployee.forEach(element => {
        let validity = true;
        element.addEventListener('click', (e) => {

            submitButton.value = 'Редактировать';

            let editedEmployee = {
                id: e.target.dataset.id,
            };

            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].name === 'name') {
                    {
                        inputs[i].value = array.find(item => item.id == e.target.dataset.id).name;
                        editedEmployee.name = inputs[i].value;
                    }
                }
                if (inputs[i].name === 'position') {
                    {
                        inputs[i].value = array.find(item => item.id == e.target.dataset.id).position;
                        editedEmployee.position = inputs[i].value;
                    }
                }
                if (inputs[i].name === 'Email') {
                    {
                        inputs[i].value = array.find(item => item.id == e.target.dataset.id).Email;
                        editedEmployee.Email = inputs[i].value;
                    }
                }
                if (inputs[i].name === 'phone') {
                    {
                        inputs[i].value = array.find(item => item.id == e.target.dataset.id).phone;
                        editedEmployee.phone = inputs[i].value;
                    }
                }
            }
            let checkingArray = [];


            activateValidation(inputs, regExp, checkingArray);
            submitButton.addEventListener('click', () => {
                if (submitButton.value = 'Редактировать') {
                    array.splice(array.find(item => item.id === e.target.dataset.id), 1, array.push(editedEmployee));
                    submitButton.value = 'Сохранить';
                    employeeList.innerHTML = '';
                    showEmployeeList(array);
                    console.log(array);
                }
            })

        });

    })
}

let deleteAction = (array) => {
    let deleteEmployee = document.querySelectorAll('.employee__list__delete');
    let employeeData = document.querySelectorAll('.employee__list__wrapper');

    for (let i = 0; i < deleteEmployee.length; i++) {
        deleteEmployee[i].addEventListener('click', function (e) {
            if (window.confirm('Удалить сотрудника?')) {
                array.splice(array.find(item => item.id == e.target.dataset.id), 1);
                Array.from(employeeData).find(el => e.target.dataset.id == el.dataset.id).remove();
            }
        });
    }
}

let saveEmployee = (validity) => {
    let inputs = document.querySelectorAll('.employee__form__input_error');
    let employeeList = document.querySelector('.employee__list');


    if (validity === true) {
        let employee = {
            id: Math.floor(Math.random() * 10000000),
        };
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name === 'name') {
                employee.name = inputs[i].value;
                inputs[i].value = '';
            }
            if (inputs[i].name === 'position') {
                employee.position = inputs[i].value;
                inputs[i].value = '';
            }
            if (inputs[i].name === 'Email') {
                employee.Email = inputs[i].value;
                inputs[i].value = '';
            }
            if (inputs[i].name === 'phone') {
                employee.phone = inputs[i].value;
                inputs[i].value = '';
            }
        }
        data.find(item => employee.name === item.name && employee.Email === item.Email) ? alert('Такой работник уже есть') : data.push(employee);
        employeeList.innerHTML = '';
        showEmployeeList(data);
    }
}