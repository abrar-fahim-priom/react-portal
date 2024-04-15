import { useState } from "react";
import ModalContent from "../modal/ModalContent";

export default function TraditionalModal() {
  const [showModal, setShowModal] = useState();
  return (
    <div className="relative border border-black mb-5 p-2 w-64 h-20 overflow-hidden">
      <button
        className="bg-black text-white p-1 border rounded-md"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show Traditional Modal
      </button>

      {showModal && (
        <ModalContent
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
