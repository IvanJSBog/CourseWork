import React from "react";
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
      <circle cx="137" cy="137" r="122" />
      <rect x="0" y="287" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="323" rx="10" ry="10" width="280" height="82" />
      <rect x="5" y="423" rx="3" ry="3" width="91" height="23" />
      <rect x="131" y="415" rx="20" ry="20" width="145" height="40" />
    </ContentLoader>
  );
};

export default LoadingBlock;
