import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width"/>
      <link rel="preload" as="image" href="/vercel.svg"/>
      <link rel="preload" as="image" href="/next.svg"/>
      <link rel="preload" as="image" href="/thirteen.svg"/>
      <meta name="next-head-count" content="5"/>
      <meta property="og:locale" content="en_US"/>
      <meta property="og:type" content="article"/>
      <meta name="description" content=""/>
      <meta property="og:title" content=""/>
      <meta property="og:description" content=""/>
      <meta property="og:image" content="https://sciton.info/wp-content/uploads/2023/02/97.jpeg"/>
      <link rel="preload" href="/_next/static/media/2aaf0723e720e8b9.p.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
      <link rel="preload" href="/_next/static/css/876d048b5dab7c28.css" as="style"/>
      <link rel="stylesheet" href="/_next/static/css/876d048b5dab7c28.css" data-n-g=""/>
      <link rel="preload" href="/_next/static/css/77e878d72d98d937.css" as="style"/>
      <link rel="styles/heet" href="/_next/static/css/77e878d72d98d937.css" data-n-p=""/>
      <script defer nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js">
      </script><script src="/_next/static/chunks/webpack-8fa1640cc84ba8fe.js" defer></script>
      <script src="/_next/static/chunks/framework-2c79e2a64abdb08b.js" defer></script>
      <script src="/_next/static/chunks/main-f11614d8aa7ee555.js" defer></script>
      <script src="/_next/static/chunks/pages/_app-70d58eb909199b8c.js" defer></script>
      <script src="/_next/static/chunks/pages/index-7cdff294af1d4061.js" defer></script>
      <script src="/_next/static/Lfu98fnLrK2cl-sP6LKZs/_buildManifest.js" defer></script>
      <script src="/_next/static/Lfu98fnLrK2cl-sP6LKZs/_ssgManifest.js" defer></script>
</Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
