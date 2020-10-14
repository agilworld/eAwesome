import {Dimensions, PixelRatio} from 'react-native';
import {Navigation} from 'react-native-navigation';

export const AppLaunched = () => {
  loginScreen()
}

export async function loginScreen() {
    await Navigation.setDefaultOptions({
      topBar: {
        visible: true,
        animate: true,
        elevation: 0,
        noBorder: true,
        background: {
          color: 'white',
        },
        title: {
          alignment: 'center',
          fontSize: 14
        },
      },
      statusBar: {
        style: 'dark'
      },
      layout: {
        orientation: ['portrait']
      }
    });
  
    await Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'com.Login',
                options: {
                  topBar: {
                    visible: false,
                    title: {
                      text: ''
                    },
                  },
                },
              },
            },
          ],
        },
      },
    });
}

export async function homeScreen() {
    await Navigation.setDefaultOptions({
      topBar: {
        visible: true,
        animate: true,
        elevation: 0,
        noBorder: true,
        backButton: {
          title:'Back'
        },
        background: {
          color: 'white'
        },
        title: {
          alignment: 'center',
          fontSize: 20
        },
      },
      statusBar: {
        style: 'dark'
      },
      layout: {
        orientation: ['portrait'],
      },
    });
  
    await Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'com.Home',
                options: {
                  topBar: {
                   
                    visible: true,
                    backButton: {
                      visible:true
                    },
                    title: {
                      text: 'User List'
                    }
                  },
                },
              },
            },
          ],
        },
      },
    })
}