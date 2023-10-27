import React, {useRef} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import useThemeStyles from '../../../styles/useThemeStyles';
import useDragAndDrop from '../../../hooks/useDragAndDrop';

const propTypes = {
    /** Content */
    children: PropTypes.node.isRequired,
};

function NoDropZone({children}) {
    const styles = useThemeStyles();
    const noDropZone = useRef(null);
    useDragAndDrop({
        dropZone: noDropZone,
        shouldAllowDrop: false,
    });
    return (
        <View
            ref={(e) => (noDropZone.current = e)}
            style={[styles.fullScreen]}
        >
            {children}
        </View>
    );
}

NoDropZone.displayName = 'NoDropZone';
NoDropZone.propTypes = propTypes;

export default NoDropZone;
