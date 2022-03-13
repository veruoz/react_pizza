import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// class Button extends React.Component {
//     render() {
// console.log(this.props)
// выбор класса через classNames для более красивого оформления кода
// return <button className={classNames('button', {
//     'button--outline': this.props.outline,
// })}>{this.props.name}</button>
// условие через props для выбора класса оформления
// return <button className={`button ${this.props.outline ? 'button--outline' : ''}`}>{this.props.name}</button>
// чтобы написать название кнопки через разметку:
// return <button>{this.props.children}</button>
//     }
// }

// function Button(props) {
//     return (
//         <button className={classNames('button', props.className, {
//             'button--outline': props.outline,
//         })}>{props.children}</button>
//     )
// }

// деструктуризация для объекта (props) через {}, для массива через [] внутри указываются переменные(свойства) которые можно указать отдельно вне объекта, массива
function Button({ onClick, className, outline, children }) {
    return (
        <button onClick={onClick} className={classNames('button', className, {
            'button--outline': outline,
        })}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
