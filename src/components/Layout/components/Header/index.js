import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faMoon,
    faSun,
    faLanguage,
    faHouseFire,
    faCircleQuestion,
    faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

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

    // Menu
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faHouseFire} />,
            title: 'Creater tools',
            children: {
                title: 'Creater tools',
                data: [
                    {
                        icon: <FontAwesomeIcon icon={faLightbulb} />,
                        title: 'LIVE Creator Hub',
                        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        type: 'language',
                        code: 'jp',
                        title: '日本語',
                    },
                    {
                        type: 'language',
                        code: 'ko',
                        title: '한국어',
                    },
                    {
                        type: 'language',
                        code: 'zh',
                        title: '简体中文',
                    },
                    {
                        type: 'language',
                        code: 'ru',
                        title: 'Русский',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feed back and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={currentTheme === 'light' ? faMoon : faSun} />,
            title: 'Dark mode',
            onClick: () => {
                handleTheme();
            },
        },
    ];

    // Menu change
    const [language, setLanguage] = useState('en');
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                setLanguage(menuItem.code);
                break;
            default:
                break;
        }
    };

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
                            <button className={cx('clear')} onClick={() => setText('')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <button className={cx('loading')} onClick={() => setText('')}>
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
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('action-option', 'icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
