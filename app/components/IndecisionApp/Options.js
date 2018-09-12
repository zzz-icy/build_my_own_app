import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

/* eslint-disable indent */
// prettier-ignore
const Options = (props) =>
    (
        <div>
            <div className="widget-header" >
                <h3 className="widget-header__title">Your Options</h3>
                <button
                    className="button button--link"   // button class and its modifier
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>

            {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
            {props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            )
            )}
        </div>
    );

/* eslint-disable indent */
// prettier-ignore
Options.propTypes = {
    handleDeleteOption: PropTypes.any,
    handleDeleteOptions: PropTypes.func,
    options: PropTypes.any,
};
// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this); // one way is calling bind() in constructor, the other way is calling bind() inline in render()
//     // }
//     // so how did we break that context, use props in the method but not render method
//     // handleRemoveAll() {
//     //     alert('handle remove all');
//     //     console.log(this.props.options);
//     // console.log(this.props.options); lose the context
//     // example
//     // const func = function () {
//     // console.log(this)
//     // }.bind(this);  get the context back, reset the context
//     // func();   output is undefine, because already lose that context, then hoe to set the binding
//     // Uncaught TypeError: Cannot read property 'props' of undefined
//     // }
//     // render() is also a method of Options component, can not be arrow function, or have no access to handleRemoveAll

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions} >Remove All</button>
//                 {this.props.options.map((option) => {
//                     return <Option key={option} optionText={option} />;
//                 })}
//             </div>
//         );
//     }
// }

export default Options;
