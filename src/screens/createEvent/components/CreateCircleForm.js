import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../commons';
import { eventValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateCircleForm';

const CreateCircleForm = ({
    createEvent,
    checkTitle,
    showDateTimePicker,
    handleSubmit,
    invalid,
    submitting
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.$deepKoamaru}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={Colors.$deepKoamaru}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
        <Button 
            raised
            fontFamily="workSansRegular"
            title={checkTitle}
            onPress={showDateTimePicker}
        />
    </View>
    <View style={styles.createButton}>
        <Button
            backgroundColor={ Colors.$blackRock }
            title="Create event"
            raised
            fontFamily="workSansRegular"
            disabled={invalid || submitting}
            onPress={handleSubmit(createEvent)}
        />
    </View>
  </View>
);

export default reduxForm({
  form: 'createCircle',
  validate: eventValidations
})(CreateCircleForm);