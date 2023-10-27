/* eslint-disable rulesdir/onyx-props-must-have-default */
import React from 'react';
import {View} from 'react-native';
import PressableWithoutFeedback from '../../../components/Pressable/PressableWithoutFeedback';
import Button from '../../../components/Button';
import useThemeStyles from '../../../styles/useThemeStyles';
import * as Session from '../../../libs/actions/Session';
import useLocalize from '../../../hooks/useLocalize';
import CONST from '../../../CONST';

function SignInButton() {
    const styles = useThemeStyles();
    const {translate} = useLocalize();

    return (
        <PressableWithoutFeedback
            accessibilityLabel={translate('sidebarScreen.buttonMySettings')}
            accessibilityRole={CONST.ACCESSIBILITY_ROLE.BUTTON}
            onPress={Session.signOutAndRedirectToSignIn}
        >
            <View style={styles.signInButtonAvatar}>
                <Button
                    medium
                    success
                    text={translate('common.signIn')}
                    onPress={Session.signOutAndRedirectToSignIn}
                />
            </View>
        </PressableWithoutFeedback>
    );
}

SignInButton.displayName = 'SignInButton';
export default SignInButton;
