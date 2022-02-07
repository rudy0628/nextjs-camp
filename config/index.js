const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : process.env.Vercel_URL;
