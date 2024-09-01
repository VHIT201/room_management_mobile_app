import React from "react";
import RootNavigation from "../../navigation/RootNavigation";
import MessageListMainView from "./template/ChatListMainView";

const MessageListContainer = props => {
    const {t} = props

    const onNavigateTo = path => {
        RootNavigation.navigate(path)
    }

    const messagelistProps = {
        onNavigateTo,
        t
    }

    return <MessageListMainView {...messagelistProps} />
}

export default MessageListContainer;