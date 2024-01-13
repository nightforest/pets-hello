import JustValidate from 'just-validate';

const contactFormValidation = () => {
    if (document.getElementById('contact-form')) {
        const validator = new JustValidate('#contact-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);

        document.getElementById('inputLastName') &&
            validator.addField('#inputLastName', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputCompanyName') &&
            validator.addField('#inputCompanyName', [
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
        
        document.getElementById('textarea') &&
            validator.addField('#textarea', [
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
    }
}

export default contactFormValidation;