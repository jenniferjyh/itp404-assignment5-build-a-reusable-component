import React from 'react';
import Emoji from 'react-emoji-render';
import PropTypes from 'prop-types';

export default class HeartCount extends React.Component {
    render() {
      return (
      <div>
      <p className = "instructions"> Press the heart reaction as many times as you can. </p>
      <div className = "reaction"><button onClick={this.props.reacted}> <Emoji text=" <3" className = "heart"/></button></div>
      <div className = "counter"> 
      {this.props.value}
      </div>
      <div className = "reset"><button onClick={this.props.clear}>Reset</button></div>
      <p className = "writing">
          <br/>
        Developers would the component in social media apps, such as facebook, instagram, slack. 
        Right now in Slack you can add your custom emoji and everytime you click it the number goes up. 
        Although you won't be able to click "Like" multiple times and have the number increase, the model applies to making it reusable for all users on their own ends.
        It would also be used in web games where you press a button as many times as you can to receive a score or pass a challenge. The button would have counters in them that is keeping track of users' number of click times and assign corresponding actions to that.
        <br/><br/>
        My personal motivation is that I am interested in social apps in general and how emojis are used in a creative way as a reaction.
        This is why I named my components "reaction" and "reacted" because the heart can be replaced by anything else, such as emojis or pictures. 
        This can be used in any settings where emojis are more appropriate as reactions. Messenger lets you react to individual messages, comments, post, almost anything.
      </p>
      </div>
   
      

      )
    }
}    
    

HeartCount.propTypes = {
    value: PropTypes.number.isRequired,
    heartClicked: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired

}