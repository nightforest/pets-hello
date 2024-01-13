import JustValidate from 'just-validate';

const searchFormValidation = () => {
    if (document.getElementById('search-form')) {
        const validator = new JustValidate('#search-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('selectCategory') &&
            validator.addField('#selectCategory', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputWhat') &&
            validator.addField('#inputWhat', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputWhere') &&
            validator.addField('#inputWhere', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
    }
}

export default searchFormValidation;