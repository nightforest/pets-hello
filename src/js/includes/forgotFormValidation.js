import JustValidate from 'just-validate';

const forgotFormValidation = () => {
    if (document.getElementById('forgot-form')) {
        const validator = new JustValidate('#forgot-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputForgotEmail') &&
            validator.addField('#inputForgotEmail', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
    }
}

export default forgotFormValidation;