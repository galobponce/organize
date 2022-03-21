import { FC } from "react";

import { getLoaderSmall } from '../../utils/AssetUtils';

const LoaderSmall: FC = () => {
  return (
    <img src={getLoaderSmall} alt="Loader" />
  );
};

export default LoaderSmall;