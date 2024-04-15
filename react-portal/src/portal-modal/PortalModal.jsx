import { useState } from "react";
import Portal from "../Portal";
import ModalContent from "../modal/ModalContent";

export default function PortalModal() {
  const [showModal, setShowModal] = useState();

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

      {showModal && (
        <Portal>
          <ModalContent
            onClose={() => {
              setShowModal(false);
            }}
          />
        </Portal>
      )}
    </div>
  );
}
