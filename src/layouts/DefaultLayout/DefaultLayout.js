import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';

import classNames from 'classnames/bind';
import styles from './Defaultlayout.module.scss';

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

Defaultlayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Defaultlayout;
