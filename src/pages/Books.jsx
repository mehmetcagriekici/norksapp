import { getDataHum } from "../services/getDataHum";
import OutletContainer from "../ui/OutletContainer";
import RowPageLayout from "../ui/RowPageLayout";

function Books() {
  const books = getDataHum();

  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <RowPageLayout data={books} />
    </OutletContainer>
  );
}

export default Books;
