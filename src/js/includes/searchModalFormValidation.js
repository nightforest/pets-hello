import JustValidate from 'just-validate';

const searchModalFormValidation = () => {
    if (document.getElementById('modal-search-form')) {
        const validator = new JustValidate('#modal-search-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('selectCategoryModal') &&
            validator.addField('#selectCategoryModal', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputWhatModal') &&
            validator.addField('#inputWhatModal', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
        
        document.getElementById('inputWhereModal') &&
            validator.addField('#inputWhereModal', [
                {
                    rule: 'required',
                    errorMessage: "* Required",
                },
            ]);
    }
}

export default searchModalFormValidation;