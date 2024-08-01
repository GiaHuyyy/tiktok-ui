import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    // Điều kiện render dựa trên thuộc tính của item (data)
    if (data.to) {
        return (
            <Link to={data.to} className={cx('menu-item')}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </Link>
        );
    } else if (data.onClick) {
        return (
            <button className={cx('menu-item')} onClick={data.onClick}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </button>
        );
    } else if (data.href) {
        return (
            <a href={data.href} target="_blank" rel="noreferrer" className={cx('menu-item')}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </a>
        );
    } else {
        return (
            <div className={cx('menu-item')} onClick={onClick}>
                <span className={cx('icon')}>{data.icon}</span>
                {data.title}
            </div>
        );
    }
}

export default MenuItem;
