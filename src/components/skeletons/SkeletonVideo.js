import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const SkeletonVideo = () => {
    return (
        <div style={{ width: "100%", margin: "1rem 0" }}>
            <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
                <Skeleton height="180px" />
                <div>
                    <Skeleton style={{ margin: "0.5rem" }} circle height={40} width={40} />
                    <Skeleton height={40} width="75%" />
                </div>
            </SkeletonTheme>
        </div>
    )
}

export default SkeletonVideo