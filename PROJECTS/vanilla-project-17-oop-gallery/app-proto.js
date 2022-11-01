// ------------  CONSTRUCTOR FUNCTION ------------

function Gallery (element) {

  /*Change NodeList to Array using SpreadOp (Map) */
  this.list = [...element.querySelectorAll('.img')]
  /*Select the Whole Container */
  this.container = element
  /* Select Modal Elements */
  this.modal = getElement('.modal')
  this.modalImg = getElement('.main-img')
  this.imageName = getElement('.image-name')
  this.modalImages = getElement('.modal-images')
  this.closeBtn = getElement('.close-btn')
  this.prevBtn = getElement('.prev-btn')
  this.nextBtn = getElement('.next-btn')

  /*Bind Function with Event to current Object */

  this.eventModal = function (e) {
    if (e.target.classList.contains('img')) {
      this.openModal(e.target, this.list)
    }
  }.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.nextImage = this.nextImage.bind(this)
  this.prevImage = this.prevImage.bind(this)

  /* Event Listeners  */
  this.container.addEventListener('click', this.eventModal)
  this.closeBtn.addEventListener('click', this.closeModal)
  this.nextBtn.addEventListener('click', this.nextImage)
  this.prevBtn.addEventListener('click', this.prevImage)

}

// ------------  PROTOTYPE FUNCTIONS ------------

Gallery.prototype.openModal = function (selectedImage, list) {
  /* Set Main Image */
  this.setMainImage(selectedImage)
  /* Inject Small Images */
  this.modalImages.innerHTML = list.map(function (item) {
    return `<img src="${item.src}" title="${item.title}" data-id="${item.dataset.id}" 
     alt="${item.alt}" 
    class="${selectedImage.dataset.id === item.dataset.id ? 'modal-img selected' : 'modal-img'}">`
  }).join('')
  /* Add Modal Open Class*/
  this.modal.classList.add('open')
}

Gallery.prototype.closeModal = function () {
  /* Add Modal Open Class*/
  this.modal.classList.remove('open')

  /*IMPORTANT - Remove Listeners so they do not pile up*/
  this.closeBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nextImage)
  this.prevBtn.removeEventListener('click', this.prevImage)
}

Gallery.prototype.nextImage = function () {

}

Gallery.prototype.prevImage = function () {
}

// Helper Function
Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src
  this.imageName.innerText = selectedImage.title
}

// ------------  HELPER FUNCTION ------------

function getElement (selection) {
  const element = document.querySelector(selection)

  if (element) {
    return element
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  )
}

// ------------  INSTANCES  ------------

/* First Instance */
const nature = new Gallery(getElement('.nature'))

/* Second Instance */
const city = new Gallery(getElement('.city'))