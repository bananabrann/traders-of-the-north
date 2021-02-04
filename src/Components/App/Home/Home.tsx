import React from "react";

interface IHomeProps {
    versionNumber: string | undefined
}

const Home: React.FC<IHomeProps> = (props: IHomeProps) => {
    return(
        <div>
            <p>Home!</p>
            <p>{props.versionNumber}</p>
        </div>
    )
}

export default Home;