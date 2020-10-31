import Head from 'next/head'

import Header from '../components/Header'
import Projects from '../components/Projects'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Colton Pemberton</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <AboutMe />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </div>
    )
}
