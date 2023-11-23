"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Modal = ({ open, onClose, children, ...props }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="bg-black z-[9999] p-4 w-full fixed bottom-0 left-0"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
