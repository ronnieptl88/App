import React from 'react';
import useThemeStyles from '../../styles/useThemeStyles';
import WrappedText from './WrappedText';
import inlineCodeBlockPropTypes from './inlineCodeBlockPropTypes';

function InlineCodeBlock(props) {
    const styles = useThemeStyles();
    const TDefaultRenderer = props.TDefaultRenderer;
    return (
        <TDefaultRenderer
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props.defaultRendererProps}
        >
            <WrappedText
                textStyles={[props.textStyle]}
                wordStyles={[props.boxModelStyle, styles.codeWordStyle]}
            >
                {props.defaultRendererProps.tnode.data}
            </WrappedText>
        </TDefaultRenderer>
    );
}

InlineCodeBlock.propTypes = inlineCodeBlockPropTypes;
InlineCodeBlock.displayName = 'InlineCodeBlock';
export default InlineCodeBlock;
