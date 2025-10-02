import { RFValue } from 'react-native-responsive-fontsize';

const Theme = {
    colors: {
        appColor: '#3091FF',
        backgroundColor: '#FFFFFF',
        overlay: '#00000066',
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
        bgNew: '#F8F9FC',

    },
    responsiveSize: {
        size2: RFValue(2),
        size3: RFValue(3),
        size5: RFValue(5),
        size8: RFValue(8),
        size10: RFValue(10),
        size11: RFValue(11),
        size13: RFValue(13),
        size14: RFValue(14),
        size15: RFValue(15),
        size18: RFValue(18),
        size20: RFValue(20),
        size22: RFValue(22),
        size24: RFValue(24),
        size50: RFValue(50),
        size75: RFValue(75),
        size100: RFValue(100),
    },
    images: {
        logo: require('@/assets/logo.png'),
    }
}

export default Theme;
