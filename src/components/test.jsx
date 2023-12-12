import * as React from "react";
import * as ReactDOM from "react-dom";
import { Diagram, DiagramComponent, SnapConstraints, Snapping } from "@syncfusion/ej2-react-diagrams";
Diagram.Inject(Snapping);
let gridlines = {
    lineColor: "blue",
    lineDashArray: '2 2'
};
let snapSettings = {
    constraints: SnapConstraints.ShowLines,
    horizontalGridlines: gridlines,
    verticalGridlines: gridlines
};
// A node is created and stored in nodes array.
let node = [{
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        // Text(label) added to the node
    }];
// initialize Diagram component
let annotation = [{
    id: 'text',
    content: '<div><h1>hgg</h1></div>',
    offsetX: 100,
    offsetY: 100,
    horizontalAlignment: 'Left',
    verticalAlignment: 'Top',
    style: { color: 'black' }
  }];
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={'600px'} 
    // Add node
    annotations={annotation}
    nodes={node} snapSettings={snapSettings}/>);
}
export default App;