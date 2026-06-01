import Layout from "@/components/shared/layout/layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";

const team = [
  {
    name: "Tanbir Islam",
    role: "Chief Executive Officer",
    bio: "Tanbir founded CortexSof with a vision to make enterprise-grade software accessible to businesses of every size. With over a decade of experience in software architecture and business strategy, he leads the company's direction and client relationships.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    name: "Rafiq Ahmed",
    role: "Chief Technology Officer",
    bio: "Rafiq oversees all technical operations at CortexSof, from system architecture to development standards. He brings deep expertise in cloud infrastructure, microservices, and full-stack development across JavaScript, Python, and PHP ecosystems.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
  },
  {
    name: "Nadia Hassan",
    role: "Head of Design",
    bio: "Nadia leads the UI/UX design team, ensuring every product CortexSof delivers is not only functional but a pleasure to use. Her background in human-centered design and her eye for clean, modern aesthetics set the standard for all client deliverables.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
  },
  {
    name: "Arif Hossain",
    role: "Head of Digital Marketing",
    bio: "Arif leads CortexSof's digital marketing division, managing SEO, paid advertising, and content strategy for clients across multiple industries. He has driven measurable revenue growth for over 80 businesses through data-driven marketing campaigns.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
  },
  {
    name: "Sadia Akter",
    role: "Senior Full-Stack Developer",
    bio: "Sadia is one of CortexSof's most versatile engineers, specializing in Next.js, Node.js, and cloud deployments on AWS. She has led the development of several flagship client projects and mentors junior developers on the engineering team.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
  {
    name: "Karim Uddin",
    role: "Lead Mobile Developer",
    bio: "Karim specializes in cross-platform mobile development using React Native and Flutter. He has shipped over 15 production apps to the App Store and Google Play, spanning fintech, healthcare, and e-commerce verticals.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
];

const Team = () => {
  return (
    <div>
      <Head>
        <title>Our Team | CortexSof</title>
        <meta name="description" content="Meet the talented team behind CortexSof — software engineers, designers, and digital marketers dedicated to your success." />
      </Head>
      <Layout>
        <div className="bg-blue-100 pb-16">
          <div className="text-center pt-10 pb-6">
            <p className="text-sm font-semibold text-cyan-600 uppercase tracking-widest">The People Behind CortexSof</p>
            <h1 className="text-5xl font-bold mt-2 animatetext">Meet Our Team</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto px-4">
              We are a passionate team of engineers, designers, and strategists united by
              a single goal: helping businesses grow through technology. Every project
              gets our full expertise and commitment.
            </p>
          </div>

          <div className="sm:w-[1200px] w-11/12 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded shadow-md overflow-hidden hover:shadow-cyan-500/30 hover:shadow-lg transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
                  <p className="text-cyan-600 font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 px-4">
            <h2 className="text-2xl font-bold mb-3">Want to Join Our Team?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We are always looking for talented people who are passionate about building
              great software. If that sounds like you, we would love to hear from you.
            </p>
            <Link href="/contact">
              <button className="bg-cyan-600 text-white px-8 py-3 rounded font-semibold hover:bg-cyan-700 transition">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Team;
