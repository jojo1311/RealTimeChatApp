let channels = [
        {name: 'Hardware Support'},
        {name: 'Software Support'}
];

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
    //Function to access input value.
    onChange(e){
        this.setState({
            channelName: e.target.value
        })
       // console.log(e.target.value);
    }
    onSubmit(e){
        let {channelName} = this.state;
        console.log(channelName);
        e.preventDefault();
    }
    render(){
        return(
            //If we want to have access to react component within  an  event handler we need to  call bind and passed this.
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text'  placeholder="Add New Channel"  onChange={this.onChange.bind(this)} />
           </form>
        )
    }
}
// create component section -->
class ChannelSection extends React.Component {
    render(){
        return(
            <div>
                <ChannelList channels={channels}/>
                <ChannelForm/>
            </div>
        )
    }
}

ReactDOM.render(<ChannelSection/>, document.getElementById('app'));