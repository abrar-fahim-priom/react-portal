import { useState } from "react";
import usePortal from "../hooks/usePortal";
import ModalContent from "../modal/ModalContent";

export default function PortalModal() {
  const [showModal, setShowModal] = useState();
  const createPortalContent = usePortal();

  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
      <button
        className="bg-black text-white p-1 border rounded-md"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Portal Modal
      </button>

      {showModal &&
        createPortalContent(
          <ModalContent
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
    </div>
  );
}
