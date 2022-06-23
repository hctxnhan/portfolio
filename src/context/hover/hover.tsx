import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

type MouseHoverType = {
  isHover: boolean;
  setHover: Dispatch<SetStateAction<boolean>> | null;
};

const MouseHoverContext = createContext<MouseHoverType>({
  isHover: false,
  setHover: null,
});

export default MouseHoverContext;
