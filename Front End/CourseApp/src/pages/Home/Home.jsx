
import { Hero, Features, About, Testimonials, Contact, Navbar, Footer } from '../../components/Index'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
     <div className="bg-gradient-to-t from-zinc-50 to-purple-300 h-20"></div>
      <About/>
      <Features/>
      <div className="bg-gradient-to-t from-zinc-50 to-purple-300 h-20"></div>
      <Testimonials/>
      <Contact/>
      <div className="bg-gradient-to-t from-zinc-50 to-purple-300 h-20"></div>
      <Footer/>
    </>

  )
}
