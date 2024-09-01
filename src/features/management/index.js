import React from "react";

import { ToastMessage } from "../../utils/MessageUtil";
import { useTranslation } from "react-i18next";
import ManagementContainer from "./managementContainer";
export default function ManagementScreen(props) {
    const {t} = useTranslation()


    const managementContainerProps = {
        t
    }

    return <ManagementContainer {...managementContainerProps} />
}