terraform {
  backend "azurerm" {}
}

variable "env" {}
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
  app_service_plan_id       = "${data.azurerm_app_service_plan.asp.id}"
  account_tier              = "Standard"
  account_replication_type  = "GRS"

  properties = {
    networkAcls = {
      bypass              = "AzureServices"
      virtualNetworkRules = []
      ipRules             = []
      defaultAction       = "Allow"
    }

    supportsHttpsTrafficOnly = true

    encryption = {
      services = {
        file = {
          enabled = true
        }

        blob = {
          enabled = true
        }
      }

      keySource = "Microsoft.Storage"
    }

    accessTier = "Hot"
  }

  dependsOn = []

  tags = {
    Project          = "ODI"
    Environment      = "${var.environment}"
    OrganizationName = "ODIFRAN"
    SubProject       = "Commerçant"
  }
}
