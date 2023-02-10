import React from "react";

import styleClass from "./modal-overlay.module.css";

const ModalOverlay = ({ onClose }: { onClose: () => void }) => {
  return <div className={styleClass.overlay} onClick={onClose} />;
};

export default ModalOverlay;
