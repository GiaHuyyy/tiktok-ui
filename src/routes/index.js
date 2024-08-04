import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Discover from '~/pages/Discover';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Không cần đăng nhập
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.discover, component: Discover },
    { path: config.routes.following, component: Following },
    // { path: config.routes '/upload', component: Upload, layout: null }, // Layout riêng biệt không có Default Layout
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }, // Chỉ lấy Header
];

// Đăng nhập mới xem được (Login)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
