import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Legal — DrMedFact</title>
      </Head>
      <div style={{
        textAlign:'center',
        padding:'80px 20px',
        fontFamily:'system-ui, sans-serif',
        background:'#0a0a0a',
        color:'#fff',
        minHeight:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <h1 style={{fontSize:'32px',marginBottom:'12px',color:'#fff'}}>
          DrMedFact
        </h1>
        <p style={{fontSize:'18px',color:'#9ca3af',marginBottom:'32px'}}>
          Medical Education Platform
        </p>
        <div style={{display:'flex',gap:'24px',flexWrap:'wrap',justifyContent:'center'}}>
          <a href="/terms" style={{
            background:'#3b82f6',
            color:'#fff',
            padding:'14px 28px',
            borderRadius:'8px',
            fontSize:'16px',
            fontWeight:'600',
            textDecoration:'none'
          }}>
            Terms of Service
          </a>
          <a href="/privacy" style={{
            background:'#1f2937',
            color:'#fff',
            padding:'14px 28px',
            borderRadius:'8px',
            fontSize:'16px',
            fontWeight:'600',
            textDecoration:'none',
            border:'1px solid #374151'
          }}>
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  )
}

export const metadata = {
  title: 'Legal — DrMedFact'
}
