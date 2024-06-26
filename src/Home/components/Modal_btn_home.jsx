import React from "react";

function Modal_btn_home() {
  return (
    <div>
      <button
        className="bg-red-200 p-2 rounded-lg hover:bg-red-300"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Click me!
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
}

export default Modal_btn_home;
