import JustValidate from 'just-validate';

const signUpFormValidation = () => {
    if (document.getElementById('sign-up-form')) {
        const validator = new JustValidate('#sign-up-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);

        document.getElementById('inputEmail') &&
            validator.addField('#inputEmail', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputPassword') &&
            validator.addField('#inputPassword', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputConfirmPassword') &&
            validator.addField('#inputConfirmPassword', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);

        document.getElementById('checkboxAgree') &&
            validator.addField('#checkboxAgree', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('checkboxAccept') &&
            validator.addField('#checkboxAccept', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
    }
}

export default signUpFormValidation;