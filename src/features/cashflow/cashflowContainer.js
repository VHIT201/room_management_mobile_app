import React from "react";
import RootNavigation from "../../navigation/RootNavigation";
import CashFlowMainView from "./template/CashFlowMainView";

const CashFlowContainer = props => {
    const {t} = props

    const onNavigateTo = path => {
        RootNavigation.navigate(path)
    }

    const cashflowProps = {
        onNavigateTo,
        t
    }

    return <CashFlowMainView {...cashflowProps} />
}

export default CashFlowContainer;