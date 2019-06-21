import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { createStore } from 'redux'
import ActionRegularsGenerators from '../actions/ActionGenerators'
import RegularsTable from '../components/RegularsTable'
import AddForm from '../components/AddForm'

class RegularsApp extends Component {
    constructor(props) {
        super(props);
        this.store=this.props.store
    }

    onAddClick(e, name, day)
    {
        e.preventDefault()
        this.store.dispatch(ActionRegularsGenerators.addRegular(name, day))
    }

    onDelClick(id)
    {
        this.store.dispatch(ActionRegularsGenerators.deleteRegular(id))
    }

    render()
    {
        let reg = this.store.getState().regulars;
        return (
            <div>
                <RegularsTable regulars={reg} onDelClick={this.onDelClick.bind(this)} />
                <AddForm onAddClick={this.onAddClick.bind(this)} />
            </div>
        )
    }
}

RegularsApp.propTypes = {
    store: PropTypes.object.isRequired
}

export default RegularsApp