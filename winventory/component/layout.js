import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}){
    return(
        <div classname ='content'>
            <Head>
                <meta 
                    name="description" 
                    content="First Next.js Project, it is is a website that will help people with inventory management" 
                />
            </Head>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}