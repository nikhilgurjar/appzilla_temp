import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { COLORS, FONTS } from '../../constants/theme';

const MsgComponent = ({item,sender}) => {

    const {colors} = useTheme();

    return (
        <>
            <View style={[
                {
                    alignItems:'flex-start',
                    marginRight:'25%',
                    marginBottom:15,
                },
                sender && {
                    alignItems:'flex-end',
                    marginLeft:'25%',
                    marginRight:0,
                }
            ]}>
                <View
                    style={[
                        {
                            backgroundColor : colors.cardBg,
                            borderRadius:6,
                            paddingHorizontal:18,
                            paddingVertical:10,
                        },
                        sender && {
                            backgroundColor:COLORS.primary6,
                        }
                    ]}
                >
                    <Text style={[{
                        ...FONTS.font,
                        //...FONTS.fontBold,
                        color:colors.title,
                    }, sender && {
                        color: COLORS.white,
                    }]}>{item.msg}</Text>
                </View>
                <Text style={{...FONTS.font,color:colors.textLight,marginTop:4}}>{item.time}</Text>
            </View>
        </>
    );
};

export default MsgComponent;