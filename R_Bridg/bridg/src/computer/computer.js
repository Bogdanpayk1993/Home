class Computer {
    constructor(giveCard) {
        this.giveCard = giveCard
        this.mydeckCards = this.getStartCards()
    }

    getStartCards() {
        let mydeckcards = []
        for (let i = 0; i < 4; i++) {
           mydeckcards.push(this.giveCard())
        }
        return mydeckcards
    }
}
 
export default Computer;