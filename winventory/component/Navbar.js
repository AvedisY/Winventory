import Link from 'next/link';
import { useRouter } from "next/router";



const navigation = [
    { name: "Home", href: "/" },
    { name: "Try", href: "/try" },
    { name: "Contact", href: "/contact" },
 ];

export default function Navbar(){
    
    const router = useRouter();
    const currentRoute = router.pathname;

    return(
        <nav>
            {navigation.map((item) => (
           <Link href={item.href} key={item.name} style={{ textDecoration: 'none' }}>
             <h4
                className={currentRoute === item.href ? 'white' : 'no'}
             >
               {item.name}
             </h4>
           </Link>
            ))}
        </nav>
    )
}