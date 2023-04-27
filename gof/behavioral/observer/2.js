// https://github.com/modal-labs/quillman/blob/main/src/frontend/recorder-node.js

class RecorderNode extends AudioWorkletNode {
  constructor(context, onSegmentRecv, onSilence, onTalking) {
    // ...
    this.port.onmessage = (event) => {
      if (event.data.type === "segment") {
        onSegmentRecv(event.data.buffer);
      } else if (event.data.type === "silence") {
        onSilence();
      } else if (event.data.type === "talking") {
        onTalking();
      }
    };
  }
}

/*
  ____________________________DESCRIPTION_______________________________
  RecorderNode introduces obervers for AudioWorkletNode and if any of the conditions
  are met it calls respective functions
*/
