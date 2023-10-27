import React from 'react';
import {View} from 'react-native';
import useTheme from '../../styles/themes/useTheme';
import useThemeStyles from '../../styles/useThemeStyles';
import Icon from '../Icon';
import withLocalize, {withLocalizePropTypes} from '../withLocalize';
import Text from '../Text';
import * as Expensicons from '../Icon/Expensicons';
import * as Illustrations from '../Icon/Illustrations';
import variables from '../../styles/variables';

const propTypes = {
    ...withLocalizePropTypes,
};

function ExpiredValidateCodeModal(props) {
    const theme = useTheme();
    const styles = useThemeStyles();
    return (
        <View style={styles.deeplinkWrapperContainer}>
            <View style={styles.deeplinkWrapperMessage}>
                <View style={styles.mb2}>
                    <Icon
                        width={variables.modalTopIconWidth}
                        height={variables.modalTopIconHeight}
                        src={Illustrations.ToddBehindCloud}
                    />
                </View>
                <Text style={[styles.textHeadline, styles.textXXLarge, styles.textAlignCenter]}>{props.translate('validateCodeModal.expiredCodeTitle')}</Text>
                <View style={[styles.mt2, styles.mb2]}>
                    <Text style={[styles.fontSizeNormal, styles.textAlignCenter]}>{props.translate('validateCodeModal.expiredCodeDescription')}</Text>
                </View>
            </View>
            <View style={styles.deeplinkWrapperFooter}>
                <Icon
                    width={variables.modalWordmarkWidth}
                    height={variables.modalWordmarkHeight}
                    fill={theme.success}
                    src={Expensicons.ExpensifyWordmark}
                />
            </View>
        </View>
    );
}

ExpiredValidateCodeModal.propTypes = propTypes;
ExpiredValidateCodeModal.displayName = 'ExpiredValidateCodeModal';
export default withLocalize(ExpiredValidateCodeModal);
