import Layout from '../components/Layout';

export default function DataDeletion() {
  return (
    <Layout
      title="Data Deletion"
      description="Disconnect TikTok and request deletion of data held by RainoMotion Social."
    >
      <header className="documentHero">
        <div className="documentHeroInner">
          <p className="documentMeta">Account controls</p>
          <h1>Data Deletion</h1>
          <p className="documentIntro">
            You can disconnect TikTok, revoke platform access, and ask RainoMotion Social
            to delete information associated with your service account.
          </p>
        </div>
      </header>

      <article className="documentShell">
        <section className="documentSection">
          <span className="sectionNumber">01</span>
          <div className="documentContent">
            <h2>Disconnect TikTok in RainoMotion Social</h2>
            <ol>
              <li>Sign in at RainoMotion Social.</li>
              <li>Open the connected accounts or channels area.</li>
              <li>Select the TikTok account you want to disconnect.</li>
              <li>Choose the available Disconnect or Remove option and confirm.</li>
            </ol>
            <p>
              Disconnecting prevents new TikTok publishing actions through that connection.
              It does not delete posts already published to TikTok or necessarily delete
              all data stored in your RainoMotion Social workspace.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">02</span>
          <div className="documentContent">
            <h2>Revoke access in TikTok</h2>
            <p>
              You can independently remove RainoMotion Social from TikTok&apos;s authorized
              apps or app permissions:
            </p>
            <ol>
              <li>Open TikTok and go to your profile.</li>
              <li>Open the menu, then Settings and privacy.</li>
              <li>Open the security or permissions area and find apps and services permissions.</li>
              <li>Select RainoMotion Social and remove its access.</li>
            </ol>
            <p>
              TikTok may change the names or location of these settings. Revoking access
              invalidates future authorized access but does not remove content already
              published or automatically erase data held by RainoMotion Social.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">03</span>
          <div className="documentContent">
            <h2>Request deletion by email</h2>
            <p>
              Send a deletion request to{' '}
              <a href="mailto:support@rainomotion.com">support@rainomotion.com</a> using the
              email address associated with your RainoMotion Social account when possible.
              Use the subject “Data deletion request” and identify the account or connected
              TikTok profile involved.
            </p>
            <div className="callout">
              <p>
                Never include a password, access token, refresh token, or other secret in
                your request.
              </p>
            </div>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">04</span>
          <div className="documentContent">
            <h2>What we delete</h2>
            <p>
              After locating the account and confirming the request, we delete or
              de-identify personal information associated with the applicable RainoMotion
              Social account that is not required to be retained. This can include:
            </p>
            <ul>
              <li>TikTok account identifiers and profile information;</li>
              <li>stored OAuth access tokens and refresh tokens;</li>
              <li>media, captions, and publishing settings held in the workspace; and</li>
              <li>publishing status and related service records tied to the account.</li>
            </ul>
            <p>
              Deleting RainoMotion Social data does not delete posts or account information
              held by TikTok. Manage published posts and the TikTok account directly in
              TikTok.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">05</span>
          <div className="documentContent">
            <h2>Necessary retention exceptions</h2>
            <p>
              We may retain limited information when reasonably necessary to comply with
              law, establish or defend legal claims, prevent fraud or abuse, protect
              security, or resolve disputes. Any retained information remains subject to
              appropriate safeguards and is not used for unrelated purposes.
            </p>
          </div>
        </section>

        <section className="documentSection">
          <span className="sectionNumber">06</span>
          <div className="documentContent">
            <h2>How requests are handled</h2>
            <p>
              We review the request, verify identity or account ownership where reasonably
              necessary, determine which data is associated with the request, and complete
              deletion subject to the exceptions above. We may contact you if more
              information is needed and will confirm when the request has been handled.
            </p>
            <p>
              We respond as reasonably practicable, taking account of the request&apos;s
              scope and any applicable legal timeframe.
            </p>
            <div className="contactCard">
              <strong>Request data deletion</strong>
              <a href="mailto:support@rainomotion.com">support@rainomotion.com</a>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
