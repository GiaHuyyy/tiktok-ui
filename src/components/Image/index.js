import { useState, forwardRef } from 'react';
import images from '~/assets/images';
function Image({ src, alt, className, fallBack: customFallBack = images.noImage }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallBack);
    };
    return <img ref={ref} src={fallBack || src} alt={alt} className={className} onError={handleError} />;
}

export default forwardRef(Image);
