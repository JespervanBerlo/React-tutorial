import { useOnDraw} from './Hooks'


const Canvas = ({
    width,
    height
}) => {

    let clear = false;
    const setCanvasRef = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint, cursorColor, cursorWidth) {
        drawLine(prevPoint, point, ctx, cursorColor, cursorWidth);
    }
    
    function drawLine(
        start,
        end,
        ctx,
        color,
        width
    ) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke()

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, width/2, 0, 2 * Math.PI);
        ctx.fill();
    }

    function selectMenu() {
        const colours = ['Blue', 'Red', 'Green', 'Yellow'];
        let optionElements = []

        for (let i = 0; i < colours.length; i++){    
            optionElements.push(
            <option value = {colours[i]} className={colours[i]}>
                {colours[i]}
                {/* {console.log(colours.length, i, colours[i])} */}
            </option>
            )      
        }  
        return(
            <select id = 'colourPicker' className = 'colourpicker'>
                {optionElements}
                <option value = 'white'>
                    Eraser
                </option>
            </select>
        )
    }
    function selectWidth(){ 
        const width = [];
        let optionElements = []
        let standardValue = 5;
        let maxWidth = 15;

        for (let i = 0; i < 100; i++) {
            width.push(i);  
        }

        for (let i = 1; i <= maxWidth; i++){
                optionElements.push(
                    <option value = {width[i]}>
                        {width[i]}
                    </option>
                )
        }
            
        return(
            <select defaultValue = {standardValue} id = 'widthPicker' className='widthpicker'>
                {optionElements}
            </select>
        );
    }
    // function clearCanvass(){
    //     console.log('asdf')
    //     return(
    //         <button onClick={clearCanvasRef()}>Clear Canvas</button>
    //     )
    // }
    function clearCanvas(){
        const selectCanvas = document.getElementsByClassName('canvas');
        const selectCanvasContext = selectCanvas[0].getContext('2d')
        selectCanvasContext.fillStyle = 'white'
        selectCanvasContext.fillRect(0,0,width,height)
    }

    return(
        <div className='content'>     
            <canvas className='canvas'
                width = {width} 
                height = {height}
                style = {canvasStyle}
                ref = {setCanvasRef}
            />
            <br></br>
            {selectMenu()} 
            {selectWidth()}
            <button onClick={clearCanvas}>Clear Canvas</button>
        </div>
       
    );
    }

export default Canvas;

const canvasStyle = {
    border: '1px solid black'
}