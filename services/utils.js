var status = require('../services/status');

const handleResponse = (res, data, responseType, rowCount) => {
    const { RESULT_CODE, DEVELOPER_MESSAGE, STATUS_CODE } = status[responseType];
    
    res.status(STATUS_CODE).send({ resultCode: RESULT_CODE, developerMessage: DEVELOPER_MESSAGE, resultData: data, rowCount: rowCount});
}
const handleError = (res, responseType, message) => {
    const { RESULT_CODE, RESULT_MESSAGE, STATUS_CODE, DEVELOPER_MESSAGE } = status[responseType] || status['SYSTEM_ERROR'];
    
    res.status(STATUS_CODE).send({ resultCode: RESULT_CODE, developerMessage: DEVELOPER_MESSAGE, errorMessage: message || RESULT_MESSAGE});
}

function generateString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

module.exports = {
    handleResponse,
    handleError,
    generateString
}