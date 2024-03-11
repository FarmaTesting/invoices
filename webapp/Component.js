
//@ts-nocheck
sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "farmanet/invoices/model/models",
        "sap/ui/model/resource/ResourceModel"
    ],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, models, ResourceModel) {

        return UIComponent.extend("farmanet.invoices.component", {
            
             metadata: {  
                        manifest: "json"
             },

            init: function () {
                //Call de init function on the parent
                UIComponent.prototype.init.apply(this, arguments);
                //Set data model
                this.setModel(models.createRecipient());
                //Set i18n model
                var i18nModel = new ResourceModel({ bundleName: "farmanet.invoices.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        }
        )

    })