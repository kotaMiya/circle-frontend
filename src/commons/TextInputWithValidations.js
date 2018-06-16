import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import Colors from '../../constants/Colors';

const TextInputWithValidations = ({
    input, 
    containerStyle,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <View>
        <FormLabel fontFamily="workSansRegular" labelStyle={{ color: Colors.$blackRock }}>
            { label }
        </FormLabel>
        <FormInput 
            { ...input }
            { ...custom }
        />
        { error && touched && 
            <FormValidationMessage fontFamily="workSansRegular" labelStyle={{ color: Colors.$pinkGlamour }}>
                { error }
            </FormValidationMessage>
        }
    </View>
)

export default TextInputWithValidations;