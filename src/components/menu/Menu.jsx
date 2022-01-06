import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Om mig</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#teachers">Lärare</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </div>
  );
}
