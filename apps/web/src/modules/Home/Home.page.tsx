import Image from 'shared/components/base/Images/Image';
import NextLink from 'shared/components/Base/Navigations/NextLink';

import styles from './Home.page.module.css';

import JokeList from '@/modules/Joke/components/JokeList';

function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Image
          alt="Vercel Logo"
          className="flex justify-center items-center min-h-[150px] sm:min-h-[300px] rounded h-full object-fit"
          effect="blur"
          src="https://gading.dev/media/banners/1.jpg"
          width={500}
          wrapperClassName="mt-10 max-w-full -mb-10 rounded"
        />

        <p className={styles.description}>
          Visit the demo API{' '}
          <NextLink href="/api/jokes">
            <code className={styles.code}>/api/jokes</code>
          </NextLink>
        </p>

        <NextLink className="text-fuchsia-400 text-center mt-5 mb-5 hover:underline underline-offset-4" href="/about?text=Hello%20World">
          About Page
        </NextLink>

        {/* Example calling Server Component inside Server Component */}
        <JokeList />

        <div className={styles.grid}>
          <a className={styles.card} href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a className={styles.card} href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            className={styles.card}
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Image alt="Vercel Logo" size={32} src="https://gading.dev/assets/icons/app/logo.png" />
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
