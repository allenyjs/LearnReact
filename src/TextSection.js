function TextSection(props){
    return(
        <div>
            <textarea defaultValue={props.msg + props.today}>
            </textarea>
        </div>
    );
}

export default TextSection;