import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import pictures from "./assets/data.json";

export const GalleryContext = createContext();

const initialState = {
  galleryPictures: pictures,
  currentPictureIndex: null,
  stopTimer: false,
};
GalleryContextProvider.propTypes = {
  children: PropTypes.node,
};

export function GalleryContextProvider({ children }) {
  const [state, dispatch] = useReducer(galleryReducer, initialState);
  const contextState = { ...state, dispatch };
  return (
    <GalleryContext.Provider value={contextState}>
      {children}
    </GalleryContext.Provider>
  );
}

function galleryReducer(state, action) {
  switch (action.type) {
    case "start-slide-show":
      return {
        ...state,
        currentPictureIndex: 0,
      };
    case "end-slide-show":
      return {
        ...state,
        currentPictureIndex: null,
      };
    case "pause-slide-show":
      return {
        ...state,
        stopTimer: !state.stopTimer,
      };
    case "select-picture":
      return {
        ...state,
        currentPictureIndex: action.payload.pictureIndex,
      };

    default:
      throw new Error("Unknown action");
  }
}
