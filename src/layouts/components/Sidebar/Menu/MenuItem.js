import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ icon, iconActive, title, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            {({ isActive }) => (
                <>
                    <span className={cx('icon')}>{isActive ? iconActive : icon}</span>
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default MenuItem;
