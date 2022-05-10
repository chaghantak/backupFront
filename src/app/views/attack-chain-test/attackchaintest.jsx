import React from 'react';
import { createTheme } from '@material-ui/core/styles'

import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

import './style.css';  // contains .diagram-component CSS
import { Directions } from '@material-ui/icons';

import AttackChainData from './AttackChainData';

// https://gojs.net/latest/intro/highlighting.html  참조페이지

// npm install gojs gojs-react 설치해야함

/**
 * Diagram initialization method, which is passed to the ReactDiagram component.
 * This method is responsible for making the diagram and initializing the model and any templates.
 * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
 */
function initDiagram() {
  const $ = go.GraphObject.make;
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram =
    $(go.Diagram,
      {
        'allowZoom': true,
        'undoManager.isEnabled': true,  // must be set to allow for model change listening
        // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },

        layout: $(go.TreeLayout, {  //그래프 방향
          angle: 0,
        }),

        // layout: $(go.SwimLaneLayout, {
        //   Directions: 0,
        //   layer: 20,
        //   column: 5,
        // }),

        model: $(go.GraphLinksModel,
          {
            linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
          })
      });

  // define a simple Node template
  diagram.nodeTemplate =
    $(go.Node, 'Auto',  // the Shape will go around the TextBlock
      { // when the user clicks on a Node, highlight all Links coming out of the node
        // and all of the Nodes at the other ends of those Links.
        // 클릭이벤트
        click: function (e, node) {
          console.log("클릭먹는가?")
          // highlight all Links and Nodes coming out of a given Node
          var diagram = node.diagram;
          diagram.startTransaction("highlight");
          // remove any previous highlighting
          diagram.clearHighlighteds();
          // for each Link coming out of the Node, set Link.isHighlighted
          node.findLinksOutOf().each(function (l) { l.isHighlighted = true; });
          // for each Node destination for the Node, set Node.isHighlighted
          node.findNodesOutOf().each(function (n) { n.isHighlighted = true; });
          diagram.commitTransaction("highlight");
        }
      },
      new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
      $(go.Shape, 'Circle',
        { name: 'SHAPE', fill: 'white', strokeWidth: 1 },
        // Shape.fill is bound to Node.data.color
        new go.Binding('fill', 'color'),
        // the Shape.stroke color depends on whether Node.isHighlighted is true
        new go.Binding("stroke", "isHighlighted", function (h) { return h ? "red" : "black"; })
          .ofObject()),
      $(go.TextBlock,
        { margin: 3, editable: true },  // some room around the text
        new go.Binding('text', 'name').makeTwoWay()
      )
    );

  diagram.linkTemplate =
    $(go.Link,
      $(go.Shape,
        new go.Binding("stroke", "color"),  // shape.stroke = data.color
        new go.Binding("strokeWidth", "thick"),
        // the Shape.stroke color depends on whether Link.isHighlighted is true
        new go.Binding("stroke", "isHighlighted", function (h) { return h ? "red" : "black"; })
          .ofObject(),
        // the Shape.strokeWidth depends on whether Link.isHighlighted is true
        new go.Binding("strokeWidth", "isHighlighted", function (h) { return h ? 3 : 1; })
          .ofObject()),  // shape.strokeWidth = data.thick
      $(go.Shape,
        { toArrow: "Standard", fill: null },
        new go.Binding("stroke", "color"),  // shape.stroke = data.color
        new go.Binding("strokeWidth", "thick"),
        // the Shape.fill color depends on whether Link.isHighlighted is true
        new go.Binding("fill", "isHighlighted", function (h) { return h ? "red" : "black"; })
          .ofObject())  // shape.strokeWidth = data.thick
    );

  diagram.linkTemplateMap.add("Motion",
    $(go.Link, go.Link.Bezier,
      { isLayoutPositioned: false, isTreeLink: false, curviness: -150 },
      { relinkableFrom: true, relinkableTo: true },
      $(go.Shape,
        // the Shape.stroke color depends on whether Link.isHighlighted is true
        new go.Binding("stroke", "isHighlighted", function(h) { return h ? "red" : null; }).ofObject(),
        // the Shape.strokeWidth depends on whether Link.isHighlighted is true
        new go.Binding("strokeWidth", "isHighlighted", function (h) { return h ? 3 : 1; })
          .ofObject()),
      $(go.Shape,
        { toArrow: "Standard", strokeWidth: 0 },
        // the Shape.fill color depends on whether Link.isHighlighted is true
        new go.Binding("stroke", "isHighlighted", function(h) { return h ? "red" : null; }).ofObject()),
      $(go.TextBlock,
        new go.Binding("text", "text"),
        {
          stroke: "red", background: "rgba(255,255,255,0.5)",
          maxSize: new go.Size(80, NaN)
        })));

  // when the user clicks on the background of the Diagram, remove all highlighting
  diagram.click = function (e) {
    diagram.startTransaction("no highlighteds");
    diagram.clearHighlighteds();
    diagram.commitTransaction("no highlighteds");
  };

  return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
function handleModelChange(changes) {
  alert('GoJS model changed!');
}

// render function...
function attackchaintestRoutes() {
  return (
    <div>
      {/* Attack-Scenario [######]
      <AttackChainData>
        <ReactDiagram
          initDiagram={initDiagram}
          divClassName='diagram-component'
          nodeDataArray={
            AttackChainData.props.nodeDataArray
          }
          linkDataArray={
            AttackChainData.props.linkDataArray
          }
        // onModelChange={handleModelChange}
        />
      </AttackChainData> */}

    </div>
  );
}

export default attackchaintestRoutes;