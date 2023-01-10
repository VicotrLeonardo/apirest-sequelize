const formConfig = require('../config/form-config');


module.exports = {

    async getFormConfig(req, res) {
        
        if(formConfig.columns && formConfig.columns.length)
            return res.json(formConfig.columns)
        else
        return res.status(500).send({'message': 'Arquivo de Configuração Vázio'});   
    }
}

