import Link from "next/link";

const NavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Next Project</h1>
            </div>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/tuts">Content Listing</Link>
        </nav>
    );
}
 
export default NavBar;
