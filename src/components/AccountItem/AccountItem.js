import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    <span className={cx('check')}>{data.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                </h4>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: propTypes.object.isRequired,
};
export default AccountItem;
