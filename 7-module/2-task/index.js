import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(`  <div class="modal">

<div class="modal__overlay"></div>

<div class="modal__inner">
  <div class="modal__header">
    <button type="button" class="modal__close">
      <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
    </button>

    <h3 class="modal__title">

    </h3>
  </div>

  <div class="modal__body">
  </div>
</div>

</div>`);
    this.closeByButton();
    this.closeByEsc();
  }

  open() {

    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

  }

  setTitle(title) {

    this.elem.querySelector('.modal__title').innerText = title;

  }

  setBody(node) {

    this.elem.querySelector('.modal__body').firstChild.replaceWith(node);

  }
  close() {
    document.body.classList.remove('is-modal-open');
    // document.body.querySelector('.container').remove(this.elem);
    this.elem.remove();
  }
  closeByButton() {
    this.elem.querySelector('.modal__close').onclick = () => {
      document.body.classList.remove('is-modal-open');
      // document.body.querySelector('.container').remove(this.elem);
      this.elem.remove();
    }
  }
  closeByEsc() {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        document.body.classList.remove('is-modal-open');
        // document.body.querySelector('.modal').remove(this.elem);
        this.elem.remove();
      }
    })
  }
}
