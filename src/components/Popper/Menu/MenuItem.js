import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    // Điều kiện render dựa trên thuộc tính của item (data)
    const classed = cx('menu-item', { separate: data.separate });

    if (data.to) {
        return (
            <Link to={data.to} className={classed}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </Link>
        );
    } else if (data.onClick) {
        return (
            <button className={classed} onClick={data.onClick}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </button>
        );
    } else if (data.href) {
        return (
            <a href={data.href} target="_blank" rel="noreferrer" className={classed}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </a>
        );
    } else {
        return (
            <div className={classed} onClick={onClick}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </div>
        );
    }
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
