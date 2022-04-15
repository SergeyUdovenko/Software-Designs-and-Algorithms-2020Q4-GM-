const userService = require('./lib/user-service');
const sessionManager = require('./lib/session-manager');

const authenticator = {
    login: (userName, password) => {
        const userByName = userService.getUserByName(userName);
        return authenticator.loginUser(userByName, password);
    },

    loginUser: (user, password) => {

        if (userService.isPasswordCorrect(user, password)) {
            sessionManager.setCurrentUser(user);
            return user;
        }

        return null;
    },

};

module.exports = authenticator;
