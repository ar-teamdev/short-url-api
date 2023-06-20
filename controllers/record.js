const record = require('../models/record');
const validate = require('../validates/record');
const { handleResponse, handleError } = require('../services/utils');

const createRecord = async (req, res) =>{
    try {
        const validateBody = validate.checkRecordSchema(req.body);

        if(validateBody){

            const error = new Error('MISSING_OR_INVALID_PARAMETER');
            error.validateBody = validateBody;
            throw error;
        }

        let recordData = {
            ...req.body, 
        }

        const recordResponse = await record.create(recordData);
        if(recordResponse){
            handleResponse(res, undefined, 'CREATED');
        }
    } catch (error) {
        handleError(res, error.message, error.validateBody);
    }
}

const getAllRecord = async (req, res) =>{
    try {

        const recordResponse = await record.find({...req.query}).skip(req.query.offset * req.query.limit).limit(req.query.limit);

        const rowCount =  await record.count({...req.query});

        handleResponse(res, recordResponse, 'SUCCESS', rowCount);
    } catch (error) {
        handleError(res, error.message);
    }
}


module.exports ={
    createRecord,
    getAllRecord
}