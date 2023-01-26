import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Patrick. I'm an software engineer with a passion for
          crafting high-performance systems. You can contact me by{" "}
          <a href="mailto:lennoxmupi@gmail.com">Email</a>
        </p>
      </section>
    </Layout>
  );
}
