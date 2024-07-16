import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        {/* <header classname="header">
            <nav classname="nav container">
                <form id="weatherForm">
                    <input type="text" name="city" className="input" />
                    <button type="submit" classname="btn">Search</button>
                </form>
            </nav>
        </header> */}
        <header className="header">
            <nav className="nav container">
                <form id="weatherForm">
                    <input type="text" name="city" className="input" />
                    <button type="submit" className="btn">Search</button>
                </form>
            </nav>
        </header>
    </div>
  )
}

export default Navbar