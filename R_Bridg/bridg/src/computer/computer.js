class Computer {
    constructor(giveCard, make_cours, check_cours) {
        this.giveCard = giveCard
        this.make_cours = make_cours
        this.check_cours = check_cours
        this.mydeckCards = this.getStartCards()
    }

    getStartCards() {
        let mydeckcards = []
        for (let i = 0; i < 8; i++) {
            mydeckcards.unshift(this.giveCard())
        }
        return mydeckcards
    }

    make_cours_computer = () => {
        let enable = false

        let can_cours = []
        this.mydeckCards.forEach((el, i) => {
            let enable1 = this.check_cours(el)
            if (enable1 == true) {
                can_cours.push(this.mydeckCards[i])
            }
        })

        let need_cours = []
        can_cours.forEach((el) => {
            switch (el % 9) {
                case 1: //6
                    need_cours.push(1)
                    break
                case 2: //7
                    need_cours.push(2)
                    break
                case 3: //8
                    need_cours.push(4)
                    break
                case 4: //9
                    need_cours.push(3)
                    break
                case 5: //10
                    need_cours.push(3)
                    break
                case 6: //В
                    need_cours.push(0)
                    break
                case 7: //Д
                    need_cours.push(3)
                    break
                case 8: //К
                    need_cours.push(3)
                    break
                case 0: //Т
                    need_cours.push(4)
                    break
            }
        })

        if (need_cours.length > 0)
        {
            can_cours.map((el1, i) => {
                this.mydeckCards.map((el2) => {
                    if((el1 % 9 == el2 % 9) && (el1 != el2))
                    {
                        need_cours[i]++
                    }
                })
            })

            let max = 0
            for (let i = 1; i < need_cours.length; i++)
            {
                if (need_cours[max] < need_cours[i])
                {
                    max = i
                }
            }

            let index = this.mydeckCards.indexOf(can_cours[max])
            enable = this.make_cours(this.mydeckCards[index])
            if (enable == true)
            {
                this.mydeckCards.splice(index, 1)
            }
        }

        if (enable == false) {
            this.mydeckCards.unshift(this.giveCard())
            enable = this.make_cours(this.mydeckCards[0])
            if (enable == true) {
                this.mydeckCards.splice(0, 1)
            }
        }
    }
}

export default Computer;