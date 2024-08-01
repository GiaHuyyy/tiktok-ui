import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ items, children, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    // Render item
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <div>
            <Tippy
                interactive
                delay={[0, 800]}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('menu')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {history.length > 1 && (
                                <Header
                                    title={current.title}
                                    onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                                />
                            )}
                            {renderItem()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
