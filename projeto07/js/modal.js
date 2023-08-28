export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector("#modal-message"),
  btnClose: document.querySelector("#btnClose"),
  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  }
}

Modal.btnClose.addEventListener("click", () => {
  Modal.close();
})

window.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    Modal.close();
  }
})