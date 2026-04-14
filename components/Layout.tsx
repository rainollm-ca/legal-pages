import { ReactNode } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <>
      <Head>
        <title>{title || 'Postiz'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>Postiz</div>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Postiz. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
