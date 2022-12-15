import colors from './colors'
import fonts, { normalize } from '../utility/fonts';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    styleFull: {
        flex: 1,
        backgroundColor: colors.BACKGROUND
    },

    defaultText: {
        fontSize: fonts._14,
        fontFamily: fonts.FONT_FAMILY.Regular,
        color: colors.BLACK,
    },
  

    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: colors.GREY,
    },

  
    loaderCenter: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    

    headertext: {
        fontSize: fonts._18,
        fontFamily: fonts.FONT_FAMILY.Bold,
        color:colors.BLACK
    },

    labelMed: {
        color: colors.BLACK,
        fontFamily: fonts.FONT_FAMILY.Medium,
        fontSize: fonts._17
    },

    labelBold: {
        color: colors.BLACK,
        fontFamily: fonts.FONT_FAMILY.Bold,
        fontSize: fonts._17
    },


    primaryBtn:{
        backgroundColor:colors.PRIMARY,
        alignItems:'center',
    },

    secondaryBtn:{
        backgroundColor:colors.SECONDARY,
        alignItems:'center',
    },

    primaryBtnText:{
        fontFamily:fonts.FONT_FAMILY.Bold,
        fontSize:fonts._12,
        color:colors.STATIC_WHITE
    },

    errorText:{
        fontSize:fonts._12,
        fontFamily:fonts.FONT_FAMILY.Regular,
        color:colors.SECONDARY
    },

    filterFloatingBtn:{
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 15,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 10, height: 10 },
        shadowRadius: 31,
        elevation: 10,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.PRIMARY
    },
    taskFooter:{
        height:70
    },
    dropdownItemseparator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#999',
    },
});


