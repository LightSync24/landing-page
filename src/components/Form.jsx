import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 15000);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={openModal}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 999,
          background: "#fada50",
          padding: "10px 20px",
          borderRadius: 5,
          cursor: "pointer",
          border: "0.7px solid black",
        }}
      >
        Subscribe
      </button>
      {showModal && (
        <>
          <div className="overlay" />
          <div
            className={showModal ? "modal visible" : "modal"}
            style={{ borderRadius: "20px" }}
          >
            {showModal && <Modal onClose={closeModal} />}
          </div>
        </>
      )}
    </div>
  );
};

const Modal = ({ onClose }) => {
  return (
    <div className="pop-up">
      <button className="close-button" onClick={onClose}>
        <IoCloseSharp style={{ background: "white" }} size={30} />
      </button>
      <form style={{ background: "white" }} className="user-input">
        <h4 style={{ background: "white" }}>Subscribe to our Newsletter!</h4>
        <input
          type="text"
          id="name"
          style={{ background: "white" }}
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          style={{ background: "white" }}
          placeholder="Email"
        />
        <input
          type="submit"
          value="Submit"
          style={{ background: "#fada50" }}
          id="submit"
        />
      </form>
    </div>
  );
};

export default Form;
