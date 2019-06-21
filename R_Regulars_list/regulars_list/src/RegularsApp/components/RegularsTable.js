import React, { Component } from 'react';
import PropTypes from 'prop-types'

const RegularsTable = ({ regulars, onDelClick }) => {
    return (Object.keys(regulars).length > 0) ? (
        <table>
            <thead>
                <th> День </th>
                <th> Ім'я </th>
                <th> Видалити </th>
            </thead>
            <tbody>
                {
                    Object.keys(regulars).map((el) => (
                        
                        <>
                            <td> {regulars[el].day} </td>
                            <td> {regulars[el].name} </td>
                            <td> <button onClick={()=>onDelClick(regulars[el].id)}> Видалити </button> </td>
                        </>
                    ))
                }
            </tbody>
        </table>)
        : <div> Список порожній </div>
}

RegularsTable.propTypes = {
    regulars: PropTypes.object,
    onDelClick: PropTypes.func.isRequired
}

export default RegularsTable