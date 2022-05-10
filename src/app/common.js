import NodeTitle from "./views/attack-graph/NodeTitle";
import EdgeTitle from "./views/attack-graph/EdgeTitle";
import HostTitle from "./views/network/HostTitle";
import LinkTitle from "./views/network/LinkTitle";
import ReactDOM from "react-dom"
import React from "react"

export function renameKey(obj, oldKey, newKey){
  if (oldKey !== newKey) {
    Object.defineProperty(obj, newKey,
        Object.getOwnPropertyDescriptor(obj, oldKey));
    delete obj[oldKey];
  }
}

// ! Graph and Chain

export function nodeEncoder(el, render) {
  let {x, y, color, title, ...node} = el;
  return JSON.parse(JSON.stringify(node))
}

export function generateNodeTitleHTML(node) {
  let titleElement = document.createElement("div");
  ReactDOM.render(<NodeTitle node={node}/>, titleElement);
  return titleElement;
}


export function nodeDecoder(el, render) {
  if(render){
    el.color = el.type == "ATTACK" ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 255, 0, 0.7)";
    el.title = generateNodeTitleHTML(el);
  }
  return el;
}

export function edgeEncoder(el, render) {
  let {from, to, color, title, ...edge} = el;
  return JSON.parse(JSON.stringify({...edge, from_id : from, to_id : to}));
}

export function generateEdgeTitleHTML(edge) {
  let titleElement = document.createElement("div");
  ReactDOM.render(<EdgeTitle edge={edge}/>, titleElement);
  return titleElement;
}

export function edgeDecoder(el, render) {
  let {from_id, to_id, ...edge} = el;

  if(render){
    switch(edge.gate){
      case "AND":
        // edge.color = "rgba(255, 0, 0, 1)";
        edge.dashes = false
        break;
      case "OR":
        edge.dashes = true
        // edge.color = "rgba(0, 255, 0, 1)";
        break;
      case "KN":
        edge.dashes = true
        // edge.color = "rgba(0, 255, 255, 1)";
        break; 
    }
  
    edge.title = generateEdgeTitleHTML(edge);
  }

  return {...edge, from : from_id, to : to_id};
}

export function graphEncoder(el, render){
  let {nodes, edges, ...graph} = el;

  if(nodes == undefined) nodes = [];
  if(edges == undefined) edges = [];
  
  nodes = nodes.map((el) => {return nodeEncoder(el, render)});
  edges = edges.map((el) => {return edgeEncoder(el, render)});
  el = JSON.parse(JSON.stringify({...graph, nodes : nodes, edges : edges}));
  
  return el;
}

export function graphDecoder(el, render){
  let {nodes, edges, ...graph} = el;
  nodes = nodes.map((el) => {return nodeDecoder(el, render)});
  edges = edges.map((el) => {return edgeDecoder(el, render)});
  el = {...graph, nodes : nodes, edges : edges};
  return el;
}

export function chainEncoder(el, render){
  let {nodes, edges, ...chain} = el;

  if(nodes == undefined) nodes = [];
  if(edges == undefined) edges = [];
  
  nodes = nodes.map((el) => {return nodeEncoder(el, render)});
  edges = edges.map((el) => {return edgeEncoder(el, render)});
  el = JSON.parse(JSON.stringify({...chain, nodes : nodes, edges : edges}));
  
  return el;
}

export function chainDecoder(el, render){
  let {nodes, edges, ...chain} = el;
  nodes = nodes.map((el) => {return nodeDecoder(el, render)});
  edges = edges.map((el) => {return edgeDecoder(el, render)});
  el = {...chain, nodes : nodes, edges : edges};
  return el;
}

// ! Network

export function hostEncoder(el, render) {
  let {x, y, title, ...host} = el;
  return JSON.parse(JSON.stringify(host))
}

export function generateHostTitleHTML(host) {
  let titleElement = document.createElement("div");
  ReactDOM.render(<HostTitle host={host}/>, titleElement);
  return titleElement;
}


export function hostDecoder(el, render) {
  if(render){
    // el.color = el.type == "ATTACK" ? "rgba(255, 0, 0, 0.7)" : "rgba(0, 255, 0, 0.7)";
    el.image = "/assets/images/network/" + el.type + ".png";
    el.label = el.type + "\n" + el.name;
    el.title = generateHostTitleHTML(el);
  }
  return el;
}

export function linkEncoder(el, render) {
  let {from, to, title, ...link} = el;
  return JSON.parse(JSON.stringify({...link, from_id : from, to_id : to}));
}

export function generateLinkTitleHTML(link) {
  let titleElement = document.createElement("div");
  ReactDOM.render(<LinkTitle link={link}/>, titleElement);
  return titleElement;
}

export function linkDecoder(el, render) {
  let {from_id, to_id, ...link} = el;

  if(render){
    link.title = generateLinkTitleHTML(link);
  }

  return {...link, from : from_id, to : to_id};
}

export function networkEncoder(el, render){
  let {hosts, links, ...network} = el;

  if(hosts == undefined) hosts = [];
  if(links == undefined) links = [];
  
  hosts = hosts.map((el) => {return hostEncoder(el, render)});
  links = links.map((el) => {return linkEncoder(el, render)});
  el = JSON.parse(JSON.stringify({...network, hosts : hosts, links : links}));
  
  return el;
}

export function networkDecoder(el, render){
  let {hosts, links, ...network} = el;
  hosts = hosts.map((el) => {return hostDecoder(el, render)});
  links = links.map((el) => {return linkDecoder(el, render)});
  el = {...network, hosts : hosts, links : links};
  return el;
}