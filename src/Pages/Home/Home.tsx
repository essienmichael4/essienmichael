import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Project from "../../components/Project/Project"

const Home = () => {
  return (
    <>
        <Header />
        <main className="w-full">
            <Hero />
            <Project />
            <About />
        </main>
        <hr />
        <Footer />
    </>
  )
}

export default Home
