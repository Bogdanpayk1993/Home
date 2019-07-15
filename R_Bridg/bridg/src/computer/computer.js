import ActionGenerators from '../actions/ActionGenerators'

class Computer {
    constructor(store, giveCard, check_move, render_again, check_move_user, finish_state) {
        this.giveCard = giveCard
        this.check_move = check_move
        this.render_again = render_again
        this.check_move_user = check_move_user
        this.finish_state = finish_state
        this.store = store
        this.getStartCard()
    }

    getStartCard() {
        for (let i = 0; i < 4; i++) {
            this.store.dispatch(ActionGenerators.takeCardComputer(this.giveCard()))
        }
    }

    make_move_computer = () => {
        let enable = this.throw_first_card()

        if (enable == false) {
            this.store.dispatch(ActionGenerators.takeCardComputer(this.giveCard()))
            enable = this.throw_first_card()
        }

        if (enable == true) {
            let mydeckCards = Object.keys(this.store.getState().computer)
            if (mydeckCards.length > 0) {
                this.add_card()
                this.render_again()
            }
            this.check_last_card_computer()
        }
    }

    throw_first_card() {
        let mydeckCards = Object.keys(this.store.getState().computer)
        let usedCard_key = Object.keys(this.store.getState().usedCard)
        let seven = this.store.getState().seven
        let mast = this.store.getState().mast
        let enable = false

        let can_move = []
        if (seven != 0) {
            let enable1 = false
            mydeckCards.map((el) => {
                if (el % 9 == 2) {
                    enable1 = true
                }
            })

            if (enable1 == false) {
                this.store.dispatch(ActionGenerators.takeCardComputer(parseInt(this.giveCard())))
                mydeckCards = Object.keys(this.store.getState().computer)

                mydeckCards.map((el) => {
                    if (el % 9 == 2) {
                        enable1 = true
                    }
                })
            }

            if (enable1 == false) {
                for (let i = 0; i < seven * 2 - 1; i++) {
                    this.store.dispatch(ActionGenerators.takeCardComputer(parseInt(this.giveCard())))
                }
                this.store.dispatch(ActionGenerators.throwSeven())
                this.render_again()
            }
        }

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
                    need_move.push(5)
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

        if (need_move.length > 0) {
            can_move.map((el, i) => {
                mydeckCards.map((el1) => {
                    if ((el > 0 && el < 10 && el1 > 0 && el1 < 10) ||
                        (el > 9 && el < 19 && el1 > 9 && el1 < 19) ||
                        (el > 18 && el < 28 && el1 > 18 && el1 < 28) ||
                        (el > 27 && el < 37 && el1 > 27 && el1 < 37)) {
                        need_move[i] = need_move[i] * 2
                    }
                })
            })

            let max = need_move.indexOf(Math.max(...need_move))
            let max1 = mydeckCards.indexOf(can_move[max])
            let enable1 = false

            if (this.store.getState().usedCard[usedCard_key[usedCard_key.length - 1]].card % 9 == mydeckCards[max1] % 9 && mast == 0) {
                mydeckCards.forEach((el, i) => {
                    if (el % 9 == mydeckCards[max1] % 9 && el != mydeckCards[max1] && enable1 == false) {
                        max1 = i
                        enable1 = true
                    }
                })
            }

            if (max1 != -1) {
                enable = true
                let seven = this.store.getState().seven
                if (mydeckCards[max1] % 9 == 2) {
                    seven++
                }
                else {
                    seven = 0
                }
                this.store.dispatch(ActionGenerators.throwCardComputer(parseInt(mydeckCards[max1]), seven))
                this.store.dispatch(ActionGenerators.changeMast(0))
                if (mydeckCards[max1] % 9 == 3) {
                    this.store.dispatch(ActionGenerators.takeCardUser(this.giveCard()))
                }
            }
        }
        this.render_again()
        return enable
    }

    add_card() {
        let usedCard = Object.keys(this.store.getState().usedCard)
        let mydeckCards = Object.keys(this.store.getState().computer)

        let can_move = []
        mydeckCards.forEach((el) => {
            if (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9 == el % 9) {
                can_move.push(el)
            }
        })

        if (can_move.length > 0) {
            if (can_move.length == 1) {
                let seven = this.store.getState().seven
                if (can_move[0] % 9 == 2) {
                    seven++
                }
                this.store.dispatch(ActionGenerators.throwCardComputer(parseInt(can_move[0]), seven))
                if (can_move[0] % 9 == 3) {
                    this.store.dispatch(ActionGenerators.takeCardUser(this.giveCard()))
                }
            }
            else {
                let need_move = []
                can_move.map((el) => {
                    let counter = 0
                    mydeckCards.forEach((el1) => {
                        if ((el > 0 && el < 10 && el1 > 0 && el1 < 10) ||
                            (el > 9 && el < 19 && el1 > 9 && el1 < 19) ||
                            (el > 18 && el < 28 && el1 > 18 && el1 < 28) ||
                            (el > 27 && el < 37 && el1 > 27 && el1 < 37)) {
                            counter++
                        }
                    })
                    need_move.push(counter)
                })

                let max_index = need_move.indexOf(Math.max(...need_move))

                let buf = can_move[max_index]
                can_move[max_index] = can_move[can_move.length - 1]
                can_move[can_move.length - 1] = buf

                can_move.forEach((el) => {
                    let seven = this.store.getState().seven
                    if (el % 9 == 2) {
                        seven++
                    }
                    this.store.dispatch(ActionGenerators.throwCardComputer(el, seven))
                    if (el % 9 == 3) {
                        this.store.dispatch(ActionGenerators.takeCardUser(this.giveCard()))
                    }
                })
            }
            this.render_again()
        }
    }

    check_last_card_computer() {
        let usedCard = Object.keys(this.store.getState().usedCard)
        let mydeckCards = Object.keys(this.store.getState().computer)

        switch (this.store.getState().usedCard[usedCard[usedCard.length - 1]].card % 9) {
            case 0:
                this.make_move_computer()
                break;

            case 1:
                let enable = false
                do {
                    let enable1
                    mydeckCards.map((el) => {
                        enable1 = this.check_move(el)
                        if (enable1 == true) {
                            enable = true
                        }
                    })
                    if (enable == false) {
                        this.store.dispatch(ActionGenerators.takeCardComputer(this.giveCard()))
                        mydeckCards = Object.keys(this.store.getState().computer)
                    }
                } while (enable == false)
                this.make_move_computer()
                break;

            case 2:
                this.check_move_user()
                break;

            case 3:
                this.render_again()
                this.make_move_computer()
                break;

            case 6:
                if (mydeckCards.length != 0) {
                    var mast = [0, 0, 0, 0]

                    mydeckCards.forEach((el) => {
                        if (el > 0 && el < 10) {
                            mast[0]++
                        }
                        if (el > 9 && el < 19) {
                            mast[1]++
                        }
                        if (el > 18 && el < 28) {
                            mast[2]++
                        }
                        if (el > 27 && el < 37) {
                            mast[3]++
                        }
                    })

                    let max = mast.indexOf(Math.max(...mast))
                    max++

                    this.store.dispatch(ActionGenerators.changeMast(max))
                    this.check_move_user()
                }
                else {
                    this.store.dispatch(ActionGenerators.changeMast(5))
                    this.finish_state()
                }
                break;

            default:
                if (mydeckCards.length != 0) {
                    this.check_move_user()
                }
                else {
                    this.finish_state()
                }
                break;
        }
    }
}

export default Computer;