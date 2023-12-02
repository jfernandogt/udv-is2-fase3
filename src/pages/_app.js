import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Principal" },
  { href: "/estudiantes", label: "Estudiantes" },
  { href: "/cursos", label: "Cursos" },
];

const Navegacion = () => {
  const router = useRouter();
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navItems.map(({ href, label }) => (
          <li className="nav-item" key={href}>
            <Link
              href={href}
              className={`nav-link ${router.route === href ? "active" : ""}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <div className="full-page">
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container">
          <Link href={"/"} className="navbar-brand">
            Proyecto Final - Fase 3
          </Link>
          <Navegacion />
        </div>
      </nav>
      <div className="container main-body">
        <Component {...pageProps} />
      </div>
      <footer className="py-3 my-4 footer">
        <div className="nav justify-content-center border-bottom pb-3 mb-3">
          <div>Universidad Da Vinci de Guatemala</div>
        </div>
        <p className="text-center text-muted">
          Nombre: Juan Fernando Barrios Barrera
        </p>
        <p className="text-center text-muted">Carnet: 202102655</p>
      </footer>
    </div>
  );
}
