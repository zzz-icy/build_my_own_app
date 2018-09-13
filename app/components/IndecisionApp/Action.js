import React from 'react';
import PropTypes from 'prop-types';

// const Action = (props) => {
//     return (
//         <div>
//             <button
//                 disabled={!props.hasOption} // if class based should be this.props
//                 onClick={props.handlePick}
//             >
//                 What should I do?
//             </button>
//         </div>
//     );
// };

/* eslint-disable indent */
// prettier-ignore
// refactored to use consice syntax
const Action = (props) => (
    <div>
        <button
            disabled={!props.hasOption} // if class based should be this.props
            onClick={props.handlePick}
            className="big-button"
        >
            What should I do?
            </button>
    </div>
);

/* eslint-disable indent */
// prettier-ignore
Action.propTypes = {
    hasOption: PropTypes.bool,
    handlePick: PropTypes.func,
};
export default Action;

// class Action extends React.Component {
//     // define method
//     // handlePick() {  // this is a method for Action component in new and consice syntax, outside render
//     //     alert('handlepick');
//     // }
//     render() {

//         return (
//             <div>
//                 <button disabled={!this.props.hasOption} onClick={this.props.handlePick} >What should I do?</button>
//             </div>
//         );
//     }
// }
