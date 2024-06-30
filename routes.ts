/**
 * An array of routers that are accessible to the public
 */
export const publicRoutes = [
    '/',
    '/blog',
    '/contacts'
];

/**
 * An array of routers that are used for authentication
 */
export const authRoutes = [
    '/auth/login',
    '/auth/register',
]

/**
 * The prefix for API authentication routes
 */
export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/';