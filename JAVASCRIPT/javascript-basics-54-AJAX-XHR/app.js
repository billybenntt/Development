// ------------- DATA -------------
const url = './api/sample.txt'
const targetContainer = document.querySelector('.container')

// ------------- STAGE 1 - INITIATE OBJECT  -------------
const xhr = new XMLHttpRequest()

// ------------- STAGE 2 - REQUEST DATA   -------------
xhr.open('GET', url)

// ------------- STAGE 3 - PROCESS DATA   -------------

/*State Changes 0, 1 and 4 */
xhr.onload = function () { }
/* State Changes 0, 1 , 2, 3 and 4 */
xhr.onreadystatechange = function () {

  /*Check everything OK before Action */
  if (xhr.readyState === 4 && xhr.status === 200) {


    /* Use the Data on the DOM*/
    targetContainer.innerHTML = `<p>${xhr.responseText}</p>`

  } else {
    /*This will still show up if readyState 3 or 2*/
    console.log({
      status: xhr.status,
      text: xhr.statusText,
      readyState: xhr.readyState
    })
  }
}

/*  Used for Loaders  */
xhr.onprogress = function () {
}
/* Used for Errors */
xhr.onerror = function () { }

// ------------- STAGE 4 - SEND DATA   -------------

xhr.send()

console.log('Asynchronous Data will show up later')