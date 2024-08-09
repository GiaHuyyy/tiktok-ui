import Button from '~/components/Button';
import styles from './AccountItemPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItemPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/51116d7c8531c46d5f64dd51a42d6610.jpeg?lk3s=a5d48078&nonce=28223&refresh_token=b35892b249e27564767fc2aa77a1ba02&x-expires=1723363200&x-signature=gvsFhRbDO6ELdVt3y2rKL%2FjphMk%3D&shp=a5d48078&shcp=81f88b70"
                    alt="abc"
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>teiubou</span>
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </p>
                <p className={cx('username')}>@teiubou</p>
                <div className={cx('analytics')}>
                    <div>
                        <strong className={cx('value')}>1.2M</strong>
                        <span className={cx('followers')}>Followers</span>
                    </div>
                    <div>
                        <strong className={cx('value')}>429.9M</strong>
                        <span className={cx('like')}>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountItemPreview;
