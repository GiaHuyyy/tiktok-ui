import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

import classNames from 'classnames/bind';
import styles from './Defaultlayout.module.scss';

const cx = classNames.bind(styles);
function Defaultlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout;
