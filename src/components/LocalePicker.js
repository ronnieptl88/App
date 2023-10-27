import _ from 'underscore';
import React from 'react';
import {withOnyx} from 'react-native-onyx';
import PropTypes from 'prop-types';
import compose from '../libs/compose';
import * as App from '../libs/actions/App';
import withLocalize, {withLocalizePropTypes} from './withLocalize';
import ONYXKEYS from '../ONYXKEYS';
import CONST from '../CONST';
import Picker from './Picker';
import useThemeStyles from '../styles/useThemeStyles';
import useTheme from '../styles/themes/useTheme';

const propTypes = {
    /** Indicates which locale the user currently has selected */
    preferredLocale: PropTypes.string,

    /** Indicates size of a picker component and whether to render the label or not */
    size: PropTypes.oneOf(['normal', 'small']),

    ...withLocalizePropTypes,
};

const defaultProps = {
    preferredLocale: CONST.LOCALES.DEFAULT,
    size: 'normal',
};

function LocalePicker(props) {
    const theme = useTheme();
    const styles = useThemeStyles();
    const localesToLanguages = _.map(CONST.LANGUAGES, (language) => ({
        value: language,
        label: props.translate(`languagePage.languages.${language}.label`),
        keyForList: language,
        isSelected: props.preferredLocale === language,
    }));
    return (
        <Picker
            label={props.size === 'normal' ? props.translate('languagePage.language') : null}
            onInputChange={(locale) => {
                if (locale === props.preferredLocale) {
                    return;
                }

                App.setLocale(locale);
            }}
            items={localesToLanguages}
            size={props.size}
            value={props.preferredLocale}
            containerStyles={props.size === 'small' ? [styles.pickerContainerSmall] : []}
            backgroundColor={theme.signInPage}
        />
    );
}

LocalePicker.defaultProps = defaultProps;
LocalePicker.propTypes = propTypes;
LocalePicker.displayName = 'LocalePicker';

export default compose(
    withLocalize,
    withOnyx({
        preferredLocale: {
            key: ONYXKEYS.NVP_PREFERRED_LOCALE,
        },
    }),
)(LocalePicker);
