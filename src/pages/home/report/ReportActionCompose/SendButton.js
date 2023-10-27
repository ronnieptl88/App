import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import useThemeStyles from '../../../../styles/useThemeStyles';
import useTheme from '../../../../styles/themes/useTheme';
import Icon from '../../../../components/Icon';
import * as Expensicons from '../../../../components/Icon/Expensicons';
import CONST from '../../../../CONST';
import Tooltip from '../../../../components/Tooltip';
import PressableWithFeedback from '../../../../components/Pressable/PressableWithFeedback';
import useLocalize from '../../../../hooks/useLocalize';

const propTypes = {
    /** Whether the button is disabled */
    isDisabled: PropTypes.bool.isRequired,

    /** Handle clicking on send button */
    handleSendMessage: PropTypes.func.isRequired,
};

function SendButton({isDisabled: isDisabledProp, handleSendMessage}) {
    const theme = useTheme();
    const styles = useThemeStyles();
    const {translate} = useLocalize();

    const Tap = Gesture.Tap()
        .enabled()
        .onEnd(() => {
            handleSendMessage();
        });

    return (
        <View
            style={styles.justifyContentEnd}
            // Keep focus on the composer when Send message is clicked.
            onMouseDown={(e) => e.preventDefault()}
        >
            <GestureDetector gesture={Tap}>
                <Tooltip text={translate('common.send')}>
                    <PressableWithFeedback
                        style={({pressed, isDisabled}) => [
                            styles.chatItemSubmitButton,
                            isDisabledProp || pressed || isDisabled ? undefined : styles.buttonSuccess,
                            isDisabledProp ? styles.cursorDisabled : undefined,
                        ]}
                        accessibilityRole={CONST.ACCESSIBILITY_ROLE.BUTTON}
                        accessibilityLabel={translate('common.send')}
                    >
                        {({pressed}) => (
                            <Icon
                                src={Expensicons.Send}
                                fill={isDisabledProp || pressed ? theme.icon : theme.textLight}
                            />
                        )}
                    </PressableWithFeedback>
                </Tooltip>
            </GestureDetector>
        </View>
    );
}

SendButton.propTypes = propTypes;
SendButton.displayName = 'SendButton';

export default SendButton;
