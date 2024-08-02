import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useState, useRef } from 'react';

import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchGlassIcon } from '~/components/Icons';
import images from '~/assets/images';

import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Search() {
    // Handle search
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    const handleClearSearch = () => {
        setSearchText('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
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
                            <span className={cx('search-more')}>Thêm tất cả kết quả tìm kiếm cho "{searchText}"</span>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <form className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        className={cx('search-input')}
                        spellCheck="false"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />

                    <button type="button" className={cx('clear')} onClick={handleClearSearch}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <span className={cx('search-separate')}></span>
                    <button className={cx('search-btn')}>
                        <SearchGlassIcon className={cx('search-btn-icon')} />
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
