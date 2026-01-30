import About from "@/components/About";
import Article from "@/components/Article";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Edu from "@/components/Edu";
import NpmPackages from "@/components/NpmPackages";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skill from "@/components/Skill";
import SystemDesignCaseStudies from "@/components/SystemDesigns";

export default function Home() {
  return (
    <>
      <head>
        <title>Meheraj Hosen</title>
        <link rel="icon" href="../public/banner.jpg" />
        <meta
          name="description"
          content="A Passionate MERN stack Dev and Tech Enthusiast from the Milky Way Galaxy, within the Orion Arm, orbiting the Sol (Sun) star, living on the third orbital planet named Earth(A Blue Planet), in the continent of Asia, in the country of Bangladesh, in the city of Dhaka — a negligible being in the grand scheme of the cosmos."
        />
      </head>
      <Banner />
      <Resume />
      <Skill />
      <About />
      <Edu />
      <Projects />
      <SystemDesignCaseStudies />
      <Article />
      <NpmPackages />
      <Contact />
    </>
  );
}
