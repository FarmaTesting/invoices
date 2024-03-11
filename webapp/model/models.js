sap.ui.define(
    [
        "sap/ui/model/json/JSONModel"
    ],
    /**
     * 
     * @param {typeof sap.ui5.json.JSONModel} JSONModel
     */
    function (JSONModel) {
        "use strict";
        return {
            createRecipient : function() {
            var oData = {
                recipient: {
                    name: "Pepe"
                }
            };
            return new JSONModel(oData);
        }
        }
    })
