export const buttons = (qantity) => {
    let output = [];
    for (let i = 0; i < qantity; i++) {
        output.push(<button key={i} onClick={(i)=>{btnFunc(i);}}>我是第{i}個按鍵</button>);
    }
    console.log(output);
    return output;
}

export const btnFunc = (idx) => {
    alert(`click btn ${idx} !`);
}