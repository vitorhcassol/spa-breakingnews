import logo from "../../assets/images/LogoBN.png";
import {
  Button,
  ImagemLogo,
  Nav,
  InputSpace,
} from "../../components/Navbar/NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <ImagemLogo src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
