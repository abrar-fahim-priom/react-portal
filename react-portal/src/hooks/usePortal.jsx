import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = () => {
  const [portalContainer, setPortalContainer] = useState(null);

  useEffect(() => {
    const mountElement = document.getElementById("modal-portal");
    const elementDiv = document.createElement("div");
    mountElement.appendChild(elementDiv);
    setPortalContainer(elementDiv);

    return () => {
      mountElement.removeChild(elementDiv);
    };
  }, []);

  const createPortalContent = (children) => {
    if (!portalContainer) return null;
    return createPortal(children, portalContainer);
  };

  return createPortalContent;
};

export default usePortal;
