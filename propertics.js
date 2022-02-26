const bazar = {
    name: 'Mosjid Market',
    address: 'Mirpur-13,Dhaka',
    fishPrice: 70,
    fishColor: 'yellow',
}
const objectKey = Object.keys(bazar)
// console.log(objectKey)
const objectValues = Object.values(bazar)
// console.log(bazar)
// console.log(bazar.address)
// Object.seal(bazar)
Object.freeze(bazar)
bazar.fishPrice = 300
delete bazar.fishPrice
console.log(bazar)