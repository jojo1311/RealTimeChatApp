class Channel extends RTCIceCandidate.Component{
    render(){
        return(
            <li>Channel Nname</li>
        )
    }
}

ReactDom.render(<Channel />, document.getElementById('app'));