class GuessingGame {
    constructor() {
      this.max = 0;
      this.min = 0;
      this.pivot = 0;

    }

    setRange(min, max) {
       this.max = max;
       this.min = min;

    }

    guess() {
      return this.pivot = Math.round((this.max - this.min) / 2) + this.min;

      }

    lower() {
      this.max = this.pivot;
    }

    greater() {
      this.min = this.pivot;
    }
}

module.exports = GuessingGame;
