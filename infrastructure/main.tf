terraform {
  backend "azurerm" {}
}

variable "env" {}
variable "build_id" {}

data "azurerm_app_service_plan" "asp" {
  name                = "up-france-services-${var.env}-asp-linux-01"
  resource_group_name = "up-france-services-${var.env}-rg"
}

data "azurerm_container_registry" "cr" {
  name                = "upgroup"
  resource_group_name = "fd-devops"
}

resource "azurerm_resource_group" "rg" {
  name     = "up-public-react-controls-${var.env}-rg"
  location = "West Europe"
}

resource "azurerm_app_service" "app" {
  name                = "up-public-react-controls-${var.env}-app"
  location            = "${azurerm_resource_group.rg.location}"
  resource_group_name = "${azurerm_resource_group.rg.name}"
  app_service_plan_id = "${data.azurerm_app_service_plan.asp.id}"

  app_settings {
    DOCKER_REGISTRY_SERVER_URL      = "https://${data.azurerm_container_registry.cr.login_server}"
    DOCKER_REGISTRY_SERVER_USERNAME = "${data.azurerm_container_registry.cr.admin_username}"
    DOCKER_REGISTRY_SERVER_PASSWORD = "${data.azurerm_container_registry.cr.admin_password}"
  }

  site_config {
    linux_fx_version = "DOCKER|${data.azurerm_container_registry.cr.login_server}/public/react-controls:${var.build_id}"
    always_on        = "true"
  }
}
