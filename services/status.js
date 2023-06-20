module.exports = Object.freeze({
    SUCCESS: {
        STATUS_CODE:  200,
        RESULT_DESC: 'Success',
        RESULT_CODE: '20000',
        DEVELOPER_MESSAGE: 'Success',
    },
    CREATED: {
        STATUS_CODE:  201,
        RESULT_CODE: '20100',
        DEVELOPER_MESSAGE: 'Created',
    },
    MISSING_OR_INVALID_PARAMETER: {
        STATUS_CODE: 403,
        RESULT_DESC: 'Forbidden',
        RESULT_CODE: '40300',
        RESULT_MESSAGE: 'Missing or invalid parameter',
    },
    USER_EXIST: {
        STATUS_CODE: 409,
        DEVELOPER_MESSAGE: 'Conflict',
        RESULT_CODE: '40901',
        RESULT_MESSAGE: 'User already exists',
    },
    DATA_EXIST: {
        STATUS_CODE: 403,
        RESULT_CODE: '40301',
        DEVELOPER_MESSAGE: 'Data exist',
        RESULT_DESC: 'Forbidden',
        RESULT_MESSAGE: 'Data exist',
    },
    UNAUTHORIZED: {
        STATUS_CODE: 401,
        RESULT_DESC: 'Unauthorized',
        RESULT_CODE: '40104',
        RESULT_MESSAGE: 'Unauthorized',
    },
    ACCESS_DENIED: {
        STATUS_CODE: 401,
        RESULT_CODE: '40101',
        RESULT_MESSAGE: 'Access denied',
        DEVELOPER_MESSAGE: 'Access denied',
    },
    UNKNOWN_URL: {
        STATUS_CODE: 404,
        RESULT_DESC: 'Not Found',
        RESULT_CODE: '40400',
        RESULT_MESSAGE: 'Unknow URL',
    },
    DATA_NOT_FOUND: {
        STATUS_CODE: 404,
        RESULT_CODE: '40401',
        RESULT_MESSAGE: 'Data not found',
    },
    USER_NOT_ACTIVE: {
        STATUS_CODE: 403,
        RESULT_DESC: 'Forbidden',
        RESULT_CODE: '40303',
        RESULT_MESSAGE: 'User is not active'
    },
    BAD_REQUEST: {
        STATUS_CODE: 400,
        RESULT_CODE: '40001',
        RESULT_MESSAGE: 'Bad request',
        DEVELOPER_MESSAGE: 'Bad request',
    },

    ////
    SUCCESS_SUSPENDOVERLIMIT: {
        RESULT_DESC: 'Success',
        RESULT_CODE: '20010',
        RESULT_MESSAGE: 'Suspend count over the limit',
    },
    ENROLLMENT_INFO_RETRIEVE_UNAUTHORIZED: {
        STATUS_CODE: 401,
        RESULT_DESC: 'Unauthorized',
        RESULT_CODE: '40103',
        RESULT_MESSAGE: 'Client pin unauthorization to access this data',
    },
    PRECON_FAILED_STCODE: {
        RESULT_DESC: 'Precondition Failed',
        RESULT_CODE: '41201',
        RESULT_MESSAGE: 'Verify failed from DOPA',
    },
    PRECON_FAILED_MISSMATCH: {
        RESULT_DESC: 'Precondition Failed',
        RESULT_CODE: '41202',
        RESULT_MESSAGE: 'Condition mismatch',
    },
    PIN_WAS_ALREADY_SET: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40903',
        RESULT_MESSAGE: 'Pin was already set',
    },
    STATE_ALREADY_EXIST: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40901',
        RESULT_MESSAGE: 'State already exists',
    },
    REF_ID_ALREADY_EXIST: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40901',
        RESULT_MESSAGE: 'Ref Id already exists',
    },
    NODE_NAME_EXIST: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40901',
        RESULT_MESSAGE: 'NodeName already exists',
    },
    CONFLICT_VERIFY_FAIL: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40931',
        RESULT_MESSAGE: 'Verification was failed',
    },
    CONFLICT_RP_GOT_DATA: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40941',
        RESULT_MESSAGE: 'RP got the data',
    },
    RP_NOTFOUND: {
        RESULT_DESC: 'Unauthorized',
        RESULT_CODE: '40101',
        RESULT_MESSAGE: 'RP has not the permission to access this scope',
    },
    STATE_NOTFOUND: {
        RESULT_DESC: 'Bad Request',
        RESULT_CODE: '40004',
        RESULT_MESSAGE: 'State not found',
    },

    NOT_FOUND_REQUESTER: {
        RESULT_DESC: 'Not Found',
        RESULT_CODE: '40402',
        RESULT_MESSAGE: 'Requestor not found',
    },

    NO_H2: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40951',
        RESULT_MESSAGE: 'H2 does not retrive from block chain',
    },
    PRECONDITON_FAILED: {
        RESULT_DESC: 'Success',
        RESULT_CODE: '20030',
    },
    PRECONDITON_FAILED_OVERLIMIT: {
        RESULT_DESC: 'Forbidden',
        RESULT_CODE: '40301',
        RESULT_MESSAGE: 'Face failed 3 time',
    },
    PIN_FAIL: {
        STATUS_CODE: 400,
        RESULT_DESC: 'Bad Request',
        RESULT_CODE: '40003',
        RESULT_MESSAGE: 'Verify PIN failed',
    },
    PIN_FAIL_3TIMES: {
        RESULT_DESC: 'Forbidden',
        RESULT_CODE: '40302',
        RESULT_MESSAGE: 'PIN confirm failed 3 time',
    },
    RP_NO_PERMISS: {
        RESULT_DESC: 'Unauthorized',
        RESULT_CODE: '40102',
        RESULT_MESSAGE: 'RP has not the permission to access this aal level',
    },
    INVALID_PERIOD_CODE: {
        RESULT_CODE: '40002',
        DEVELOPER_MESSAGE: 'Invalid period code',
    },

    NOT_ALLOWED: {
        RESULT_CODE: '40102',
        DEVELOPER_MESSAGE: 'Not Allowed',
    },
    INVALID_CREDENTIALS: {
        RESULT_CODE: '40106',
        DEVELOPER_MESSAGE: 'Invalid credentials',
    },
    FORBIDDEN: {
        RESULT_CODE: '40300',
        DEVELOPER_MESSAGE: 'Forbidden',
    },

    STATUS_INACTIVE: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40902',
        RESULT_MESSAGE: 'Status is inactive',
    },
    PIN_NOTSET: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40904',
        RESULT_MESSAGE: 'Pin does not set yet',
    },

    NDID_DATA_NOT_FOUND: {
        STATUS_CODE: 200,
        RESULT_CODE: '20020',
        RESULT_DESC: 'Success',
        DEVELOPER_MESSAGE: 'Data not found',
        RESULT_MESSAGE: 'Data not found',
    },
    CONFLICT: {
        RESULT_CODE: '40900',
        DEVELOPER_MESSAGE: 'Conflict',
    },
    SYSTEM_ERROR: {
        STATUS_CODE: 500,
        RESULT_DESC: 'Internal Server Error',
        RESULT_CODE: '50000',
        RESULT_MESSAGE: 'System Error',
    },

    SYSTEM_ERROR_NDID: {
        STATUS_CODE: 500,
        RESULT_DESC: 'Internal Server Error',
        RESULT_CODE: '50000',
        RESULT_MESSAGE: 'System Error',
        Error_Message: 'Unautorize from NDID',
    },

    SYSTEM_ERROR_REPI: {
        STATUS_CODE: 500,
        RESULT_DESC: 'Internal Server Error',
        RESULT_CODE: '50000',
        RESULT_MESSAGE: 'System Error',
        Error_Message: 'Unautorize from REPI',
    },

    SYSTEM_ERROR_MNID: {
        STATUS_CODE: 500,
        RESULT_DESC: 'Internal Server Error',
        RESULT_CODE: '50000',
        RESULT_MESSAGE: 'System Error',
        Error_Message: 'Unautorize from MNID',
    },

    SERVER_BUSY: {
        RESULT_CODE: '50300',
        DEVELOPER_MESSAGE: 'Server busy',
    },
    SERVER_UNAVAILABLE: {
        RESULT_CODE: '50301',
        DEVELOPER_MESSAGE: 'Server unavailable',
    },
    NOT_A_MEMBER: {
        RESULT_DESC: 'Success',
        RESULT_CODE: '20020',
        RESULT_MESSAGE: 'Data not found',
    },
    NOT_FOUND_TC: {
        RESULT_DESC: 'Bad Request',
        RESULT_CODE: '40005',
        RESULT_MESSAGE: 'Term and condition not found',
    },
    MSISDN_IS_REGISTERING: {
        RESULT_DESC: 'Conflict',
        RESULT_CODE: '40961',
        RESULT_MESSAGE: 'Msisdn is registering',
    },
    TERM_AND_CONDITION_NOT_FOUND: {
        STATUS_CODE: 400,
        RESULT_CODE: '40005',
        RESULT_DESC: 'Bad Request',
        RESULT_MESSAGE: 'Term and condition not found',
    },
    TERM_AND_CONDITION_OLDER: {
        STATUS_CODE: 400,
        RESULT_CODE: '40006',
        RESULT_DESC: 'Bad Request',
        RESULT_MESSAGE: 'Term and condition is older than your previous version',
    },
    DATA_NOT_FOUND_SUCCESS: {
        STATUS_CODE: 200,
        RESULT_CODE: '20020',
        RESULT_DESC: 'Success',
        RESULT_MESSAGE: 'Data not found',
    },
    NOT_FOUND_USER: {
        RESULT_DESC: 'Not Found',
        RESULT_CODE: '40401',
        RESULT_MESSAGE: 'User not found',
    },
    INCORRECT_PASSWORD: {
        STATUS_CODE: 403,
        RESULT_DESC: 'Forbidden',
        RESULT_CODE: '40304',
        RESULT_MESSAGE: 'Incorrect password',
    },
});