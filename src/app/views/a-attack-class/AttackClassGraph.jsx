import { Directions } from '@material-ui/icons';
import React, { Component } from 'react';
import * as d3 from "d3";
import "react-tree-graph/dist/style.css";
import './style.css';

import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

function initializeDiagram() {
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
          angle: 90,
        }),


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
        new go.Binding("stroke", "isHighlighted", function (h) { return h ? "red" : "black"; })
          .ofObject(),
        // the Shape.strokeWidth depends on whether Link.isHighlighted is true
        new go.Binding("strokeWidth", "isHighlighted", function (h) { return h ? 3 : 1; })
          .ofObject()),
      $(go.Shape,
        { toArrow: "Standard", strokeWidth: 0 },
        // the Shape.fill color depends on whether Link.isHighlighted is true
        new go.Binding("fill", "isHighlighted", function (h) { return h ? "red" : "black"; })
          .ofObject()),
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
class attackChainDataRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: [],
        }
    }

    // componentDidMount() {
    //     fetch("https://192.168.2.57:8001/api/attack-chains/")
    //         .then((res) => {
    //             return res.json(); //Promise 반환
    //         })
    //         .then(chain => this.setState({
    //             table: chain
    //         }))
    // }

    

    render() {
        const { table } = this.state;

        var i,
            root,
            node,
            nodeKey,
            nodeByKey = new Map;

        if (table[0] === undefined) {
            return null
        }

        var nodes = table[0].subitems
        var n = nodes.length

        var nodeByKey = new Map
        for (i = 0; i < n; ++i) {
            var node = nodes[i]
            var nodeKey = node.id
            nodeByKey.set(nodeKey, node);
        }

        var links = []
        for (i = 0; i < n; ++i) {
            node = nodes[i]
            var process = node.prev.process

            var parent = null
            {

                var process = node.prev.process
                if (process.same != null && process.same != "") {
                    parent = process.same
                } else if (process.parent_child != null && process.parent_child != "") {
                    parent = process.parent_child
                }
            }
            if (parent === null) {
                continue;
            }

            var link = [node, parent, "process"]
            links.push(link)
        }

        for (i = 0; i < n; ++i) {
            node = nodes[i]
            var file = node.prev.file

            var parent = null
            {
                var file = node.prev.file
                if (file.used != null && file.used != "") {
                    parent = file.used
                } else if (file.loaded != null && file.loaded != "") {
                    parent = file.loaded
                } else if (file.executed != null && file.executed != "") {
                    parent = file.executed
                } else if (file.transferred != null && file.transferred != "") {
                    parent = file.transferred
                }
            }
            if (parent === null) {
                continue;
            }

            var link = [node, parent, "file"]
            links.push(link)
        }

        for (i = 0; i < n; ++i) {
            node = nodes[i]
            var network = node.prev.network

            var parent = null
            {
                var network = node.prev.network
                if (network.same != null && network.same != "") {
                    parent = network.same
                } else if (network.reverse != null && network.reverse != "") {
                    parent = network.reverse
                }
            }
            if (parent === null) {
                continue;
            }

            var link = [node, parent, "network"]
            links.push(link)
        }

        for (i = 0; i < n; ++i) {
            node = nodes[i]
            var persistence = node.prev.persistence

            var parent = null
            {
                var persistence = node.prev.persistence
                if (persistence.srv_install != null && persistence.srv_install != "") {
                    parent = persistence.srv_install
                } else if (persistence.srv_exec != null && persistence.srv_exec != "") {
                    parent = persistence.srv_exec
                }
            }
            if (parent === null) {
                continue;
            }

            var link = [node, parent, "persistence"]
            links.push(link)
        }

        for (i = 0; i < n; ++i) {
            node = nodes[i]
            var lm = node.prev.lm

            var parent = null
            {
                var lm = node.prev.lm
                if (lm.diff_host != null && lm.diff_host != "") {
                    parent = lm
                } else if (lm.remote_logon != null && lm.remote_logon != "") {
                    parent = lm
                } else if (lm.remote_service != null && lm.remote_service != "") {
                    parent = lm
                }
            }
            if (parent === null) {
                continue;
            }

            var link = [node, parent, "lm"]
            links.push(link)
        }

        var nodeDataArray = [];
        for (i = 0; i < n; ++i) {
            var node = nodes[i]
            var nodeData = {
                "key": node.filepath,
                "name": node.filepath,
            }
            nodeDataArray.push(nodeData);
        }

        var linkDataArray = [];
        for (i = 0; i < links.length; ++i) {
            var link = links[i]
            var category = link[2];
            if (category === "process") {
                var linkData = {
                    "to": link[0].filepath,
                    "from": link[1]
                }
                linkDataArray.push(linkData);
            }
        }

        for (i = 0; i < links.length; ++i) {
            var link = links[i]
            var category = link[2];
            if (category === "file") {
                var linkData = {
                    "to": link[0].filepath,
                    "from": link[1],
                    "category": "Motion",
                    "text": ""
                }
                linkDataArray.push(linkData);
            }
        }

        for (i = 0; i < links.length; ++i) {
            var link = links[i]
            var category = link[2];
            if (category === "network") {
                var linkData = {
                    "to": link[0].filepath,
                    "from": link[1],
                    "category": "Motion",
                    "text": ""
                }
                linkDataArray.push(linkData);
            }
        }

        for (i = 0; i < links.length; ++i) {
            var link = links[i]
            var category = link[2];
            if (category === "persistence") {
                var linkData = {
                    "to": link[0].filepath,
                    "from": link[1],
                    "category": "Motion",
                    "text": ""
                }
                linkDataArray.push(linkData);
            }
        }

        for (i = 0; i < links.length; ++i) {
            var link = links[i]
            var category = link[2];
            if (category === "lm") {
                var linkData = {
                    "to": link[0].filepath,
                    "from": link[1],
                    "category": "Motion",
                    "text": ""
                }
                linkDataArray.push(linkData);
            }
        }


        return (
            <>
                {/* Attack-Scenario [###123###] */}
                <ReactDiagram
                    initDiagram={initializeDiagram}
                    divClassName='diagram-component'
                    nodeDataArray={
                        nodeDataArray
                    }
                    linkDataArray={
                        linkDataArray
                    }
                // onModelChange={handleModelChange}
                />
            </>
        );
    }

}
export default attackChainDataRoutes;