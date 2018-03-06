import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/CircleLists';


const CircleLists = ({ circles }) => {
    return ( 
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Circles</Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView horizontal>
                
                    {circles.map((circle, i) => (
                        <View key={i} style={styles.circleCard}>
                            <View style={styles.circleCardTopContainer}>
                                <Text style={styles.circleCardTitle}>
                                    {circle.title}
                                </Text>
                            </View>
                            <View style={styles.circleCardBottomContainer}>
                                <Text style={styles.circleCardName}>
                                    {circle.group.name}
                                </Text>
                                <Text style={styles.circleCardDate}>
                                    Mar 5 10:10
                                </Text>
                            </View>
                        </View>
                    ))}
            
                </ScrollView>
            </View>
        </View>
    )
}

export { 
    CircleLists
};