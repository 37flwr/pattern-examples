// https://github.com/postmanlabs/openapi-to-postman/blob/develop/lib/schemapack.js#L285

const { convertToOAS30IfSwagger } = require('./swaggerUtils/swaggerToOpenapi.js'),

export class SchemaPack {
    convert (callback) {
        // ...
    
        if (!this.validated) {
            return callback(new OpenApiErr('The schema must be validated before attempting conversion'));
        }
        
        // We only convert if swagger is found otherwise this.openapi remains the same
        convertToOAS30IfSwagger(concreteUtils, this.openapi, (error, newOpenapi) => {
            //...
        })
    };
}

/*
    ____________________________DESCRIPTION_______________________________
    SchemaPack server as a proxy for convertToOAS30IfSwagger function,
    it checks for the validation and if the validation 
    is successful - it fires convertToOAS30IfSwagger
*/