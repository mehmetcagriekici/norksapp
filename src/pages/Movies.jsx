import { getDataHum } from "../services/getDataHum";
import OutletContainer from "../ui/OutletContainer";
import RowPageLayout from "../ui/RowPageLayout";

function Movies() {
  const movies = getDataHum();
  return (
    <OutletContainer bgImg="../../public/hero.jpg">
      <RowPageLayout data={movies} />
    </OutletContainer>
  );
}

export default Movies;
