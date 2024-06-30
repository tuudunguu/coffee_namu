import { Navbar } from "../components/First-section-navbar";
import { SecondSectionOrder } from "../components/second-section-order";
import { Container } from "../components/container";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <SecondSectionOrder/>
    </Container>
  );
}
