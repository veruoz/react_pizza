import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="135" cy="114" r="113"/>
            <rect x="0" y="258" rx="6" ry="6" width="280" height="26"/>
            <rect x="0" y="296" rx="6" ry="6" width="280" height="84"/>
            <rect x="1" y="402" rx="6" ry="6" width="96" height="32"/>
            <rect x="140" y="390" rx="30" ry="30" width="140" height="54"/>
        </ContentLoader>
    );
};

export default LoadingBlock;
