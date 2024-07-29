// Layout
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Discover from '~/pages/Discover';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

// Không cần đăng nhập
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/discover', component: Discover },
    { path: '/following', component: Following },
    // { path: '/upload', component: Upload, layout: null }, // Layout riêng biệt không có Default Layout
    { path: '/upload', component: Upload, layout: HeaderOnly }, // Chỉ lấy Header
];

// Đăng nhập mới xem được (Login)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
