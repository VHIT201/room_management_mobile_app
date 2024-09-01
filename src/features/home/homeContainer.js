import React from "react";
import RootNavigation from "../../navigation/RootNavigation";
import HomeMainView from "./template/HomeMainView";

const HomeContainer = props => {
    const {t} = props

    const onNavigateTo = path => {
        RootNavigation.navigate(path)
    }

    const homeProps = {
        onNavigateTo,
        t
    }

    return <HomeMainView {...homeProps} />
}

export default HomeContainer;