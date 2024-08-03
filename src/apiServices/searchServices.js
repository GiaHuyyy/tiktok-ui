import * as request from '~/utils/request';
export const searchApi = async (q, type = 'less') => {
    if (!q) {
        console.log('Không có gì để tìm');
        return;
    }
    try {
        const res = await request.get('users/search', {
            params: { q, type },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

searchApi();
