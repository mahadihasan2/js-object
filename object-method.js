const students = {
    name: 'mahadi',
    job: 'techer',
    salary: 6000,
    ispoor: true,
    friendsName: ['rakib', 'jibon', 'shakil', 'Mamun'],
    privateStudentName: {
        name: ['tonmoy', 'tina', 'moni', 'fatema', 'jahid'],
        beton: 1000,
    },

    giftDey: function (taka, arokhoros) {
        this.taka = this.salary - taka - arokhoros
        return this.taka

    }

};
const takaAce1 = students.giftDey(500, 60)
const takaAce2 = students.giftDey(260, 10)
console.log(takaAce2)