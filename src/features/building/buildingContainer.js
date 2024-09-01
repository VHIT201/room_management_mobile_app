import React from "react";
import RootNavigation from "../../navigation/RootNavigation";
import BuildingMainView from "./template/BuildingMainView";

const BuildingContainer = props => {
    const {t} = props

    const onNavigateTo = path => {
        RootNavigation.navigate(path)
    }

    const buildingProps = {
        onNavigateTo,
        t
    }

    return <BuildingMainView {...buildingProps} />
}

export default BuildingContainer;