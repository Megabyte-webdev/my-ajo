declare module 'react-helmet'

// declarations.d.ts

// Allow importing .jsx files without TypeScript complaints
declare module '*.jsx';

// Suppress missing modules (only if you absolutely must)
declare module './pages/ComingSoon';
declare module '../utils/notifications/OnFailure';
declare module '../utils/notifications/OnSuccess';
declare module '../utils/formmaters';
