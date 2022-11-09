// -------- UTILITY FUNCTIONS  ---------

const showPeople = (people) => {
  return people.map((item) => {
    const { name, job } = item
    return `<p>${name}-> <strong>${job}</strong></p>`
  }).join('')
}

/* Only 1 Export Per File */

export default showPeople