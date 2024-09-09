import ContentLoader from "react-content-loader"

export default function MyLoader(props) {
    return (
        <ContentLoader
            speed={2}
            width={288}
            height={548}
            viewBox="0 0 288 548"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="124" cy="142" r="122" />
            <rect x="3" y="335" rx="0" ry="0" width="246" height="116" />
            <rect x="40" y="297" rx="0" ry="0" width="170" height="23" />
            <rect x="26" y="474" rx="0" ry="0" width="71" height="34" />
            <rect x="130" y="471" rx="0" ry="0" width="108" height="39" />
        </ContentLoader>
    )
}
