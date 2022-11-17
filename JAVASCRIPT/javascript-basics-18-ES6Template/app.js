/*Object Contents */
const person = {
  name: 'Kyle',
  job: 'Developer',
  hobbies: ['Surfing', 'Coding', 'Eating', "Nothing"]
}

/*Target Parent Element */
const targetElement = document.getElementById('result')

/*String Interpolation with Object */
const templateContent = `<h3 class="person">Name: ${person.name}</h3>
                         <h4>Job: ${person.job}</h4>
                         <h4>Hobbies</h4>
                         <ol>
                         ${person.hobbies.map(item => `<li>${item}</li>`).join("")}
                         </ol>`

/*Assigning Content */
targetElement.innerHTML = templateContent