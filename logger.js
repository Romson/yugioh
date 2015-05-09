var DEBUG_MODE = true;


Logger = {};
Logger.LOG_LEVEL = {
    INFO: 'info'
    , WARN : 'warn'
    , ERROR: 'error'
};


function console_log(message, type) {
    type = type || Logger.LOG_LEVEL.INFO;
    if (DEBUG_MODE && window.console && window.console.log) {
        switch (type){
            case Logger.LOG_LEVEL.INFO:
                console.log(message);
                break;
            case Logger.LOG_LEVEL.WARN:
                console.warn(message);
                break;
            case Logger.LOG_LEVEL.ERROR:
                console.error(message);
                break;
        }
    }
}

console_log('Debug mode is activated', 'warn');