import Link from "next/link";
function Header(){
    return(
        <header>
            {/* LOGO */}
            <div>
                <h1><b> AFSHAN PORTFOLIO
               </b></h1>
               <img src="https://encrypted-tbn0.gstatic.com/images?
               q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s" ></img>
            </div>


            {/* LINK */}
            <div>
                <nav><ul>
                    <li><Link href= "/"> Home </Link></li>
                    <li><Link href= "/about" > About </Link></li>
                    <li><Link href= "/contact"> Contact </Link></li>
                    <li><Link href= "/skills"> Skills </Link></li>
                    

                </ul>

                </nav>
            </div>
        </header>
    );
}
export default Header;