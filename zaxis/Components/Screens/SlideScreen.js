
import React from 'react';
import { 
  StyleSheet, 
  Text, View 
} from 'react-native';



export default class SlideScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {


    return (
      <View>
        
        <View>
          <Text>
            Picture Container
          </Text>
        </View>
        <View>
          <Text>
            Middle Line Container
          </Text>
        </View>
        <View>
          <Text>
            Context/Content/Text Container
          </Text>
          <Text>
            Additional Buttons/Interactions
          </Text>
        </View>
      </View>
    )
  }
}


