import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import useThemeStyles from '../styles/useThemeStyles';
import Icon from './Icon';
import * as Expensicons from './Icon/Expensicons';
import useTheme from '../styles/themes/useTheme';

const propTypes = {
    /** Should we show the checkmark inside the circle */
    isChecked: PropTypes.bool,

    /** Additional styles to pass to SelectCircle */
    // eslint-disable-next-line react/forbid-prop-types
    styles: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
    isChecked: false,
    styles: [],
};

function SelectCircle(props) {
    const theme = useTheme();
    const styles = useThemeStyles();
    return (
        <View style={[styles.selectCircle, styles.alignSelfCenter, ...props.styles]}>
            {props.isChecked && (
                <Icon
                    src={Expensicons.Checkmark}
                    fill={theme.iconSuccessFill}
                />
            )}
        </View>
    );
}

SelectCircle.propTypes = propTypes;
SelectCircle.defaultProps = defaultProps;
SelectCircle.displayName = 'SelectCircle';

export default SelectCircle;
