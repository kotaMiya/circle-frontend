import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/EventListsStyle';


const EventLists = ({ events }) => {
    console.log('from event lists', events);
    return ( 
        <View style={styles.root}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Upcoming Events</Text>
            </View>
            <View style={styles.contentContainer}>
                <ScrollView horizontal>
                
                    {events.map((event, i) => (
                        <View key={i} style={styles.circleCard}>
                            <View style={styles.circleCardTopContainer}>
                                <Text style={styles.circleCardTitle}>
                                    {event.title}
                                </Text>
                            </View>
                            <View style={styles.circleCardBottomContainer}>
                                <Text style={styles.circleCardName}>
                                    {event.circle.name}
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
    EventLists
};