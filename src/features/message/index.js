import React from "react";

import { ToastMessage } from "../../utils/MessageUtil";
import { useTranslation } from "react-i18next";
import ChatListContainer from "./chatlistContainer";
export default function ChatListScreen(props) {
    const {t} = useTranslation()


    const chatlistContainerProps = {
        t
    }

    return <ChatListContainer {...chatlistContainerProps} />
}