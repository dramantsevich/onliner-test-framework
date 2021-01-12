$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/onliner.feature");
formatter.feature({
  "line": 2,
  "name": "Onliner feature",
  "description": "",
  "id": "onliner-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OnlinerFunctionality"
    }
  ]
});
formatter.before({
  "duration": 2953800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user views the news and puts a reaction",
  "description": "",
  "id": "onliner-feature;user-views-the-news-and-puts-a-reaction",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user navigates to \"https://www.onliner.by/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on \"Sign_In\" button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter email on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter password on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user click on \"1\" News on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user see Heading on \"News\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user see same Category on News page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on \"2\" Reaction on News page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user see selected Reaction on News page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user click on \"3\" Popular News on News page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user see Heading on \"Popular News\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user logout the application",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.onliner.by/",
      "offset": 19
    }
  ],
  "location": "OnlinerStepDefinition.userIsOnHomePage(String)"
});
formatter.result({
  "duration": 2884372800,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 161284000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign_In",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 322281900,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userEnterEmailOnLoginPage()"
});
formatter.result({
  "duration": 444056700,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userEnterPasswordOnLoginPage()"
});
formatter.result({
  "duration": 230873300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 188825200,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 2225171500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnNewsOnHomePage(String)"
});
formatter.result({
  "duration": 1348277400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 862455400,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userSeeSameCategoryOnNewsPage()"
});
formatter.result({
  "duration": 266049300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnReactionOnNewsPage(String)"
});
formatter.result({
  "duration": 853491500,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userSeeSelectedReactionOnNewsPage()"
});
formatter.result({
  "duration": 272158800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnPopularNewsOnNewsPage(String)"
});
formatter.result({
  "duration": 1562798800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Popular News",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 677386500,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userLoguoutTheApplication()"
});
formatter.result({
  "duration": 1894851700,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 1291953100,
  "status": "passed"
});
formatter.after({
  "duration": 627400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "user login into onliner and get to cart item",
  "description": "",
  "id": "onliner-feature;user-login-into-onliner-and-get-to-cart-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user navigates to \"https://www.onliner.by/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user click on \"Sign_In\" button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter email on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter password on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user click on \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click on \"Каталог\" Navigation Menu",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user see Heading on \"Catalog\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on \"1\" Catalog Navigation Classifier on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user mouseover on \"Мобильные телефоны и аксессуары\" Catalog Navigation List Item on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user see Catalog Navigation active List Item",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user click on \"Мобильные телефоны\" Dropdown Navigation List Item on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user see Heading on \"Mobile Phones Catalog\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user click on \"\u003cproduct1\u003e\" Mobile Phone on Mobile Phones Catalog",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user see Heading on \"Product\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user click on \"Предложений\" button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user click on \"1\" Offers list item on Product page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user see Buy Button is green on Product Page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user enter \"\u003cproduct2\u003e\" on Search Input",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user see \"\u003cproduct2\u003e\" on Search Window Input",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user click on \"\u003cproduct2\u003e\" Item on Search window",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user see Heading on \"Product\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "user click on \"Предложений\" button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user click on \"1\" Offers list item on Product page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user see Buy Button is green on Product Page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user click on \"В корзине\" button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user see Heading on \"Cart\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user see \"\u003cproduct1\u003e\" product contains in Cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user see \"\u003cproduct2\u003e\" product contains in Cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user remove all Items on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user see confirm Remove message on Cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user click on Logo on Cart page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "user logout the application",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "onliner-feature;user-login-into-onliner-and-get-to-cart-item;",
  "rows": [
    {
      "cells": [
        "product1",
        "product2"
      ],
      "line": 62,
      "id": "onliner-feature;user-login-into-onliner-and-get-to-cart-item;;1"
    },
    {
      "cells": [
        "HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)",
        "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)"
      ],
      "line": 63,
      "id": "onliner-feature;user-login-into-onliner-and-get-to-cart-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 201000,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "user login into onliner and get to cart item",
  "description": "",
  "id": "onliner-feature;user-login-into-onliner-and-get-to-cart-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OnlinerFunctionality"
    },
    {
      "line": 22,
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user navigates to \"https://www.onliner.by/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user click on \"Sign_In\" button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enter email on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user enter password on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user click on \"Login\" button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click on \"Каталог\" Navigation Menu",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user see Heading on \"Catalog\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user click on \"1\" Catalog Navigation Classifier on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user mouseover on \"Мобильные телефоны и аксессуары\" Catalog Navigation List Item on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user see Catalog Navigation active List Item",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user click on \"Мобильные телефоны\" Dropdown Navigation List Item on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user see Heading on \"Mobile Phones Catalog\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user click on \"HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)\" Mobile Phone on Mobile Phones Catalog",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user see Heading on \"Product\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user click on \"Предложений\" button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user click on \"1\" Offers list item on Product page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user see Buy Button is green on Product Page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user enter \"Xiaomi Redmi 9A 2GB/32GB международная версия (серый)\" on Search Input",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user see \"Xiaomi Redmi 9A 2GB/32GB международная версия (серый)\" on Search Window Input",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user click on \"Xiaomi Redmi 9A 2GB/32GB международная версия (серый)\" Item on Search window",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user see Heading on \"Product\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "user click on \"Предложений\" button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "user click on \"1\" Offers list item on Product page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user see Buy Button is green on Product Page",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "user click on \"В корзине\" button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user see Heading on \"Cart\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user see \"HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)\" product contains in Cart page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "user see \"Xiaomi Redmi 9A 2GB/32GB международная версия (серый)\" product contains in Cart page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "user remove all Items on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user see confirm Remove message on Cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "user click on Logo on Cart page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "user logout the application",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.onliner.by/",
      "offset": 19
    }
  ],
  "location": "OnlinerStepDefinition.userIsOnHomePage(String)"
});
formatter.result({
  "duration": 1874828600,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 74670300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign_In",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 251759200,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userEnterEmailOnLoginPage()"
});
formatter.result({
  "duration": 321335000,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userEnterPasswordOnLoginPage()"
});
formatter.result({
  "duration": 224658300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 196303600,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 2256496500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Каталог",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnNavigationmenu(String)"
});
formatter.result({
  "duration": 1942666700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Catalog",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 67992600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnCatalogNavigationClassifierOnCatalogPage(String)"
});
formatter.result({
  "duration": 639958000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мобильные телефоны и аксессуары",
      "offset": 19
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnCatalogNavigationListItemOnCatalogPage(String)"
});
formatter.result({
  "duration": 339899700,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userSeeCatalogNavigationActiveListItem()"
});
formatter.result({
  "duration": 63866600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мобильные телефоны",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnDropdownNavigationListItemOnCatalogPage(String)"
});
formatter.result({
  "duration": 2218134400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phones Catalog",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 1719804600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnMobilePhoneOnMobilePhonesCatalog(String)"
});
formatter.result({
  "duration": 1609610000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 785328400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Предложений",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 1572140800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnOffersListItemOnProductPage(String)"
});
formatter.result({
  "duration": 1785047600,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userSeeBuyButtonIsGreenOnProductPage()"
});
formatter.result({
  "duration": 83824400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)",
      "offset": 12
    }
  ],
  "location": "OnlinerStepDefinition.userEnterOnSearchInput(String)"
});
formatter.result({
  "duration": 611026300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)",
      "offset": 10
    }
  ],
  "location": "OnlinerStepDefinition.userSeeOnSearchWindowInput(String)"
});
formatter.result({
  "duration": 110700900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnItemOnSearchWindow(String)"
});
formatter.result({
  "duration": 917739400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 1786923800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Предложений",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 1430843700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnOffersListItemOnProductPage(String)"
});
formatter.result({
  "duration": 1264644200,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userSeeBuyButtonIsGreenOnProductPage()"
});
formatter.result({
  "duration": 146063800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "В корзине",
      "offset": 15
    }
  ],
  "location": "OnlinerStepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 1092078700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cart",
      "offset": 21
    }
  ],
  "location": "OnlinerStepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 46442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)",
      "offset": 10
    }
  ],
  "location": "OnlinerStepDefinition.userSeeThatProductsContainsInCartPage(String)"
});
formatter.result({
  "duration": 502941300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)",
      "offset": 10
    }
  ],
  "location": "OnlinerStepDefinition.userSeeThatProductsContainsInCartPage(String)"
});
formatter.result({
  "duration": 221197300,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userRemoveAllItemsOnCartPage()"
});
formatter.result({
  "duration": 11569205700,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userSeeConfirmRemoveMessageOnCartPage()"
});
formatter.result({
  "duration": 271240800,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userClickOnLogoOnCartPage()"
});
formatter.result({
  "duration": 2292789500,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 57825900,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userLoguoutTheApplication()"
});
formatter.result({
  "duration": 2566915900,
  "status": "passed"
});
formatter.match({
  "location": "OnlinerStepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 49067100,
  "status": "passed"
});
formatter.after({
  "duration": 402200,
  "status": "passed"
});
});