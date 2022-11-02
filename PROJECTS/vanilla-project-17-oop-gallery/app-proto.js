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
  this.container.addEventListener('click', function (e) {
    if (e.target.classList.contains('img')) {
      this.openModal(e.target, this.list)
    }
  }.bind(this))

  this.closeModal = this.closeModal.bind(this)
  this.nextImage = this.nextImage.bind(this)
  this.prevImage = this.prevImage.bind(this)
  this.chooseImage = this.chooseImage.bind(this)

}

// ------------  PROTOTYPE FUNCTIONS ------------

Gallery.prototype.openModal = function (selectedImage, list) {
  /* Set Main Image */
  this.setMainImage(selectedImage)
  /* Inject Small Images and match the small image */
  this.modalImages.innerHTML = list.map(function (item) {
    return `<img src="${item.src}" title="${item.title}" data-id="${item.dataset.id}" 
     alt="${item.alt}" 
    class="${selectedImage.dataset.id === item.dataset.id ? 'modal-img selected' : 'modal-img'}">`
  }).join('')

  /* Add Modal Open Class*/
  this.modal.classList.add('open')
  /* Attach Event Listeners after Class has been applied */
  this.closeBtn.addEventListener('click', this.closeModal)
  this.nextBtn.addEventListener('click', this.nextImage)
  this.prevBtn.addEventListener('click', this.prevImage)
  this.modalImages.addEventListener('click', this.chooseImage)

}

Gallery.prototype.closeModal = function () {
  /* Remove Modal Open Class*/
  this.modal.classList.remove('open')
  /* Remove Event Listeners after Class has been removed */
  this.closeBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nextImage)
  this.prevBtn.removeEventListener('click', this.prevImage)
  this.modalImages.removeEventListener('click', this.chooseImage)

}

Gallery.prototype.nextImage = function () {
  /* Grab Image with "Selected" Class */
  const selectedImage = this.modalImages.querySelector('.selected')
  /* LOOP EFFECT - If no Right Sibling / Go back to the First Element*/
  const nextImage = selectedImage.nextElementSibling || this.modalImages.firstElementChild
  selectedImage.classList.remove('selected')
  nextImage.classList.add('selected')
  this.setMainImage(nextImage)
}

Gallery.prototype.prevImage = function () {
  /* Grab Image with "Selected" Class */
  const selected = this.modalImages.querySelector('.selected')
  /* LOOP EFFECT - If no Left Sibling / Go back to the Last Element*/
  const prev = selected.previousElementSibling || this.modalImages.lastElementChild
  selected.classList.remove('selected')
  prev.classList.add('selected')
  this.setMainImage(prev)

}

Gallery.prototype.chooseImage = function (e) {
  if (e.target.classList.contains('modal-img')) {
    /*Grab the image with the selected class*/
    const selected = this.modalImages.querySelector('.selected')
    /*Remove Selected Class*/
    selected.classList.remove('selected')
    /*Apply Class to selected Image*/
    this.setMainImage(e.target)
    e.target.classList.add('selected')
  }

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