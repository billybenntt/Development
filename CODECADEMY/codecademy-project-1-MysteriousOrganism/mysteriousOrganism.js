// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}



console.log(returnRandBase())


// Factory Function
// Create multiple objects

const pAequorFactory = (number, array) => {
    return {
        number,
        array,

        beep(){
            console.log(`${number} juas ${array}`);
        }
    }



}




