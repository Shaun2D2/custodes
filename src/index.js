const EXAMPLE_CUSTOM_CONFIG = {
    routes: {
        register: '/some/cool/auth',
        login: '/some/cool/login',
        logout: '/some/cool/logout'
    }
}

module.exports = (app, baseConfig) => {
    const config = {
        routes: {
            register: '/auth/register',
            login: '/auth/login',
            logout: '/auth/logout'
        },
        ...baseConfig
    };

    app.post(register, () => {});
    app.post(login, () => {});
    app.get(logout, () => {});
};