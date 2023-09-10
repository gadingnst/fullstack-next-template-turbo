/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable turbo/no-undeclared-env-vars */
/** @see https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables */

/** Process ENV */
export const NODE_ENV = process.env.NODE_ENV || 'production';
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const SECRET_APP_KEY = process.env.SECRET_APP_KEY;

/** NEXT_PUBLIC ENV */

/** Custom ENV */
export const IS_DEV = NODE_ENV !== 'production';
export const SITE_NAME = 'Fullstack Next.js Template';
