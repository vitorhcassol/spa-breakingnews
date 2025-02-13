import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Datas";
import { HomeBody, HomeContainer } from "./HomeStyled";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HomeContainer>
        <HomeBody>
          {news.map((item, index) => {
            return <Card news={item} key={index} />;
          })}
        </HomeBody>
      </HomeContainer>
    </>
  );
}
