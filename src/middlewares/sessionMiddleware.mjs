import session from 'express-session';

const sessionMiddleware = session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
});

export default sessionMiddleware