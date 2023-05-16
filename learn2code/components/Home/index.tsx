import Header from './subComponents/header.tsx';
import Hero from './subComponents/hero.tsx';
import Courses from './subComponents/courses.tsx';
import HowItWorks from './subComponents/howItWorks';
import Testimonials from './subComponents/testimonial.tsx';
import AboutUs from './subComponents/about.tsx';
import CallToAction from './subComponents/cta.tsx';
import Footer from './subComponents/footer.tsx';

export default function Home() {
    return (
        <>
        <Header />
        <Hero />
        <Courses />
        <HowItWorks />
        <Testimonials />
        <AboutUs />
        <CallToAction />
        <Footer />
        </>
    )
    }