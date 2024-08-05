import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import { ExploreActiveIcon, ExploreIcon, FollowingActiveIcon, FollowingIcon, FriendsActiveIcon, FriendsIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, MessageIcon } from '~/components/Icons';


import config from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem icon={<HomeIcon />} iconActive={<HomeActiveIcon />} title="For you" to={config.routes.home} />
                <MenuItem icon={<ExploreIcon />} iconActive={<ExploreActiveIcon />} title="Explore" to={config.routes.explore} />
                <MenuItem icon={<FollowingIcon />} iconActive={<FollowingActiveIcon />} title="Following" to={config.routes.following} />
                <MenuItem icon={<FriendsIcon />} iconActive={<FriendsActiveIcon />} title="Friends" to={config.routes.friends} />
                <MenuItem icon={<LiveIcon />} iconActive={<LiveActiveIcon />} title="LIVE" to={config.routes.live} />
                <MenuItem icon={<MessageIcon />} iconActive={<MessageIcon />} title="Profile" to={config.routes.profile} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
