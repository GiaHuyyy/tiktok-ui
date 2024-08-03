import routesConfig from '~/config/routes';

// Layout
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Discover from '~/pages/Discover';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Không cần đăng nhập
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.discover, component: Discover },
    { path: routesConfig.following, component: Following },
    // { path: routesConfig '/upload', component: Upload, layout: null }, // Layout riêng biệt không có Default Layout
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly }, // Chỉ lấy Header
];

// Đăng nhập mới xem được (Login)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
