import Head from "next/head";
import Layout from "../../components/layout";
import { getPostData, getSortedPostsData } from "../../utils/posts";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return { props: { postData } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getSortedPostsData();
  const paths = posts.map((post) => {
    return { params: { id: post.id.toString(), title: post.title } };
  });

  return { paths, fallback: false };
};

export default function Post({
  postData,
}: {
  postData: { title: string; body: string };
}) {
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
