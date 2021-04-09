function ShowStyleSection(props){
    const divStyle = {
        background: "#223344",
        height: "30px",
        border: "1px solid #333",
        textAlign: "center"
    };

    return(
    <div style = {divStyle}>
        <span style = {{fontSize : '20px', color: '#eee' }}>{props.children}</span>
    </div>);
}

export default ShowStyleSection;