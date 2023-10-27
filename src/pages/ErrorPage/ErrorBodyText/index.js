import React from 'react';
import Text from '../../../components/Text';
import withLocalize, {withLocalizePropTypes} from '../../../components/withLocalize';
import TextLink from '../../../components/TextLink';
import CONST from '../../../CONST';
import useThemeStyles from '../../../styles/useThemeStyles';

const propTypes = {
    ...withLocalizePropTypes,
};

function ErrorBodyText(props) {
    const styles = useThemeStyles();
    return (
        <Text>
            {`${props.translate('genericErrorPage.body.helpTextMobile')} `}
            <TextLink
                href={CONST.NEW_EXPENSIFY_URL}
                style={[styles.link]}
            >
                {props.translate('genericErrorPage.body.helpTextWeb')}
            </TextLink>
        </Text>
    );
}

ErrorBodyText.displayName = 'ErrorBodyText';
ErrorBodyText.propTypes = propTypes;
export default withLocalize(ErrorBodyText);
