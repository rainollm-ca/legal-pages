import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout
      title="Privacy Policy"
      description="How RainoMotion Social collects, uses, retains, and protects data."
    >
      <header className="documentHero">
        <div className="documentHeroInner">
          <p className="documentMeta">Effective July 25, 2026</p>
          <h1>Privacy Policy</h1>
          <p className="documentIntro">
            This policy explains how RainoMotion Social handles information when you use
            our social-content management service or connect a TikTok account.
          </p>
          <p className="documentIntro">
            RainoMotion Social is operated by Rabiaa Alomar, operating under the RainoMotion
            name in Ontario, Canada. Rabiaa Alomar is the operator and data controller
            responsible for the processing described in this policy.
          </p>
        </div>
      </header>

      <article className="documentShell">
        <section className="documentSection">
          <span className="sectionNumber">01</span>
          <div className="documentContent">
            <h2>Information we collect</h2>
            <p>
              The information RainoMotion Social processes depends on the features you use.
              For TikTok Login Kit and the Content Posting API, the categories may include:
            </p>
            <ul>
              <li>
                <strong>TikTok account identifiers and profile information</strong> made
                available through your authorization, such as a user identifier, display
                name, username, and profile image;
              </li>
              <li>
                <strong>OAuth access token and refresh token</strong> used to maintain the
                connection and perform actions you request;
              </li>
              <li>
                <strong>Media</strong> you upload or select for a post;
              </li>
              <li>
                <strong>Captions and publishing settings</strong>, including scheduling or
                other post options you choose; and
              </li>
              <li>
                <strong>Publishing status</strong> returned for submitted content, such as
                whether a publishing request is pending, completed, or unsuccessful.
              </li>
            </ul>
            <p>
              We may also process basic service and security records needed to operate and
              protect RainoMotion Social, such as account, session, and technical log data.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">02</span>
          <div className="documentContent">
            <h2>Why we use this information</h2>
            <p>We use the information above to:</p>
            <ul>
              <li>connect and identify the social accounts you authorize;</li>
              <li>display account information inside your publishing workspace;</li>
              <li>prepare previews and preserve your media, captions, and settings;</li>
              <li>publish or schedule content when you direct us to do so;</li>
              <li>retrieve and show publishing status;</li>
              <li>provide support, maintain service reliability, and address misuse; and</li>
              <li>comply with applicable legal obligations.</li>
            </ul>
            <p>Our policy is not to sell personal information.</p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">03</span>
          <div className="documentContent">
            <h2>Sharing and TikTok</h2>
            <p>
              When you connect TikTok and request a publishing action, RainoMotion Social
              sends the information needed to carry out that action—such as media,
              captions, settings, tokens, and request identifiers—to TikTok through its
              authorized interfaces. TikTok processes that information under its own terms
              and privacy policies.
            </p>
            <p>
              We may also share limited information with service providers that help us
              host, secure, or operate the service, subject to appropriate obligations, or
              when required by law. Our policy is not to share information with TikTok for
              unrelated advertising purposes.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">04</span>
          <div className="documentContent">
            <h2>Retention</h2>
            <p>
              We retain information only for as long as reasonably needed to provide and
              secure RainoMotion Social, maintain the account connection you requested,
              meet applicable legal obligations, and resolve disputes.
            </p>
            <p>
              Disconnecting an account or revoking its authorization stops RainoMotion
              Social from using the associated OAuth tokens for new actions. Media,
              captions, settings, publishing status, tokens, and account information may be
              retained where needed to provide the service or protect its security. You may
              request that we delete stored data as described on our Data Deletion page. We
              handle deletion requests subject to limited retention that may be necessary
              for legal compliance, security, fraud prevention, or dispute resolution.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">05</span>
          <div className="documentContent">
            <h2>Security</h2>
            <p>
              We use administrative, technical, and organizational safeguards intended to
              protect information against unauthorized access, alteration, disclosure, or
              loss. Access is limited to systems and people that need it to operate or
              support the service. No internet service can guarantee absolute security.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">06</span>
          <div className="documentContent">
            <h2>Your choices and rights</h2>
            <p>
              You may request access to, correction of, or deletion of personal information
              associated with your use of RainoMotion Social. Depending on where you live,
              additional legal rights may apply.
            </p>
            <p>
              You can disconnect a TikTok account in RainoMotion Social through the
              connected accounts or channels area. You can also revoke RainoMotion Social
              in TikTok&apos;s settings. Disconnecting stops new authorized actions, but it
              does not automatically remove content already published to TikTok.
            </p>
            <div className="callout">
              <p>
                For detailed steps or a deletion request, see our{' '}
                <a href="/data-deletion">Data Deletion page</a> or email{' '}
                <a href="mailto:support@rainomotion.com">support@rainomotion.com</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">07</span>
          <div className="documentContent">
            <h2>Changes and contact</h2>
            <p>
              We may update this policy as the service or legal requirements change. The
              effective date above identifies the current version.
            </p>
            <div className="contactCard">
              <strong>Operator and data controller: Rabiaa Alomar</strong>
              <p>Operating under the RainoMotion name in Ontario, Canada</p>
              <a href="mailto:support@rainomotion.com">support@rainomotion.com</a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
