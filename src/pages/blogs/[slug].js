import Layout from "@/components/shared/layout/layout";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({ params: { slug: blog.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogs.find((b) => b.slug === params.slug) || null;
  return { props: { post } };
}

const BlogPost = ({ post }) => {
  if (!post) return null;

  return (
    <div>
      <Head>
        <title>{post.title} | CortexSof Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="sm:w-[900px] w-11/12 m-auto">
            <div className="pt-10 pb-4">
              <Link
                href="/blogs"
                className="text-cyan-600 flex items-center gap-2 w-fit"
              >
                <FaArrowLeft /> Back to Blog
              </Link>
            </div>

            <div className="bg-white rounded shadow-md overflow-hidden">
              <img
                className="w-full h-[400px] object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-8">
                <span className="text-sm text-cyan-600 font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
                <h1 className="text-4xl font-bold mt-3 mb-2">{post.title}</h1>
                <p className="text-sm text-gray-400 mb-8">
                  {post.date} &bull; {post.readTime}
                </p>

                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
                  {post.content}
                </div>

                <hr className="my-10" />

                <div className="bg-blue-50 rounded p-6 text-center">
                  <h2 className="text-2xl font-bold mb-2">
                    Ready to work with CortexSof?
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Let&apos;s discuss how we can help your business grow.
                  </p>
                  <Link href="/contact">
                    <button className="bg-cyan-600 text-white px-8 py-3 rounded font-semibold hover:bg-cyan-700 transition">
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BlogPost;
