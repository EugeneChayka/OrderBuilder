import React from 'react'
import classes from './Input.module.sass';

const Input = (props) => {
    let inputElement = null

    switch (props.type) {
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={() => console.log('onChangeHandler!')}
            />
            break;

        case ('textarea'):
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
            />
            break;

        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={() => console.log('onChangeHandler!')}
                >
                    {props.elementConfig.options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            )
            break;

        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.elementConfig.value}
            />
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input
