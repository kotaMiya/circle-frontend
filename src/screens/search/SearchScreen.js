import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements'

class SearchScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchBar
                    lightTheme
                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={text => console.log(text)}
                    onClear={text => console.log(text)}
                    placeholder='Type Here...' />
                <Text>Search Screen</Text>
            </View>
        )
    }
}

export default SearchScreen;