import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Header({ setTheme, currentTheme }) {
    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const changeLogo = currentTheme === 'light' ? images.logo : images.logoLight;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <a href="/" className={cx('logo')}>
                    <img src={changeLogo} alt="TikTok" />
                </a>

                {/* Search */}
                <form className={cx('search')}>
                    <input type="text" placeholder="Search" className={cx('search-input')} spellCheck="false" />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <span className={cx('search-separate')}></span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>

                {/* Action */}
                <div className={cx('action')}>
                    <button className={cx('action-btn')}>Đăng nhập</button>
                    <div className={cx('action-option', 'icon')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                    <button onClick={handleTheme}>Change theme</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
