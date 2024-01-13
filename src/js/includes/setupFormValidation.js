import JustValidate from 'just-validate';

const setupFormValidation = () => {
    if (document.getElementById('setup-form')) {
        const validator = new JustValidate('#setup-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputSetupPassword') &&
            validator.addField('#inputSetupPassword', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputConfirmSetupPassword') &&
            validator.addField('#inputConfirmSetupPassword', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('checkboxAgreeSetup') &&
            validator.addField('#checkboxAgreeSetup', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
    }
}

export default setupFormValidation;