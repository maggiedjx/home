
window.onload = init;

function init() {
    // picking a paint color
    var paint = 'gold';
    $('.color').on('click', function() {
        paint = $(this).css('background-color');
    });
    
    $("#canvas").click(function(e){
        getPosition(e); 
    });

        
    // start size    
    var pointSize = 20;
    
    var elements = []; // list of already pushed elements
    var elementMap = []; // map of x-y to circle object
        
    function getPosition(event){
         var rect = canvas.getBoundingClientRect();
         var x = event.clientX - rect.left;
         var y = event.clientY - rect.top;

        
         var hasCircle = false;
         elements.forEach(function(element){
             if(Math.pow(x-element.x, 2) + Math.pow(y-element.y, 2) < Math.pow(element.circleSize, 2)) {
                 console.log();
                 hasCircle = true;
                 var length = elementMap[element.x + '-'+element.y].length;
                 var obj = elementMap[element.x + '-'+element.y][length - 1];
                 console.log(obj);
                 drawCoordinates(obj.x, obj.y, obj.circleSize + 10, false);
            }
         });
        
         if (!hasCircle)
            drawCoordinates(x, y, 20, true);
    }
    
    function draw(ctx, x, y, color, size) {
        ctx.fillStyle = color; 
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }

    function drawCoordinates(x, y, ptSize, push){	
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        
        draw(ctx, x, y, paint, ptSize);
        
        var existList = elementMap[x+'-'+y];
        if (existList) {
            console.log('exist ' + existList.length);
            for (var i = existList.length - 1; i >= 0; i--) {
                var circle = existList[i];
                draw(ctx, circle.x, circle.y, circle.color, circle.circleSize);                
            }
        }
        
        if (push) {
            elementMap[x+'-'+y] = [];
            elements.push({
                x: x,
                y: y,
                circleSize: ptSize
            });   
        }
        elementMap[x+'-'+y].push({
            color: paint,
            circleSize: ptSize,
            x: x,
            y: y
        });
    }
    
    // Get mouse position
    function getMousePos(c, evt) {
        var rect = c.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };
}

function clearCanvas() {
    var ctx = document.getElementById("canvas");
    ctx.height = 500;
    ctx.width = 1000;
}   

