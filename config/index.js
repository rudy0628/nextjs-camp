const dev = process.env.NODE_ENV !== 'production';

export const server = dev
	? 'http://localhost:3000'
	: 'https://nextjs-camp-rudy0628.vercel.app';
