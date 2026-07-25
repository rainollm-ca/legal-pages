import Layout from '../components/Layout';

export default function Support() {
  return (
    <Layout
      title="Support"
      description="Get help with RainoMotion Social and connected social accounts."
    >
      <header className="documentHero">
        <div className="documentHeroInner">
          <p className="documentMeta">RainoMotion Social Help</p>
          <h1>Support</h1>
          <p className="documentIntro">
            Get help with access, account connections, publishing workflows, or privacy and
            data requests.
          </p>
        </div>
      </header>

      <article className="documentShell">
        <section className="documentSection">
          <span className="sectionNumber">01</span>
          <div className="documentContent">
            <h2>How to reach us</h2>
            <p>
              Email <a href="mailto:support@rainomotion.com">support@rainomotion.com</a> from
              an address associated with your RainoMotion Social account when possible.
            </p>
            <p>
              Include a brief description, the connected platform, the approximate time of
              the issue, and any relevant post or status details. Do not send passwords,
              OAuth tokens, or other secrets.
            </p>
            <div className="contactCard">
              <strong>Email support</strong>
              <a href="mailto:support@rainomotion.com">support@rainomotion.com</a>
            </div>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">02</span>
          <div className="documentContent">
            <h2>What support covers</h2>
            <ul>
              <li>sign-in and RainoMotion Social account access;</li>
              <li>connecting or disconnecting supported social accounts;</li>
              <li>media, captions, previews, schedules, and publishing controls;</li>
              <li>understanding publishing status shown in the service;</li>
              <li>privacy, access, correction, and deletion requests; and</li>
              <li>reporting suspected misuse or a security concern.</li>
            </ul>
            <p>
              We can investigate RainoMotion Social, but we cannot change a decision made
              by TikTok or another third-party platform. Platform-specific account appeals
              must be directed to that platform.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">03</span>
          <div className="documentContent">
            <h2>Our response process</h2>
            <p>
              We review requests, may ask for information needed to locate the relevant
              account or reproduce an issue, and respond as reasonably practicable based on
              the request&apos;s nature and complexity. Privacy requests may require
              identity or account-ownership verification before we act.
            </p>
            <p>
              We do not promise a fixed response time, but we prioritize security concerns
              and requests involving access to personal information.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">04</span>
          <div className="documentContent">
            <h2>Disconnect a TikTok account</h2>
            <ol>
              <li>Sign in to RainoMotion Social.</li>
              <li>Open the connected accounts or channels area.</li>
              <li>Select the TikTok account you want to remove.</li>
              <li>Choose the available Disconnect or Remove option and confirm.</li>
            </ol>
            <p>
              Interface wording may change as the service evolves. You can separately
              revoke access in TikTok&apos;s app permissions. For full instructions and
              deletion options, visit the <a href="/data-deletion">Data Deletion page</a>.
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
