// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';

import { Link } from 'react-router-dom';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import AccountItemPreview from './AccountItemPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountItemPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <HeadlessTippy interactive delay={[1000, 600]} offset={[0, 0]} placement="bottom" render={renderPreview}>
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
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/51116d7c8531c46d5f64dd51a42d6610.jpeg?lk3s=a5d48078&nonce=28223&refresh_token=b35892b249e27564767fc2aa77a1ba02&x-expires=1723363200&x-signature=gvsFhRbDO6ELdVt3y2rKL%2FjphMk%3D&shp=a5d48078&shcp=81f88b70"
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
            </HeadlessTippy>
        </div>
    );
}

// AccountItem.propTypes = {
//     data: PropTypes.object.isRequired,
// };

export default AccountItem;
