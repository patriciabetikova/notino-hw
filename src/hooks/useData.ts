import * as R from "ramda";
import React from "react";

export const useData = <T>(
  req: () => Promise<T>,
  {
    refetchParams = [],
    skip = R.always(false),
    clearOnParamChange = false,
  } = {}
) => {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const request = () => req().then((res: T) => setData(res));

  React.useEffect(() => {
    if (clearOnParamChange) {
      setData(undefined);
    }

    if (!skip()) {
      request();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refetchParams);

  return [data];
};
