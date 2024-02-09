import { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../ui/Modal";

function useCloseModal(close, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          close();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [close, listenCapturing]
  );

  return ref;
}

export default useCloseModal;
