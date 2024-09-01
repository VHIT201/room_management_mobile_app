import React from "react";
import RootNavigation from "../../navigation/RootNavigation";
import ManagementMainView from "./template/ManagementMainView";

const ManagementContainer = props => {
    const {t} = props

    const onNavigateTo = path => {
        RootNavigation.navigate(path)
    }

    const managementProps = {
        onNavigateTo,
        t
    }

    return <ManagementMainView {...managementProps} />
}

export default ManagementContainer;