import {StyleSheet} from 'react-native'
import constants from  'expo-constants'


export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:constants.statusBarHeight + 20
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    image:{
        width:'100%',
        height:130
    },
    actions:{
        flex:1,        
        alignItems:'center',
        marginBottom:250
    },
    input:{
        backgroundColor:'#e02041',
        borderRadius:8,
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    inputText:{
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        
    }

})