import React, { Component } from 'react';
import './classification.css'

const Classification = () => {
    return (
        <div className="classification">
            <h1> Класифікація </h1>
            <table>
                <th>
                </th>
                <th>
                    Business start
                </th>
                <th>
                    Business
                </th>
                <th>
                    Business pro
                </th>
                <tbody>
                    <tr>
                        <td>
                            Дизайн
                        </td>
                        <td>
                            Готовий шаблон
                        </td>
                        <td>
                            Готовий шаблон з доопрацюванням
                        </td>
                        <td>
                            Індивідуальний
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Час розробки
                        </td>
                        <td>
                            від 5 робочих днів
                        </td>
                        <td>
                            від 10 робочих днів
                        </td>
                        <td>
                            від 20 робочих днів
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Доменне ім'я на 1рік
                        </td>
                        <td>
                            Є
                        </td>
                        <td>
                            Є
                        </td>
                        <td>
                            Є
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Хостінг на 1рік
                        </td>
                        <td>
                            Є
                        </td>
                        <td>
                            Є
                        </td>
                        <td>
                            Є
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Вартість 
                        </td>
                        <td>
                            від 1350грн
                        </td>
                        <td>
                            від 2800грн
                        </td>
                        <td>
                            від 5400грн
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default Classification