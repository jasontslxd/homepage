import { Navigation, Spacer } from "components";
import { Container } from "react-bootstrap";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Spacer size="xxlg" />
        <h1>Noice :D</h1>
      </Container>
    </div>
  )
};