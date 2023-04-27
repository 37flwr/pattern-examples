// https://github.com/lutzroeder/netron/blob/main/source/armnn.js#L5

armnn.ModelFactory = class {
  open(context, match) {
    return context.require("./armnn-schema").then((/* schema */) => {
      let model = null;
      switch (match) {
        case "armnn.flatbuffers": {
          try {
            // ...
            model = armnn.schema.SerializedGraph.create(reader);
          } catch (error) {
            // ...
          }
          break;
        }
        case "armnn.flatbuffers.json": {
          try {
            // ...
            model = armnn.schema.SerializedGraph.createText(reader);
          } catch (error) {
            // ...
          }
          break;
        }
        default: {
          throw new armnn.Error("Unsupported Arm NN '" + match + "'.");
        }
      }
      // The actual creation of a Model
      return context.metadata("armnn-metadata.json").then((metadata) => {
        return new armnn.Model(metadata, model);
      });
    });
  }
};

armnn.Model = class {
  constructor(metadata, model) {
    this._graphs = [];
    this._graphs.push(new armnn.Graph(metadata, model));
  }
};

/*
  ____________________________DESCRIPTION_______________________________
  ModelFactory is being provided with a match string. Class processes
  this string, based on it's value creates a Model and returns it
*/
