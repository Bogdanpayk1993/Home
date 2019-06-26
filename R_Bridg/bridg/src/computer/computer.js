import ActionGenerators from '../actions/ActionGenerators'

class Computer {
    constructor(store, giveCard, check_move, render_again) {
        this.giveCard = giveCard
        this.check_move = check_move
        this.render_again = render_again
        this.store = store
        this.getStartCard()
    }

    getStartCard() {
        for (let i = 0; i < 4; i++) {
            this.store.dispatch(ActionGenerators.takeCardComputer(this.giveCard()))
        }
    }

    make_move_computer = () => {
        let mydeckCards = Object.keys(this.store.getState().computer)
        let enable = this.throw_first_card(mydeckCards) 

        if (enable == false) {
            this.store.dispatch(ActionGenerators.takeCardComputer(this.giveCard()))
            mydeckCards = Object.keys(this.store.getState().computer)
            enable = this.throw_first_card(mydeckCards)
        }
        this.render_again()
    }

    throw_first_card(mydeckCards) {
        let enable = false

        let can_move = []
        mydeckCards.forEach((el, i) => {
            let enable1 = this.check_move(el)
            if (enable1 == true) {
                can_move.push(mydeckCards[i])
            }
        })

        let need_move = []
        can_move.forEach((el) => {
            switch (el % 9) {
                case 1: //6
                    need_move.push(1)
                    break
                case 2: //7
                    need_move.push(2)
                    break
                case 3: //8
                    need_move.push(4)
                    break
                case 4: //9
                    need_move.push(3)
                    break
                case 5: //10
                    need_move.push(3)
                    break
                case 6: //В
                    need_move.push(0)
                    break
                case 7: //Д
                    need_move.push(3)
                    break
                case 8: //К
                    need_move.push(3)
                    break
                case 0: //Т
                    need_move.push(4)
                    break
            }
        })

        if (need_move.length > 0)
        {
            can_move.map((el1, i) => {
                mydeckCards.map((el2) => {
                    if((el1 % 9 == el2 % 9) && (el1 != el2))
                    {
                        need_move[i]++
                    }
                })
            })

            let max = 0
            for (let i = 1; i < need_move.length; i++)
            {
                if (need_move[max] < need_move[i])
                {
                    max = i
                }
            }

            let id = mydeckCards.indexOf(can_move[max])
            enable = this.check_move(mydeckCards[id])
            if (enable == true)
            {
                this.store.dispatch(ActionGenerators.throwCardComputer(parseInt(mydeckCards[id])))
            }
        }

        return enable
    }
}

export default Computer;