sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, models, ResourceModel) {
        "use strict";
        return Controller.extend("farmanet.invoices.controller.App", {
            onInit: function () {


            },
            onShowHello: function () {
                var srecipient=this.getView().getModel().getProperty("/recipient/name");
                var obundle=this.getView().getModel("i18n").getResourceBundle();
                var msg=obundle.getText("showMsg",srecipient);
                MessageToast.show(msg);
            }
        })
    }
)