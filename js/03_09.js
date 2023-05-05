//MÉTODOS

const bed = {
    bedMade: true,
    pillowCount: 5,
    colorOfSheets: "Blue",
    changeBedStatus: function (newStatus){
        if (newStatus == true) {
            this.bedMade = true;
        } else if (newStatus == false) {
            this.bedMade = false;
        } else {
            console.log("It must be a boolean.");
            this.bedMade = this.bedMade;
        }
    },
    changePillowCount: function (numberOfPillows){
        if ( Number.isInteger(numberOfPillows) == false ) {
            console.log("It must be a number.");
            this.pillowCount = this.pillowCount;
        } else {
            this.pillowCount = numberOfPillows;
        }
    },
    changeSheets: function (color){
        this.colorOfSheets = color;
    }
}