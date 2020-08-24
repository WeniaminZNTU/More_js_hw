'use strict'

const user = {
    name: 'Test',
    DateOfBirth: new Date(2000, 1, 6),
    hoursWorked: 34,
    ratePerHour: 10,

    get salory(){
        return this.ratePerHour * this.hoursWorked;
    },

    get age(){
        let currentDate = new Date();

        let correctYear = currentDate.getUTCFullYear();
        let correctMonth = currentDate.getUTCMonth();
        let correctDay = currentDate.getUTCDay();

        let userBirthYear = this.DateOfBirth.getFullYear();
        let userBirthMonth = this.DateOfBirth.getUTCMonth();
        let userBirthDay = this.DateOfBirth.getUTCDay();


        if(userBirthMonth < correctMonth){
            return correctYear - (userBirthYear);
        }

        if(userBirthMonth > correctMonth){
            return correctYear - (++userBirthYear);
        }

        if(userBirthMonth === correctMonth){
            if(userBirthDay <= correctDay){
                return correctYear - (userBirthYear);
            }
            else if(userBirthDay > correctDay){
                return correctYear - (++userBirthYear);
            }
        }
    }
}


console.log('user salary:', user.salory);
console.log('user age:', user.age);
