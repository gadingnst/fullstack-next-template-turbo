import createSSRProps, { type SSRNextFunction } from './createSSRMiddleware';

/**
 * USE ONLY in "NextJS Pages Route"!
 * custom middleware for getServerSideProps, so yoi will be no longer to import `GetServerSidePropsContext` and `GetServerSidePropsResult` anymore.
 * @usage
 * in NextJS page file:
 *
 * export const getServerSideProps = withSSRProps<YOUR_PROP_TYPE>((ctx) => {
 *   // normal getServerSideProps code
 * });
 */
export const withSSRProps = <T>(next: SSRNextFunction<T>) => createSSRProps<T>(next);

export default { withSSRProps };
