import Layout from "@/components/layout/Layout";
import SincWave from "@/components/sincWave/SincWave";

const AboutPage = () => {
  return (
    <Layout title={"About"}>
      <section className="w-full h-full text-light-content flex-col dark:text-dark-content flex justify-center items-center">
        <div className="h-20 aspect-square">
          <SincWave
            color={"#3563E9"}
            thickness={0.5}
            scale={21}
            frequency={0.02}
            amplitudesMax={[150, 90, 50, 40, 300]}
            animationSpeed={0.05}
            animationAmplitude={0.2}
          />
        </div>
        <h1 className="animate-pulse">coming soon</h1>
        <h1 className="font-bold">ABOUT</h1>
      </section>
    </Layout>
  );
};

export default AboutPage;
