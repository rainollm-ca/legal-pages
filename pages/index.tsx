import Layout from '../components/Layout';

const appUrl = 'https://postiz.rainomotion.com';

export default function Home() {
  return (
    <Layout description="Plan, preview, and publish social content with clear controls in RainoMotion Social.">
      <section className="homeHero" aria-labelledby="home-heading">
        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">A clearer social publishing workspace</p>
            <h1 className="heroTitle" id="home-heading">
              Make every post <em>intentional.</em>
            </h1>
            <p className="heroLead">
              RainoMotion Social helps creators and organizations connect social accounts,
              prepare media and captions, preview posts, schedule publishing, and follow
              status from one practical workspace.
            </p>
            <div className="heroActions">
              <a
                className="buttonPrimary"
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open RainoMotion Social <span aria-hidden="true">↗</span>
              </a>
              <a className="buttonSecondary" href="#capabilities">
                Explore the workflow
              </a>
            </div>
          </div>

          <div className="productCard" aria-label="Illustration of a scheduled post preview">
            <div className="productCardBar">
              <span>Publishing workspace</span>
              <span className="productCardStatus">Connected</span>
            </div>
            <div className="productPreview">
              <div className="previewHeader">
                <span>Post preview</span>
                <span>Draft</span>
              </div>
              <div className="previewCanvas">
                <small>Preview before publishing</small>
                <strong>A considered idea, ready for its audience.</strong>
              </div>
              <div className="previewMeta">
                <div>
                  <span>Publishing control</span>
                  <strong>Scheduled by you</strong>
                </div>
                <span className="previewBadge">Status visible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside className="independentNote" aria-label="Independent service notice">
        <div className="sectionInner">
          <strong>Independent service</strong>
          <p>
            RainoMotion Social is not affiliated with, endorsed by, or sponsored by TikTok.
            TikTok is a third-party platform with its own terms and policies.
          </p>
        </div>
      </aside>

      <section className="productSection" id="capabilities" aria-labelledby="capabilities-heading">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="eyebrow">Useful controls, plainly presented</p>
            <h2 id="capabilities-heading">From first draft to publishing status.</h2>
            <p>
              Keep the essential parts of social publishing together without losing the
              ability to review what goes out and when.
            </p>
          </div>
          <div className="featureGrid">
            <article className="featureCard">
              <span className="featureNumber">01</span>
              <h3>Connect social accounts</h3>
              <p>
                Authorize supported accounts so RainoMotion Social can prepare and publish
                content only through the access you grant.
              </p>
            </article>
            <article className="featureCard">
              <span className="featureNumber">02</span>
              <h3>Prepare and preview</h3>
              <p>
                Bring media, captions, and publishing settings into one drafting flow, then
                review the post preview before it is scheduled.
              </p>
            </article>
            <article className="featureCard">
              <span className="featureNumber">03</span>
              <h3>Choose when to publish</h3>
              <p>
                Use publishing controls to send eligible content now or schedule it for a
                later time you select.
              </p>
            </article>
            <article className="featureCard">
              <span className="featureNumber">04</span>
              <h3>Follow post status</h3>
              <p>
                Track the status returned through connected-platform publishing workflows,
                so you can see where submitted content stands.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="productSection workflowSection" aria-labelledby="workflow-heading">
        <div className="sectionInner">
          <div className="sectionHeading">
            <p className="eyebrow">Designed around human review</p>
            <h2 id="workflow-heading">Your accounts. Your content. Your decision.</h2>
            <p>
              RainoMotion Social supports the publishing process; it does not replace your
              responsibility for the accounts you connect or the material you publish.
            </p>
          </div>
          <div className="workflowSteps">
            <article className="workflowStep">
              <span>Step 1</span>
              <h3>Authorize</h3>
              <p>Connect an account you are permitted to manage through its platform login.</p>
            </article>
            <article className="workflowStep">
              <span>Step 2</span>
              <h3>Compose</h3>
              <p>Add media, write the caption, choose settings, and review the preview.</p>
            </article>
            <article className="workflowStep">
              <span>Step 3</span>
              <h3>Publish</h3>
              <p>Choose the timing, submit the post, and check its publishing status.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="closingSection" aria-labelledby="closing-heading">
        <div className="sectionInner">
          <div className="closingPanel">
            <div>
              <p className="eyebrow">Ready when your content is</p>
              <h2 id="closing-heading">A calmer way to coordinate publishing.</h2>
            </div>
            <a
              className="buttonPrimary"
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open app <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="resourceSection" aria-labelledby="resources-heading">
        <div className="sectionInner resourceInner">
          <div>
            <p className="eyebrow">Policies and support</p>
            <h2 id="resources-heading">Clear information, close at hand.</h2>
          </div>
          <nav className="resourceLinks" aria-label="Policies and support">
            <a href="/terms">Terms <span aria-hidden="true">→</span></a>
            <a href="/privacy">Privacy <span aria-hidden="true">→</span></a>
            <a href="/support">Support <span aria-hidden="true">→</span></a>
            <a href="/data-deletion">Data Deletion <span aria-hidden="true">→</span></a>
          </nav>
        </div>
      </section>
    </Layout>
  );
}
