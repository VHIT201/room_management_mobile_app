import React from "react";

import { ToastMessage } from "../../utils/MessageUtil";
import { useTranslation } from "react-i18next";
import CashFlowContainer from "./cashflowContainer";
export default function CashFlowScreen(props) {
    const {t} = useTranslation()


    const cashflowContainerProps = {
        t
    }

    return <CashFlowContainer {...cashflowContainerProps} />
}