import { RFValue } from 'react-native-responsive-fontsize';

const Theme = {
    colors: {
        appColor: '#3091FF',
        backgroundColor: '#FFFFFF',
        transparent: 'transparent',

        textColor1: '#000000',
        textColor2: '#9A9A9A',
        textColor3: '#3091FF',
        textColor4: '#5B6473',
        textColor5: '#FFFFFF',

        borderColor: '#E0E0E0',
        borderColor1: '#3091FF',
        borderColor3: '#F1F5F9',
        errorColor: '#FF4D4D',

    },
    fontSizes: {
        small: RFValue(10),
        medium: RFValue(11),
        large: RFValue(14),
        semiLarge: RFValue(16),
        xlarge: RFValue(24),
    },
    spacing: {
        small: RFValue(2),
        semiSmall: RFValue(5),
        semiMedium: RFValue(8),
        medium: RFValue(10),
        size15: RFValue(15),
        large: RFValue(18),
        xlarge: RFValue(24),
        size50: RFValue(50),
    },
    borderRadius: {
        small: 4,
        medium: RFValue(8),
        large: 12,
    },
    heights: {
        size14: RFValue(14),
        size18: RFValue(18),
        size22: RFValue(22),
        medium: RFValue(75),
        semiMedium: RFValue(100),
    },
    images: {
        logo: require('@/assets/logo.png'),
    }
}

export default Theme;
