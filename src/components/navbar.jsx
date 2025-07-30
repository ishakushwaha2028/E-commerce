function Navbar() {
  return (
    <header>
      <div className="navbar">
        <h1>My E-Commerce Site</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;