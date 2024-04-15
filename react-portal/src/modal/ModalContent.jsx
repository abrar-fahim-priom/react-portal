export default function ModalContent({ onClose }) {
  return (
    <div
      className="flex flex-col items-center border rounded-lg absolute top-20 left-12 bottom-20  z-10  bg-black text-white p-2 "
      role="dialog"
      aria-modal="true"
    >
      This is contentZSDZDZSDZSDZSD ZSDZSDZSDSDZSD ASERESRSE AESERSER
      <button
        className="bg-black text-white p-1 border rounded-md"
        onClick={onClose}
      >
        close
      </button>
    </div>
  );
}
