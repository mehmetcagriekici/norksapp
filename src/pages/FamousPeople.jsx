import { getDataHum } from "../services/getDataHum";
import OutletContainer from "../ui/OutletContainer";
import RowPageLayout from "../ui/RowPageLayout";

function FamousPeople() {
  const people = getDataHum();
  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <RowPageLayout data={people} />
    </OutletContainer>
  );
}

export default FamousPeople;
