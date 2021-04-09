function TextSection(props){
    return(
        <div>
            <textarea id="tarea" defaultValue={props.msg + props.today}>
            </textarea>
            <p id="msgline"></p>
            <button onClick={props.btnClick}>顯示訊息</button>
        </div>
    );
}

export default TextSection;