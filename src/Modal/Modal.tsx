import { ReactNode } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

export function ModalComponent({
  isOpen,
  closeModal,
  children,
 
}: {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode
 
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {children}
      </Modal>
    </>
  );
}
