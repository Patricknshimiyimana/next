import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
// import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../utils/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Patrick. I'm a software engineer with a passion for
          crafting high-performance systems. You can contact me by{" "}
          <a href="mailto:lennoxmupi@gmail.com">Email</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.length == 0 && <p>Currently, there are no posts!</p>}
          {posts.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {/* <Date dateString={date} /> */}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
