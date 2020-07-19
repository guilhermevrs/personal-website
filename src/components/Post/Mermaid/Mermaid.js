import React, { useEffect, useRef, useState } from 'react';

import styles from './Mermaid.module.scss';

import mermaid from "mermaid";

/* const DEFAULT_CONFIG = {
  startOnLoad: true,
  theme: "forest",
  logLevel: "fatal",
  securityLevel: "strict",
  arrowMarkerAbsolute: false,
  flowchart: {
    htmlLabels: true,
    curve: "linear",
  },
  sequence: {
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
  },
  gantt: {
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    fontFamily: '"Open-Sans", "sans-serif"',
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
  },
} */

const Mermaid = ({ chart }) => {
  const [html, setHtml] = useState();
  
  useEffect(() => {
    mermaid.mermaidAPI.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        curve: 'linear',
        useMaxWidth: true
      }
    });
    mermaid.mermaidAPI.render('myId', chart, (html) => { setHtml(html); });
  }, []);

  return (
    <div className={styles['mermaid__container']} dangerouslySetInnerHTML={ {__html: html } }></div>
  );
};

export default Mermaid;
