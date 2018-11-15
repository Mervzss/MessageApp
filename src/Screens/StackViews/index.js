import { createStackNavigator } from 'react-navigation'

//Stacks Screens imports
import HomeLog from './HomeLog'
import MessagesView from './MessagesView'


export default MainStack = createStackNavigator(
    {
    Home: HomeLog,
    Message: MessagesView
    },
    {
        initialRouteName:'Home',
        navigationOptions:{
            header:null
        }
    }
)