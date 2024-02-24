import { getDataHum } from "../services/getDataHum";
import OutletContainer from "../ui/OutletContainer";
import RowPageLayout from "../ui/RowPageLayout";

function Poems() {
  const poems = getDataHum();
  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <RowPageLayout data={poems} />
    </OutletContainer>
  );
}

export default Poems;
