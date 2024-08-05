import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';

import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <button className={cx('more-btn')}>See more</button>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    title: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
