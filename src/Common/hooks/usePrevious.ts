import React from 'react';

const usePreviousGeneric: <T>(value: T) => T = value => {
  const ref = React.useRef<typeof value>();

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePreviousGeneric;
