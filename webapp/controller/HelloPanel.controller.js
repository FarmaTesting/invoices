sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
    ],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("farmanet.invoices.controller.HelloPanel", {
            onInit: function () {


            },
            onShowHello: function () {
                var srecipient = this.getView().getModel().getProperty("/recipient/name");
                var obundle = this.getView().getModel("i18n").getResourceBundle();
                var msg = obundle.getText("showMsg", srecipient);
                MessageToast.show(msg);
            },
            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        })
    }
)