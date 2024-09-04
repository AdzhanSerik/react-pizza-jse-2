import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={288}
        height={548}
        viewBox="0 0 288 548"
        backgroundColor="#dedede"
        foregroundColor="#ffffff"
        {...props}
    >
        <circle cx="144" cy="135" r="121" />
        <rect x="45" y="288" rx="0" ry="0" width="212" height="45" />
        <rect x="45" y="350" rx="0" ry="0" width="212" height="45" />
        <rect x="45" y="420" rx="0" ry="0" width="212" height="45" />
    </ContentLoader>
)

export default MyLoader

