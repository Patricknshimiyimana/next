import Head from "next/head";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../utils/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const postData = await res.json();

  return { props: { postData } };
}

export async function getStaticPaths() {
  const posts = await getSortedPostsData();
  const paths = posts.map((post) => {
    return { params: { id: post.id.toString(), title: post.title } };
  });

  return { paths, fallback: false };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText} />
        {/* <Date dateString={postData.date} /> /}
        </div> */}

        <div>{postData.body}</div>
      </article>
    </Layout>
  );
}
