import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './Defaultlayout.module.scss';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Defaultlayout({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={cx('wrapper')} data-theme={theme}>
            <Header setTheme={setTheme} currentTheme={theme} />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout;
