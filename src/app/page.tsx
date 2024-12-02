import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";


export default function Home() {
    return (
        <main className="w-full min-h-screen pt-10">
            <Hero />
            <About />
            <Skills />
        </main>
    );
}
