import React from 'react';
import PropTypes from 'prop-types';
/* eslint-disable indent */
// prettier-ignore
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);

/* eslint-disable indent */
// prettier-ignore
Header.defaultProps = {
    title: 'Indecision',
};
/* eslint-disable indent */
// prettier-ignore
Header.propTypes = {
    subtitle: PropTypes.any,
    title: PropTypes.any,
};
export default Header;

// can be stateless functional component
// class Header extends React.Component {  // component is a class itself, must define render function
//     render() {

//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
