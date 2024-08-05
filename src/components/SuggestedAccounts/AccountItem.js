import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to="" className={cx('account-item')}>
            {/* <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <span className={cx('check')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>}
                </p>
                <p className={cx('username')}>{data.full_name}</p>
            </div> */}

            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/51116d7c8531c46d5f64dd51a42d6610.jpeg?lk3s=a5d48078&nonce=34031&refresh_token=3e361ab215b9c5a0620e0c38d6e6d6a7&x-expires=1723032000&x-signature=TuMRU5hcS7HCgCMLAhPYozIb730%3D&shp=a5d48078&shcp=81f88b70"
                alt="abc"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>teiubou</span>
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </p>
                <p className={cx('username')}>@teiubou</p>
            </div>
        </Link>
    );
}

// AccountItem.propTypes = {
//     data: PropTypes.object.isRequired,
// };
export default AccountItem;
