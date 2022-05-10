import React, { Component } from "react";

function AttackModelDetail() {
  return (
    <div className="" style={{ height: 295 }}>
      <div className="">
        <iframe
          src="https://js.tensorflow.org/api_tasks/0.0.1-alpha.8/"
          width="1200"
          height="490"
        ></iframe>
      </div>
      <hr />
      <div>
        The number of threads to be used for TFLite ops that support
        multi-threading when running inference with CPU. num_threads should be
        greater than 0 or equal to -1. Setting num_threads to -1 has the effect
        to let TFLite runtime set the value. Default to number of physical CPU
        cores, or -1 if WASM multi-threading is not supported by user's browser.
      </div>
    </div>
  );
}

export default AttackModelDetail;
