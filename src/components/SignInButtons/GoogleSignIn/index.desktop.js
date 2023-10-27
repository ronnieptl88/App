import React from 'react';
import {View} from 'react-native';
import withLocalize, {withLocalizePropTypes} from '../../withLocalize';
import IconButton from '../IconButton';
import CONFIG from '../../../CONFIG';
import ROUTES from '../../../ROUTES';
import useThemeStyles from '../../../styles/useThemeStyles';
import CONST from '../../../CONST';

const propTypes = {...withLocalizePropTypes};

const googleSignInWebRouteForDesktopFlow = `${CONFIG.EXPENSIFY.NEW_EXPENSIFY_URL}${ROUTES.GOOGLE_SIGN_IN}`;

/**
 * Google Sign In button for desktop flow.
 * @returns {React.Component}
 */
function GoogleSignIn() {
    const styles = useThemeStyles();
    return (
        <View style={styles.desktopSignInButtonContainer}>
            <IconButton
                onPress={() => {
                    window.open(googleSignInWebRouteForDesktopFlow);
                }}
                provider={CONST.SIGN_IN_METHOD.GOOGLE}
            />
        </View>
    );
}

GoogleSignIn.displayName = 'GoogleSignIn';
GoogleSignIn.propTypes = propTypes;

export default withLocalize(GoogleSignIn);
