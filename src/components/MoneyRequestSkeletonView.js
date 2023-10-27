import React from 'react';
import {Rect} from 'react-native-svg';
import SkeletonViewContentLoader from 'react-content-loader/native';
import variables from '../styles/variables';
import useTheme from '../styles/themes/useTheme';
import useThemeStyles from '../styles/useThemeStyles';

function MoneyRequestSkeletonView() {
    const theme = useTheme();
    const styles = useThemeStyles();
    return (
        <SkeletonViewContentLoader
            animate
            width={styles.w100.width}
            height={variables.moneyRequestSkeletonHeight}
            backgroundColor={theme.borderLighter}
            foregroundColor={theme.border}
        >
            <Rect
                x="16"
                y="20"
                width="40"
                height="8"
            />
            <Rect
                x="16"
                y="46"
                width="120"
                height="20"
            />
            <Rect
                x="16"
                y="78"
                width="80"
                height="8"
            />
        </SkeletonViewContentLoader>
    );
}

MoneyRequestSkeletonView.displayName = 'MoneyRequestSkeletonView';
export default MoneyRequestSkeletonView;
