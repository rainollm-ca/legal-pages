import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0;url=/terms" />
        <title>Legal — DrMedFact</title>
      </Head>
      <div style={{textAlign:'center',padding:'60px 20px',fontFamily:'system-ui,sans-serif',background:'#0a0a0a',color:'#fff',minHeight:'100vh'}}>
        <h1 style={{fontSize:'28px',marginBottom:'16px',color:'#fff'}}>DrMedFact Legal Pages</h1>
        <p style={{fontSize:'16px',color:'#9ca3af'}}>
          Redirecting to <a href="/terms" style={{color:'#3b82f6'}}>Terms of Service</a>...
        </p>
        <noscript>
          <p><a href="/terms" style={{color:'#3b82f6'}}>Click here if not redirected</a></p>
        </noscript>
      </div>
    </>
  )
}

export const metadata = {
  title: 'Legal — DrMedFact'
}
