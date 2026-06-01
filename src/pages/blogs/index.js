import Layout from "@/components/shared/layout/layout";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div>
      <Layout>
        <div className="bg-blue-100 pb-10">
          <br />

          {/* Featured post */}
          <div className="bg-white sm:w-[1200px] w-11/12 sm:h-[400px] m-auto sm:p-5 p-2 flex flex-col-reverse sm:flex-row sm:justify-between">
            <div className="sm:w-6/12 flex flex-col justify-center">
              <span className="text-sm text-cyan-600 font-semibold uppercase tracking-wide mb-2">
                {featured.category}
              </span>
              <p className="sm:text-4xl text-2xl font-bold">{featured.title}</p>
              <br />
              <p className="text-gray-600">{featured.excerpt}</p>
              <br />
              <p className="text-sm text-gray-400 mb-3">
                {featured.date} &bull; {featured.readTime}
              </p>
              <Link
                href={`/blogs/${featured.slug}`}
                className="text-xl text-cyan-600 flex items-center gap-2 w-fit"
              >
                Read More <FaArrowRight className="arrow" />
              </Link>
            </div>
            <div className="sm:w-5/12">
              <img
                className="h-full w-full object-cover"
                src={featured.image}
                alt={featured.title}
              />
            </div>
          </div>

          <br />

          {/* Blog grid */}
          <div className="sm:w-[1200px] grid grid-cols-1 sm:grid-cols-3 sm:m-auto gap-10 mx-5">
            {rest.map((post) => (
              <div
                key={post.slug}
                className="bg-white shadow-lg shadow-orange-500/50 rounded flex flex-col"
              >
                <img
                  className="h-[250px] w-full rounded-t object-cover"
                  src={post.image}
                  alt={post.title}
                />
                <div className="p-3 flex flex-col flex-1">
                  <span className="text-xs text-cyan-600 font-semibold uppercase tracking-wide mb-1">
                    {post.category}
                  </span>
                  <h1 className="text-xl font-bold mt-1 flex-1">{post.title}</h1>
                  <p className="text-sm text-gray-500 mt-2 mb-3">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mb-3">
                    {post.date} &bull; {post.readTime}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-xl text-cyan-600 mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
