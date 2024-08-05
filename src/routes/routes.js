import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Explore from '~/pages/Explore';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Friends from '~/pages/Friends';
import Live from '~/pages/Live';

// Không cần đăng nhập
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.live, component: Live },
    // { path: config.routes '/upload', component: Upload, layout: null }, // Layout riêng biệt không có Default Layout
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }, // Chỉ lấy Header
];

// Đăng nhập mới xem được (Login)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
