function Logger(debug_mode) {
    this.DEBUG_MODE = debug_mode !== false;
    this.ignore_next = false;
}

Logger.prototype.ignore_one_message = function () {
    this.ignore_next = true;
};

Logger.prototype.log = function (message) {
    if (this.ignore_next || !this.DEBUG_MODE) {
        this.ignore_next = false;
        return;
    }
    console.log(message);

};
Logger.prototype.warn = function (message) {
    if (this.ignore_next || !this.DEBUG_MODE) {
        this.ignore_next = false;
        return;
    }
    console.warn(message);

};
Logger.prototype.error = function (message) {
    if (this.ignore_next || !this.DEBUG_MODE) {
        this.ignore_next = false;
        return;
    }
    console.error(message);

};

debug = new Logger();
debug.warn('Debug mode is activated', 'warn');