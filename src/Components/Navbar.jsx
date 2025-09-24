import logo from "../assets/tomato.jpg"
export default function Navbar(){

    return(
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Movies</li>
                <li>Series</li>
            </ul>
            <button>Get started</button>
        </nav>
    )
}