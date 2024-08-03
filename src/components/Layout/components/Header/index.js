import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faLightbulb, faVideo } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    CreatorIcon,
    DarkModeIcon,
    InboxIcon,
    LanguageIcon,
    LightModeIcon,
    LogoutIcon,
    MessageIcon,
    PlusIcon,
    ProfileIcon,
    QuestionIcon,
    SettingsIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/Search';

const cx = classNames.bind(styles);

function Header({ setTheme, currentTheme }) {
    // User logined
    const currentUser = true;

    // Change theme
    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Change logo
    const changeLogo = currentTheme === 'light' ? images.logo : images.logoLight;

    // Menu
    const MENU_ITEMS = [
        {
            icon: <CreatorIcon />,
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
            icon: <LanguageIcon />,
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
            icon: <QuestionIcon />,
            title: 'Feed back and help',
            to: '/feedback',
        },
        {
            icon: currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />,
            title: 'Dark mode',
            onClick: () => {
                handleTheme();
            },
        },
    ];

    // Menu user
    const MENU_ITEMS_USER = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/@zahuy',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coins',
        },
        {
            icon: <CreatorIcon />,
            title: 'Creater tools',
            children: {
                title: 'Creater tools',
                data: [
                    {
                        icon: <FontAwesomeIcon icon={faVideo} />,
                        title: 'LIVE Studio',
                        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
                    },
                    {
                        icon: <FontAwesomeIcon icon={faLightbulb} />,
                        title: 'LIVE Creator Hub',
                        href: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
                    },
                ],
            },
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <LanguageIcon />,
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
            icon: <QuestionIcon />,
            title: 'Feed back and help',
            to: '/feedback',
        },
        {
            icon: currentTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />,
            title: 'Dark mode',
            onClick: () => {
                handleTheme();
            },
        },
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    // Menu change (use i18next)
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
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={changeLogo} alt="TikTok" />
                </Link>

                {/* Search */}
                <Search />

                {/* Action */}
                {currentUser ? (
                    <div className={cx('user')}>
                        <Link to={routesConfig.upload}>
                            <Button text>
                                <PlusIcon />
                                Upload
                            </Button>
                        </Link>
                        <Tippy delay={[0, 200]} content="Message" placement="bottom">
                            <button className={cx('user-icon')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                            <button className={cx('user-icon', 'user-inbox')}>
                                <InboxIcon />
                            </button>
                        </Tippy>

                        <Menu items={MENU_ITEMS_USER} onChange={handleMenuChange}>
                            <Image src={images.avatar} alt="Gia Huy" className={cx('user-avatar')} />
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('action')}>
                        <Button primary>Log in</Button>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('action-option')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
