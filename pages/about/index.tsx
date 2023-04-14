import About from "@/components/about/About";
import Certificates from "@/components/certificates/Certificates";
import Layout from "@/components/layout/Layout";
import Skills from "@/components/skills/Skills";

const AboutPage = () => {
  return (
    <Layout title={"About"}>
      <About />
      <Skills />
      <Certificates />
    </Layout>
  );
};

export default AboutPage;
