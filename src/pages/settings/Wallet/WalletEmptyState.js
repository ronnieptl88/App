import React from 'react';
import PropTypes from 'prop-types';
import IllustratedHeaderPageLayout from '../../../components/IllustratedHeaderPageLayout';
import useLocalize from '../../../hooks/useLocalize';
import * as LottieAnimations from '../../../components/LottieAnimations';
import Button from '../../../components/Button';
import Navigation from '../../../libs/Navigation/Navigation';
import ROUTES from '../../../ROUTES';
import * as Illustrations from '../../../components/Icon/Illustrations';
import FeatureList from '../../../components/FeatureList';
import useTheme from '../../../styles/themes/useTheme';
import SCREENS from '../../../SCREENS';

const propTypes = {
    /** The function that is called when a menu item is pressed */
    onAddPaymentMethod: PropTypes.func.isRequired,
};

const WALLET_FEATURES = [
    {
        icon: Illustrations.MoneyIntoWallet,
        translationKey: 'walletPage.getPaidBackFaster',
    },
    {
        icon: Illustrations.OpenSafe,
        translationKey: 'walletPage.secureAccessToYourMoney',
    },
    {
        icon: Illustrations.HandEarth,
        translationKey: 'walletPage.receiveMoney',
    },
];

function WalletEmptyState({onAddPaymentMethod}) {
    const theme = useTheme();
    const {translate} = useLocalize();
    return (
        <IllustratedHeaderPageLayout
            backgroundColor={theme.PAGE_BACKGROUND_COLORS[SCREENS.SETTINGS.WALLET]}
            illustration={LottieAnimations.FastMoney}
            onBackButtonPress={() => Navigation.goBack(ROUTES.SETTINGS)}
            title={translate('common.wallet')}
            footer={
                <Button
                    accessibilityLabel={translate('paymentMethodList.addPaymentMethod')}
                    success
                    text={translate('paymentMethodList.addPaymentMethod')}
                    onPress={onAddPaymentMethod}
                />
            }
        >
            <FeatureList
                menuItems={WALLET_FEATURES}
                headline="walletPage.getPaidFaster"
                description="walletPage.addPaymentMethod"
            />
        </IllustratedHeaderPageLayout>
    );
}

WalletEmptyState.displayName = 'WalletEmptyState';
WalletEmptyState.propTypes = propTypes;

export default WalletEmptyState;
