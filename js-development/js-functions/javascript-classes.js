// Super Class

class HospitalEmployee {

    constructor(name) {

        this._name = name;
        this._remainingVacationDays = 20;

    }

    // Getter for Name
    get name() {
        return this._name
    }

    // Getter for Vacation Days
    get remainingVacationDays() {
        return this._remainingVacationDays
    }


    // Take Vacation Days Method
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }

}