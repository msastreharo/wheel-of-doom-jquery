class WheelOfDoom {
    constructor(coders) {
        this.coders = coders;
        this.originalCoders = coders;
    }

    chooseCoder() {
        let position = Math.floor(Math.random*this.coders.length)
        return this.coders.splice(position,1)[0]
    }

    remainingCoders() {
        return this.coders;
    }

    restart() {
        this.coders = this.originalCoders
    }
}