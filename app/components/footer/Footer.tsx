import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="font-bold mb-2 text-base">Eshop Categories</h3>
                        <Link href="/category/1">Category 1</Link>
                        <Link href="/category/2">Category 2</Link>
                        <Link href="/category/3">Category 3</Link>
                        <Link href="/category/4">Category 4</Link>
                        <Link href="/category/5">Category 5</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="font-bold mb-2 text-base">Customer Service</h3>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/shipping">Shipping</Link>
                        <Link href="/returns">Returns</Link>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="font-bold mb-2 text-base">Newsletter</h3>
                        <p className="mb-4">Subscribe to our newsletter to get the latest news, announcements, and special offers.</p>
                        <form className="flex flex-col md:flex-row gap-2">
                            <input type="email" placeholder="Email" className="border border-slate-400 rounded-md px-2 py-1 w-full md:w-2/3" />
                            <button type="submit" className="bg-slate-400 text-slate-100 rounded-md px-4 py-1 w-full md:w-auto">Subscribe</button>
                        </form>
                        <p>&copy; {new Date().getFullYear()} E~Shop. All rights reserved</p>
                    </div>
                        <FooterList>
                            <h3 className="text-base font-bold mb-2">Follow Us</h3>
                            <div className="mb-2 flex gap-2">
                                <Link href="/"><FaFacebookSquare className="text-2xl" /></Link>
                                <Link href="/"><FaTwitter className="text-2xl" /></Link>
                                <Link href="/"><FaInstagram className="text-2xl" /></Link>
                                <Link href="/"><FaYoutube className="text-2xl" /></Link>
                            </div>
                        </FooterList>
                    </div>
            </Container>
        </footer>
     );
}
 
export default Footer;