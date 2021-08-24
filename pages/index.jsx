import Layout from "../components/Layout";
import utilStyles from '../styles/Utils.module.css'

export default function Home() {
  return (
    <>
      <Layout title='Home' description="Home" home={true}>
      <section className={utilStyles.headingMd}>
        <p>Next.js app</p>
        <p>
          Test of Next.js functionalities
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
        </p>
      </section>
      </Layout>
    </>
  )
}
