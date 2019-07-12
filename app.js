class Channel extends React.Component{
    onClick(){
        console.log('I was clicked', this.props.name);
    }
    render(){
        return(
            <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
        )
    }
}

class ChannelList extends React.Component{
    render(){
        return(
            <ul>
            {this.props.channels.map( channel => {
                return (
                    <Channel name={channel.name} />
                )
            }
            )}
           </ul>
        )
       
    }
}

class ChannelForm extends React.Component{
    // Initialize state object
    constructor(props){
        super(props);
        this.state = { };
    }
    //Function to access input value.
    onChange(e){
        this.setState({
            channelName: e.target.value
        })
       // console.log(e.target.value);
    }
    onSubmit(e){
        //creating variable
        let {channelName} = this.state;
        console.log(channelName);
        // clearing out input form
        this.setState({
            channelName: ' '
        });
        this.props.addChannel(channelName);
        e.preventDefault();
    }
    render(){
        return(
            //If we want to have access to react component within  an  event handler we need to  call bind and passed this.
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text'  placeholder="Add New Channel"
                  onChange={this.onChange.bind(this)} 
                  value={this.state.channelName}
                  />
           </form>
        )
    }
}
// create component section -->
class ChannelSection extends React.Component {
    // initialize state object to passed array
    constructor(props){
        super (props);
        this.state = {
            channels: [
                {name: 'Hardware Support'},
                {name: 'Software Support'}
            ]
        }
    }
    //create and addChannel() function and pass it to Channel form as a property
    addChannel(name){
        //variable to corresponding values set in state
        let {channels} = this.state;
        channels.push({name: name});
        this.setState({
            channels: channels
        });

    }
    render(){
        return(
            <div>
                <ChannelList channels={this.state.channels}/>
                <ChannelForm addChannel={this.addChannel.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection/>, document.getElementById('app'));