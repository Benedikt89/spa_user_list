import * as React from 'react';
import {useEffect} from "react";
import {useRef} from "react";

const getStarSteps = (cx, cy, spikes, outerRadius, innerRadius) => {
  let steps = [];
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  steps.push({x: cx, y: cy - outerRadius});
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    steps.push({x, y});
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    steps.push({x, y});
    rot += step
  }
  steps.push({x: cx, y: cy - outerRadius});
  return steps;
};

const StarsPage = () => {
  const canvas = React.createRef();
  const canvasColored = React.createRef();
  const context = useRef(null);
  const contextColored = useRef(null);
  const buttons = useRef(null);
  let colors = ['red', 'blue', 'green', 'yellow', 'black'],
    positions = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0.5, y: 0.5}, {x: 0, y: 1}, {x: 1, y: 1}],
    startSize = 50,
    largeSize = 600,
    smallSize = 50;

  useEffect(() => {
    const calcOffset = (u) => {
      const offs = u > 0 ? startSize + (startSize * 0.2) : startSize * 1.2;
      return (u * largeSize) +(u === 0.5 ? -(startSize / 2) : u > 0 ? -offs : +offs)
    };
    let newButtons = colors.map((color, i) => {
      const {x,y} = positions[i];
      return getStarSteps(calcOffset(x), calcOffset(y), 5, startSize, 30);
    });
    buttons.current = newButtons;
  }, []);

  useEffect(() => {
    if (canvas && canvas.current) {
      context.current = canvas.current.getContext("2d");
      contextColored.current = canvasColored.current.getContext("2d");
      let ctx = context.current;
      ctx.canvas.width = largeSize;
      ctx.canvas.height = largeSize;
      contextColored.current.canvas.width = largeSize;
      contextColored.current.canvas.height = smallSize;
      colors.forEach(function(color, i){
        drawStar(buttons.current[i], colors[i])
      });
      fillReactAngle('white');
    }
  }, []);

  const fillReactAngle = (color) => {
    let ctx = contextColored.current;
    if (ctx) {
      ctx.rect(0, 0, largeSize, smallSize);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'grey';
      ctx.stroke();
    }
  };

  const createButton = (steps) => {
    let path = new Path2D();
    steps.forEach(({x, y}, i) => {
      if (i === 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    });
    path.closePath();
    return path;
  };

  const drawStar = (steps, color) => {
    let ctx = context.current;
    const path = createButton(steps);
    ctx.lineWidth = 5;
    ctx.strokeStyle = color;
    ctx.stroke(path);
    ctx.fillStyle = color;
    ctx.fill(path);
  };

  const onMouseClick = (e) => {
    if (buttons && canvas.current) {
      let mouse = {x:e.pageX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop};
      let ctx = context.current;
      let newColor = 'white';
      buttons.current.forEach((arr, i) => {
        let path = createButton(arr);
        if (ctx.isPointInPath(path, mouse.x, mouse.y)) {
          newColor = colors[i];
        }
      });
      fillReactAngle(newColor);
    }
  };

  return (
    <div className="col">
      <canvas ref={canvas} onClick={onMouseClick} />
      <canvas ref={canvasColored} />
    </div>
  )
};

export default StarsPage;