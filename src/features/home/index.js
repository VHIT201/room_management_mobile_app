import React from "react";

import { ToastMessage } from "../../utils/MessageUtil";
import { useTranslation } from "react-i18next";
import HomeContainer from "./homeContainer";
export default function HomeScreen(props) {
    const {t} = useTranslation()

    const homeContainerProps = {
        t
    }

    return <HomeContainer {...homeContainerProps} />
}