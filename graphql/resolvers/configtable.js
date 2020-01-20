
const configModel = require('../../models/configtable');

module.exports = {
    getConfigDetails: async () => {
        try {
            let result = await configModel.find({});
            console.log(result);
            return result;
        } catch (err) {
        throw err;
        }
    }
    
};

