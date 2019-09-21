import React, { Component } from 'react';
import Slider from '../slider/slider'
import './slider_and_description.css'

class Slider_And_Description extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    goFacebook = () => {
        window.location.assign('https://www.facebook.com/groups/mastercomp.uzh/')
    }

    render() {
        return (
            <>
                <Slider />
                <hr />
                <div className="description">
                    <p> MasterComp - надає широкий пакет послуг у сфері ремонту та обслуговування комп’ютерної техніки. Ми вже сім років на ринку, маємо великий досвід проведення робіт у даній сфері обслуговування. В нас вже досить велика база постійних клієнтів, яка все далі збільшується. Ми завжди готові вивчати проблеми наших клієнтів, та шукати найбільш прийнятні шляхи для їх вирішення. </p>
                    <p> До основних послуг входить: </p>
                    <ul>
                        <li>
                            Діагностика та ремонт (комп’ютерів, ноутбуків, планшетів, та моб. телефонів)
                        </li>
                        <li>
                            Підключення принтерів та МФУ
                        </li>
                        <li>
                            Налаштування мережевого обладнання
                        </li>
                        <li>
                            Встановлення програмного забезпечення
                        </li>
                        <li>
                            Програмна та внутрішня чистка
                        </li>
                        <li>
                            Заміна витратних матеріалів
                        </li>
                        <li>
                            Та багато іншого
                        </li>
                    </ul>
                    <p> Переваги наших робіт : Якість, Ціна, Швидкість. </p>
                    <p> Варіанти співпраці між нами та клієнтами : ‘’Клієнт до нас’’ або ‘’Ми до клієнта’’. </p>
                    <p> Ми турбуємось про наших клієнтів, тому надаємо гарантовані знижки для постійних клієнтів. В будь-якій спірній ситуації завжди встаємо на сторону наших клієнтів. </p>
                    <p> Наша адреса: м.Ужгород. вул.Стрільнична буд. 80А (р-н. Шахта, біля Кардіодиспансеру). </p>
                    <p> Також ви можете знайти відгуки на проведені нами роботи у спільноті <samp className="Facebook" onClick={this.goFacebook}>Facebook</samp>. </p>
                </div>
                <br />
            </>
        );
    }
}

export default Slider_And_Description;

