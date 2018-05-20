
let lang = localStorage.getItem('language') || 'zh_CN'
let text = require('./' + lang)

var rules = {
    validateMobile: (rule, value, callback) => {
        let errors = []
        if (!/^(1[0-9]{10})$/.test(value)) {
            errors.push(new Error(text.mobile))
        }
        callback(errors)
    },
    validateNumber: (rule, value, callback) => {
        let errors = []
        if (!/^\d+\.?\d{0,2}$/.test(value)) {
            errors.push((new Error(text.number)))
        }
        callback(errors)
    },
    validateDecimal2: (rule, value, callback) => {
        let errors = []
        if (!/^[1-9]\d*(\.\d{0,2})?$|^0(\.\d{0,2})?$/.test(value)) {
            errors.push(new Error(text.decimal2))
        }
        callback(errors)
    },
    validateInteger: (rule, value, callback) => {
        let errors = []
        if (!/^[\-\+]?\d+$/.test(value)) {
            errors.push(new Error(text.integer))
        }
        callback(errors)
    },
    validateSpecialCharacter: (rule, value, callback) => {
        let errors = []
        if (!/^[`~!@#$%^&*()+=|{}_':;',[].<>\/?~！\\@#￥%……&*（）——+|{}【】‘；：”“’。，、？]*$/.test(value)) {
            errors.push(new Error(text.specialCharacter))
        }
        callback(errors)
    }
}

export default rules

