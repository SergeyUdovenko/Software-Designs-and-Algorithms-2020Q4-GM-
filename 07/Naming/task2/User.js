module.exports = class User {
    constructor({name, birthDate, rating}) {
        this.birthDate = birthDate || null;
        this.name = name;
        this.isAdmin = false;
        this.subordinates = [];
        this.rating = rating || null;
    }

    toString() {
        return 'User [Birth date=' + this.birthDate + ', name=' + this.name + ', is admin=' + this.isAdmin + ', subordinates='
            + this.subordinates + ', rating=' + this.rating + ']';
    }
};
