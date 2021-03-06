import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
/* eslint-disable indent */
// prettier-ignore
export default class AddOption extends React.Component {
    state = {
        error: undefined,
    }
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    // the handleAddOption here refers to the method defined within AddOption component, not the props passed in
    // this.state = {
    //     error: undefined,
    // }
    // }

    handleAddOption = (e) => { // make it a arrow function, because arrow function has no data binding 
        e.preventDefault(); // this will stop the full page refreshing
        // console.log(e);
        const option = e.target.elements.option.value.trim();
        // .trim() take off spaces not internal
        // e.target is gonna point to the element the event started on
        // if (option) { // nolonger need if condition here, it's handled up above in the parent component
        // 
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.push(option),
        //     };
        // }
        // );
        // this.props.handleAddOption(option); // call the props function here
        // e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);
        this.setState({
            error,
            // error   ES6 object shorthand
        });
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>

                    <input className="add-option__input" type='text' name='option' />
                    <button className="button">Add Option</button>

                </form>
            </div>
        );
    }
}
/* eslint-disable indent */
// prettier-ignore
AddOption.propTypes = {
    handleAddOption: PropTypes.func,
};
