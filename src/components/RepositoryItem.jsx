import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import theme from '../themes'
import StyledText from './StyledText'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

const parseThousands = value => {
    return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryItemHeader = (props) => {
    return (
        <View style={{ flexDirection: 'row', paddingBottom: 2}}>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl}} />
            <View style={{flex: 1, paddingLeft: 10}}>
                <StyledText fontWeight='bold'>{props.fullName}</StyledText>
                <StyledText color='secondary'>{props.description}</StyledText>            
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
        </View>
    )
}

const RepositoryStats = props => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
                <StyledText align='center'>Stars</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
                <StyledText align='center'>Forks</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.reviewCount)}</StyledText>
                <StyledText align='center'>Review</StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>{parseThousands(props.ratingAverage)}</StyledText>
                <StyledText align='center'>Rating</StyledText>
            </View>
        </View>
    )
}

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>
  )
}

export default RepositoryItem