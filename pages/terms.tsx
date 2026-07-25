import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="The terms governing use of RainoMotion Social."
    >
      <header className="documentHero">
        <div className="documentHeroInner">
          <p className="documentMeta">Effective July 25, 2026</p>
          <h1>Terms of Service</h1>
          <p className="documentIntro">
            These terms govern your access to and use of RainoMotion Social, an independent
            social-content management and publishing service.
          </p>
        </div>
      </header>

      <article className="documentShell">
        <section className="documentSection">
          <span className="sectionNumber">01</span>
          <div className="documentContent">
            <h2>Using RainoMotion Social</h2>
            <p>
              By using RainoMotion Social, you agree to these Terms. You must provide
              accurate information, keep your credentials secure, and remain responsible
              for activity carried out through your workspace.
            </p>
            <p>
              The service helps creators and organizations prepare, preview, schedule,
              publish, and track the status of social content. You decide what accounts to
              connect and what content to submit.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">02</span>
          <div className="documentContent">
            <h2>Authorized account access</h2>
            <p>
              You may connect only a social account that you own or are expressly
              authorized to manage. You authorize RainoMotion Social to use the access
              granted by the relevant platform to display account details and perform the
              publishing actions you request.
            </p>
            <p>
              You are responsible for ensuring that your authorization remains valid and
              for removing access when it is no longer appropriate.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">03</span>
          <div className="documentContent">
            <h2>Automated publishing</h2>
            <p>
              RainoMotion Social can submit content automatically at a time you select.
              You are responsible for reviewing media, captions, settings, timing, and
              target accounts before scheduling or publishing. Platform processing,
              moderation, outages, or changes may affect whether or when a post appears.
            </p>
            <p>
              A schedule or status shown in the service is not a guarantee that a
              third-party platform will publish or continue to display the content.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">04</span>
          <div className="documentContent">
            <h2>Acceptable use</h2>
            <p>You must not use RainoMotion Social to:</p>
            <ul>
              <li>break a law, regulation, court order, or third-party platform rule;</li>
              <li>access or publish to an account without authorization;</li>
              <li>harass, deceive, impersonate, exploit, or harm another person;</li>
              <li>send spam, malware, or other malicious or disruptive material;</li>
              <li>circumvent security, access controls, platform limits, or safeguards; or</li>
              <li>interfere with the service or use it in a way that creates unreasonable risk.</li>
            </ul>
            <p>
              We may restrict access when reasonably necessary to protect the service,
              users, third parties, or platform integrations.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">05</span>
          <div className="documentContent">
            <h2>Content and intellectual property</h2>
            <p>
              You retain any rights you hold in content you provide. You grant us the
              limited permission needed to host, process, preview, transmit, and publish
              that content at your direction and to operate the service.
            </p>
            <p>
              You are responsible for your content and must have all intellectual property,
              privacy, publicity, music, media, and other rights needed to use and publish
              it. RainoMotion Social does not grant you rights to third-party material.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">06</span>
          <div className="documentContent">
            <h2>Third-party platforms and TikTok</h2>
            <p>
              Connected platforms are separate services governed by their own terms,
              policies, technical requirements, and enforcement decisions. Your use of
              TikTok must comply with TikTok&apos;s applicable terms and policies.
            </p>
            <p>
              RainoMotion Social is independent and is not affiliated with, endorsed by, or
              sponsored by TikTok. We do not control third-party availability, approvals,
              content decisions, or feature changes.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">07</span>
          <div className="documentContent">
            <h2>Disconnecting accounts</h2>
            <p>
              You can disconnect an account through RainoMotion Social&apos;s connected
              accounts or channels area, and you may revoke access through the relevant
              platform. Disconnection prevents new publishing actions through that
              connection. It does not remove content already published to the platform.
            </p>
            <p>
              See our <a href="/data-deletion">Data Deletion page</a> for instructions and
              information about requesting deletion of service data.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">08</span>
          <div className="documentContent">
            <h2>Availability and changes</h2>
            <p>
              We work to keep RainoMotion Social available, but the service is provided on
              an “as available” basis. Maintenance, security events, network conditions,
              and third-party platform changes can interrupt or alter features. We may
              update the service or these Terms, and the effective date identifies the
              current version.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">09</span>
          <div className="documentContent">
            <h2>Contact</h2>
            <p>Questions about these Terms or the service can be sent to:</p>
            <div className="contactCard">
              <strong>RainoMotion Social Support</strong>
              <a href="mailto:support@rainomotion.com">support@rainomotion.com</a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
