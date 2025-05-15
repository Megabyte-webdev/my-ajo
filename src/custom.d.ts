// Allow importing .jsx files without TypeScript complaints
declare module './*.jsx';

// Optional: Specific modules if you really want individual handling
declare module './pages/ComingSoon';
declare module '../utils/notifications/OnFailure';
declare module '../utils/notifications/OnSuccess';
declare module '../utils/formmaters';

// If using react-helmet (older version)
declare module 'react-helmet';
