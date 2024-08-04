import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary,
    outline,
    text,
    rounded,
    circle,
    disabled,
    small,
    large,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classed = cx('wrapper', {
        [className]: className,
        primary: primary,
        outline: outline,
        text: text,
        rounded: rounded,
        circle: circle,
        disabled: disabled,
        small: small,
        large: large,
    });

    return (
        <Comp className={classed} {...props}>
            {children}
        </Comp>
    );
}

Button.propTypes = {
    to: propTypes.string,
    href: propTypes.string,
    primary: propTypes.bool,
    outline: propTypes.bool,
    text: propTypes.bool,
    rounded: propTypes.bool,
    circle: propTypes.bool,
    disabled: propTypes.bool,
    small: propTypes.bool,
    large: propTypes.bool,
    children: propTypes.node.isRequired,
    className: propTypes.string,
    onClick: propTypes.func,
};
export default Button;
