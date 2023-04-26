import { useOnDraw} from './Hooks'


const Canvas = ({
    width,
    height
}) => {

    const setCanvasRef = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint, cursorColor) {
        drawLine(prevPoint, point, ctx, cursorColor, 3);
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
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    function selectMenu() {
        const colours = ['blue', 'red', 'green', 'yellow'];
        let optionElements = []
        for (let i=0; i < colours.length; i++){    
            optionElements.push(
            <option value = {colours[i]}>
                {colours[i]}
                {console.log(colours.length, i, colours[i])}
            </option>
            )      
        }  
        return(
            <select id = 'colourPicker'>
                {optionElements}
            </select>
        )
    }

    return(
        <div> 
            {selectMenu()} 
            <canvas 
                width = {width} 
                height = {height}
                style = {canvasStyle}
                ref = {setCanvasRef}
            />
        </div>
       
    );
}

export default Canvas;

const canvasStyle = {
    border: '1px solid black'
}