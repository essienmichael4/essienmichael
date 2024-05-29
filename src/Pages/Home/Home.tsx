import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"

const Home = () => {
  return (
    <>
        <Header />
        <main className="w-full">
            <Hero />
        </main>
        <Footer />
    </>
  )
}

export default Home
