import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
const LayoutComponent = ({ children }: { children: JSX.Element }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  let links = [
    {
      url: "usuarios",
      text: "Usuarios",
    },
    {
      url: "materia",
      text: "Materia",
    },
    {
      url: "paralelos",
      text: "Paralelo",
    },
    {
      url: "notas",
      text: "Notas",
    },
    {
      url: "cicloAcademico",
      text: "Ciclo Academico",
    },
  ];

  const SignOut = () => {
    logout();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    return navigate("/", { replace: true });
  };
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sistema Gestion Academica</Navbar.Brand>
          <Nav className="me-auto">
            {links.map((item) => (
              <LinkContainer to={`/Admin/${item.url}`}>
                <Nav.Link>{item.text}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Nav>
            <Nav.Link onClick={SignOut}>Sign Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
export default LayoutComponent;
