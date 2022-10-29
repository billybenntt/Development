const counter = {
  count: 0,
  increment: function () {
    this.count++
    console.log(this)
  }

}

/* Trigger Button */
btn = document.querySelector('.increase')

/* Bind Function back to its own object */



const increment = counter.increment.bind(counter)




/* Should Run without issues */
btn.addEventListener('click', increment)