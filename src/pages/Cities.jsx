import { getDataNeut } from "../services/getDataNeut";

import OutletContainer from "../ui/OutletContainer";
import ColPageLayout from "../ui/ColPageLayout";

function Cities() {
  const cities = getDataNeut();

  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <ColPageLayout data={cities} />
    </OutletContainer>
  );
}

export default Cities;
