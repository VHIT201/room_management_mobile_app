import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

export default function ChatListComponents({
    name,
    content,
    style,
    nameStyle,
    contentStyle,
    iconSource,
    styleIcon,
    onPress,
    rightIcon,
    leftIcon,
    time,
    timeStyle,
    disable,
    textContainerStyles,
    styleLeftIcon,
    timeTextStyle
})
{
    const isUri = (source) => typeof source === 'string' && (source.startsWith('http') || source.startsWith('https'));
    return (
        <TouchableOpacity style={style} disabled={disable} onPress={onPress}>
            {/* {leftIcon && <Image source={leftIcon} style={styleIcon} />} */}
            {leftIcon && <Image resizeMode='cover' source={isUri(leftIcon) ? { uri: leftIcon } : leftIcon} style={styleLeftIcon} />}
            <View style={textContainerStyles}>
                {name && <Text style={nameStyle}>{name}</Text>}
                {content && <Text numberOfLines={1} style={contentStyle}>{content}</Text>}
            </View>
            {iconSource && <Image source={iconSource} style={styleIcon} />}
            {rightIcon && <Image resizeMode='cover' source={isUri(rightIcon) ? { uri: rightIcon } : rightIcon} style={styleRightIcon} />}
            {time && (
                <View style={timeStyle}>
                <Text style={timeTextStyle}>{time}</Text>
                </View>
      )}
        </TouchableOpacity>
      )
}


const styles = StyleSheet.create({})