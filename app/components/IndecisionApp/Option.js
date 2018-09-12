import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable indent */
// prettier-ignore
// can not use export default here
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
            </button>
    </div>
);

/* eslint-disable indent */
// prettier-ignore
Option.propTypes = {
    handleDeleteOption: PropTypes.func,
    count: PropTypes.any,
    optionText: PropTypes.any,
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p> {this.props.optionText} </p>
//             </div>
//         );
//     }
// }

export { Option as default };
