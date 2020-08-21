let showEmployeeList = (data) => {
    let employeeList = document.querySelector('.employee__list');
    
    data.forEach(item => {
        let listWrapper = document.createElement('div');
        listWrapper.classList.add('employee__list__wrapper');
        listWrapper.setAttribute('data-id', item.id);
        employeeList.append(listWrapper);
    
        let employeeName = document.createElement('p');
        employeeName.classList.add('employee__list__name');
        employeeName.innerHTML = `${item.name}`;
        employeeName.setAttribute('data-id', item.id);
        listWrapper.append(employeeName);

        let employeePosition = document.createElement('p');
        employeePosition.classList.add('employee__list__position');
        employeePosition.innerHTML = `${item.position}`;
        employeePosition.setAttribute('data-id', item.id);
        listWrapper.append(employeePosition);

        let employeeEmail = document.createElement('span');
        employeeEmail.classList.add('employee__list__Email');
        employeeEmail.innerHTML = ` Email: ${item.Email}`
        employeeEmail.setAttribute('data-id', item.id);
        listWrapper.append(employeeEmail);

        let employeePhone = document.createElement('span');
        employeePhone.classList.add('employee__list__phone');
        employeePhone.innerHTML = `Телефон: ${item.phone}`;
        employeePhone.setAttribute('data-id', item.id);
        listWrapper.append(employeePhone);

        let editorWrapper = document.createElement('div');
        editorWrapper.classList.add('employee__list__editorWrapper');
        listWrapper.append(editorWrapper);

        let edit = document.createElement('div');
        edit.setAttribute('data-id', `${item.id}`);
        edit.classList.add('employee__list__edit');
        editorWrapper.append(edit);

        let deleteEmployee = document.createElement('div');
        deleteEmployee.setAttribute('data-id', `${item.id}`);
        deleteEmployee.classList.add('employee__list__delete');
        editorWrapper.append(deleteEmployee);
    })
    editAction (data);
    deleteAction(data);
}
