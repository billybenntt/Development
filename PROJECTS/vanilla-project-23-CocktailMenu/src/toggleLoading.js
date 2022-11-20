import getElement from './getElement.js'

const loadingContainer = getElement('.loading')

const hideLoading = () => {
  loadingContainer.classList.add('hide-loading')
}

const showLoading = () => {
  loadingContainer.classList.remove('hide-loading')
}

export { showLoading, hideLoading }