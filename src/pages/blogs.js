import Layout from "@/components/shared/layout/layout";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <div>
      <Layout>
        <div className="bg-blue-100 pb-10">
          <br />

          <div className="bg-white sm:w-[1200px] w-11/12 sm:h-[400px] m-auto sm:p-5 p-2 flex  flex-col-reverse sm:flex-row sm:justify-between">
            <div className="sm:w-6/12">
              <p className="sm:text-4xl text-2xl  font-bold">
                Write Better SEO Blog Titles & Headlines Today
              </p>
              <br />

              <p>
                Master the art & science of writing the best blog titles. Like
                it or not, the right blog title will make all the difference
                when it comes to a potential reader clicking on your headline
                over the one right below (or above) your article in Google
                search rankings. Your blog post title is crucial when it comes
                to nailing SEO best practices and giving your blog content a
                realistic chance of ranking well in organic search engine
                rankings.
              </p>
              <br />
              <br className="hidden sm:block" />
              <button className="text-xl text-cyan-600 flex items-center gap-2">
                Read More <FaArrowRight className="arrow" />
              </button>
            </div>
            <div className="sm:w-5/12">
              <img
                className="h-full w-full"
                src="https://us.123rf.com/450wm/pixologystudio/pixologystudio2307/pixologystudio230700450/208031821-photography-of-steam-punk-cat-in-sea-insane-detail-ai-generative.jpg"
              />
            </div>
          </div>
          <br />

          <div className=" sm:w-[1200px] grid grid-cols-1 sm:grid-cols-3 sm:m-auto gap-10 mx-5">
            <div className="bg-white shadow-lg shadow-orange-500/50 rounded">
              <img
                className="h-[250px] w-full rounded-t"
                src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
              />
              <h1 className="text-xl  font-bold mt-2 p-3">
                {" "}
                Write Better SEO Blog Titles & Headlines Today
              </h1>
              <button className="text-xl  text-cyan-600 p-3 mt-3">
                Read More
              </button>
            </div>
            <div className="bg-white shadow-lg shadow-orange-500/50 rounded">
              <img
                className="h-[250px] w-full rounded-t"
                src="https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6"
              />
              <h1 className="text-xl font-bold mt-2 p-3">
                {" "}
                Write Better SEO Blog Titles & Headlines Today
              </h1>
              <button className="text-xl  text-cyan-600 p-3 mt-3">
                Read More
              </button>
            </div>
            <div className="bg-white shadow-lg shadow-orange-500/50 rounded">
              <img
                className="h-[250px] w-full rounded-t"
                src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
              />
              <h1 className="text-xl  font-bold mt-2 p-3">
                {" "}
                Write Better SEO Blog Titles & Headlines Today
              </h1>
              <button className="text-xl  text-cyan-600 p-3 mt-3">
                Read More
              </button>
            </div>
            <div className="bg-white shadow-lg shadow-orange-500/50 rounded">
              <img
                className="h-[250px] w-full rounded-t"
                src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
              />
              <h1 className="text-xl  font-bold mt-2 p-3">
                {" "}
                Write Better SEO Blog Titles & Headlines Today
              </h1>
              <button className="text-xl  text-cyan-600 p-3 mt-3">
                Read More
              </button>
            </div>
            <div className="bg-white shadow-lg shadow-orange-500/50 rounded">
              <img
                className="h-[250px] w-full rounded-t"
                src="https://images.unsplash.com/photo-1679189792474-6c2796dc78ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
              />
              <h1 className="text-xl  font-bold mt-2 p-3">
                {" "}
                Write Better SEO Blog Titles & Headlines Today
              </h1>
              <button className="text-xl  text-cyan-600 p-3 mt-3">
                Read More
              </button>
            </div>
            <div className="bg-white shadow-lg shadow-orange-500/50 rounded">
              <img
                className="h-[250px] w-full rounded-t"
                src="https://tinyjpg.com/images/social/website.jpg"
              />
              <h1 className="text-xl  font-bold mt-2 p-3">
                {" "}
                Write Better SEO Blog Titles & Headlines Today
              </h1>
              <button className="text-xl  text-cyan-600 p-3 mt-3">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blogs;
