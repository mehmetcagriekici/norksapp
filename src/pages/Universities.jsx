import { getDataNeut } from "../services/getDataNeut";

import OutletContainer from "../ui/OutletContainer";
import ColPageLayout from "../ui/ColPageLayout";

function Universities() {
  const universities = getDataNeut();

  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <ColPageLayout data={universities} />
    </OutletContainer>
  );
}

export default Universities;
