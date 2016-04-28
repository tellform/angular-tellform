'use strict';

module.exports = function(Forms) {
    var form = window.form;
    form.visible_form_fields = _.filter(form.form_fields, function(field){
        return (field.deletePreserved === false);
    });
    return form;
};