import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header({ setTheme, currentTheme }) {
    // Change theme
    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Change logo
    const changeLogo = currentTheme === 'light' ? images.logo : images.logoLight;

    // Handle search
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Search more
    const [text, setText] = useState('');

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <a href="/" className={cx('logo')}>
                    <img src={changeLogo} alt="TikTok" />
                </a>

                {/* Search */}
                <div>
                    <Tippy
                        // visible={searchResult.length > 0}
                        interactive
                        render={(attrs) => (
                            <div>
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4 className={cx('search-title')}>Bạn có thể thích</h4>
                                        <ul className={cx('search-list')}>
                                            <li className={cx('search-item')}>
                                                <img src={images.arrowTop} alt="" />
                                                Gia Huy
                                            </li>
                                            <li className={cx('search-item')}>
                                                <img src={images.arrowTrend} alt="" />
                                                Trend Vừa Hận Vừa Yêu Remix
                                            </li>
                                            <li className={cx('search-item')}>
                                                <img src={images.arrowTrend} alt="" />
                                                Vụ Phốt Obito
                                            </li>
                                            <li className={cx('search-item')}>
                                                <img src={images.arrowTrend} alt="" />
                                                Xá Xị Con Lâm Vỹ Dạ Nói Chuyện Cô Mấy Tuổi
                                            </li>
                                            <li className={cx('search-item')}>
                                                <span className={cx('dot')}></span>
                                                Con Gái Bác Trọng Tại Lễ Viếng
                                            </li>
                                            <li className={cx('search-item')}>
                                                <span className={cx('dot')}></span>
                                                Edit Kazuha Heiji
                                            </li>
                                            <li className={cx('search-item')}>
                                                <span className={cx('dot')}></span>
                                                lego mixue mua ở đâu
                                            </li>
                                            <li className={cx('search-item')}>
                                                <span className={cx('dot')}></span>
                                                Ai Là Đom Đóm Giơ Tay Lên CapCut
                                            </li>
                                            <li className={cx('search-item')}>
                                                <span className={cx('dot')}></span>
                                                Chuẩn Bị Phần Thi National Costume MGVN 2024
                                            </li>
                                            <li className={cx('search-item')}>
                                                <span className={cx('dot')}></span>
                                                Mashup Mời Trầu Và Ái Nộ
                                            </li>
                                        </ul>
                                        <h4 className={cx('search-title')}>Account</h4>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <span className={cx('search-more')}>
                                            Thêm tất cả kết quả tìm kiếm cho "{text}"
                                        </span>
                                    </PopperWrapper>
                                </div>
                            </div>
                        )}
                    >
                        <form className={cx('search')}>
                            <input
                                type="text"
                                placeholder="Search"
                                className={cx('search-input')}
                                spellCheck="false"
                                onChange={(e) => setText(e.target.value)}
                            />
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
                    </Tippy>
                </div>

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
