terraform {
  backend "azurerm" {}
}
variable "env" {}
variable "armclientid" {}
variable "armclientsecret" {}
variable "armtenantid" {}
variable "build_id" {}

data "azurerm_app_service_plan" "asp" {
  name                = "up-france-services-${var.env}-asp-linux-01"
  resource_group_name = "up-france-services-${var.env}-rg"
}

resource "azurerm_resource_group" "rg" {
  name     = "up-public-react-controls-${var.env}-rg"
  location = "West Europe"
}

resource "azurerm_storage_account" "sa-web" {
  name                      = "reactcontrols${var.env}sa"
  location                  = "${azurerm_resource_group.rg.location}"
  resource_group_name       = "${azurerm_resource_group.rg.name}"
  account_tier             = "Standard"
  account_replication_type = "RAGRS"
  account_kind             = "StorageV2"
  access_tier= "Hot"
  depends_on = []
  tags = {
    Project          = "Up.Public"
    Environment      = "${var.env}"
    OrganizationName = "UPPUBLIC"
    SubProject       = "React-Controls"
  }
   provisioner "local-exec" {
     command = "az login  --service-principal -u \"${var.armclientid}\" -p \"${var.armclientsecret}\" --tenant \"${var.armtenantid}\" | az storage blob service-properties update --account-name ${azurerm_storage_account.sa-web.name} --static-website  --index-document index.html --404-document index.html"
  }
}

resource "azurerm_storage_container" "site" {
  name                  = "site"
  resource_group_name   = "${azurerm_resource_group.rg.name}"
  storage_account_name  = "${azurerm_storage_account.sa-web.name}"
  container_access_type = "private"
}