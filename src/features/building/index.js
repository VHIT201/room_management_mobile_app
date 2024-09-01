import React from "react";

import { ToastMessage } from "../../utils/MessageUtil";
import { useTranslation } from "react-i18next";
import BuildingContainer from "./buildingContainer";
export default function BuildingScreen(props) {
    const {t} = useTranslation()


    const buildingContainerProps = {
        t
    }

    return <BuildingContainer {...buildingContainerProps} />
}