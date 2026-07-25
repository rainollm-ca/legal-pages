import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

const productUrl = 'https://postiz.rainomotion.com';

const legalLinks = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/support', label: 'Support' },
  { href: '/data-deletion', label: 'Data Deletion' },
];

export default function Layout({
  children,
  title,
  description = 'RainoMotion Social helps creators and organizations plan, preview, and publish social media content.',
}: {
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const pageTitle = title ? `${title} — RainoMotion Social` : 'RainoMotion Social';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.site}>
        <a className={styles.skipLink} href="#main-content">
          Skip to content
        </a>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link className={styles.brand} href="/" aria-label="RainoMotion Social home">
              <span className={styles.brandMark} aria-hidden="true">
                R
              </span>
              <span>RainoMotion Social</span>
            </Link>
            <nav className={styles.primaryNav} aria-label="Primary navigation">
              {legalLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              className={styles.appLink}
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open app <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <main className={styles.main} id="main-content">
          {children}
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerAbout}>
              <Link className={styles.footerBrand} href="/">
                RainoMotion Social
              </Link>
              <p>Thoughtful publishing controls for social teams and independent creators.</p>
              <p className={styles.independence}>
                RainoMotion Social is an independent service and is not affiliated with,
                endorsed by, or sponsored by TikTok.
              </p>
            </div>
            <nav className={styles.footerNav} aria-label="Footer navigation">
              <Link href="/">Product</Link>
              {legalLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
              <a href={productUrl} target="_blank" rel="noopener noreferrer">
                Open app ↗
              </a>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} RainoMotion Social</span>
            <a href="mailto:support@rainomotion.com">support@rainomotion.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}
