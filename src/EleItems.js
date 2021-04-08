export const buttons = (qantity) => {
    let output = [];
    for (let i = 0; i < qantity; i++) {
        output.push(<button key={i} value onClick={(i)=>{btnFunc(i);}}>我是第{i}個按鍵</button>);
    }
    console.log(output);
    return output;
}

export const btnFunc = (event,idx) => {
    alert(`click btn ${idx} !`);
    console.log(event.target);
    alert(event.target.value);
}