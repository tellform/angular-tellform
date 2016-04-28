module.exports = function() {
    var service = {
        _currentUser: null,
        get currentUser(){
            return this._currentUser;
        },
        ensureHasCurrentUser: function() {
            return null;
        },
        isAuthenticated: function() {
            return false;
        },
        getUserState: function() {
            return '';
        },
        login: function() {
        },
        logout: function() {
        }
    };
    return service;
};
