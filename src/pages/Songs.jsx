import { getDataHum } from "../services/getDataHum";

import OutletContainer from "../ui/OutletContainer";
import RowPageLayout from "../ui/RowPageLayout";

function Songs() {
  const songs = getDataHum();

  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <RowPageLayout data={songs} />
    </OutletContainer>
  );
}

export default Songs;
