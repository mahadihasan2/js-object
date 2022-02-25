1. // Using object litarel
const student = {
    name: 'Mahadi Hasan',
    job: 'web-developer'
}
2. // object constractor
const person = new Object()
// console.log(person)


3. // const human = Object.create(null)
const human = Object.create(student)
// console.log(human.job)


4. // class of Object 
class pepole {
    constructor(name, job, age, ) {
        this.name = name
        this.job = job
        this.age = age
    }
}
const peopleDetalies = new pepole('Fatema', 'junior web-developer', 19)
// console.log(peopleDetalies)

// 5. function of object 
function baati(name) {
    this.name = name
}
const patti = new baati('kader')
console.log(patti)