import logo from "../../assets/images/LogoBN.png";
import { Nav, ImageLogo, InputSpace, Button } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
