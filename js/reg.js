let regExp = {
    name: new RegExp(/^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/),
    position: new RegExp(/[A-zА-яЁё]{5}/),
    Email: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
    phone: new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/),
}