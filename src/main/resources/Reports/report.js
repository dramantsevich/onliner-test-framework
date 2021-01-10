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
formatter.scenario({
  "line": 4,
  "name": "user login into onliner and get to cart items",
  "description": "",
  "id": "onliner-feature;user-login-into-onliner-and-get-to-cart-items",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enter \"dzmitry.ramantsevich@expert-soft.by\" email on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter \"5716294qD\" password on Login page",
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
  "name": "user click on \"2\" Reaction on News page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user see selected Reaction on News page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on \"3\" Popular News on News page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on \"Каталог\" Navigation Menu",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user see Heading on \"Catalog\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on \"1\" Catalog Navigation Classifier on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user mouseover on \"Мобильные телефоны и аксессуары\" Catalog Navigation List Item on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user see Catalog Navigation active List Item",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user click on \"Мобильные телефоны\" Dropdown Navigation List Item on Catalog page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user see Heading on \"Mobile Phones Catalog\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user click on \"Смартфон HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)\" Mobile Phone on Mobile Phones Catalog",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user see Heading on \"Product\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user click on \"Предложений\" button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user click on \"1\" Offers list item on Product page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user see Buy Button is green on Product Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user enter \"Xiaomi Redmi 9A 2GB/32GB международная версия (серый)\" on Search Input",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on \"Xiaomi Redmi 9A 2GB/32GB международная версия (серый)\" Item on Search window",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user see Heading on \"Product\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user click on \"Предложений\" button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user click on \"1\" Offers list item on Product page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user see Buy Button is green on Product Page",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user click on \"В корзине\" button",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user see Heading on \"Cart\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user remove all Items on Cart page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user see confirm Remove message on Cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user click on Logo on Cart page",
  "keyword": "When "
});
formatter.step({
  "line": 40,
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
  "location": "StepDefinition.userIsOnHomePage(String)"
});
formatter.result({
  "duration": 4075630200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 231114300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign_In",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 325738100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dzmitry.ramantsevich@expert-soft.by",
      "offset": 12
    }
  ],
  "location": "StepDefinition.userEnterEmailOnLoginPage(String)"
});
formatter.result({
  "duration": 404580500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5716294qD",
      "offset": 12
    }
  ],
  "location": "StepDefinition.userEnterPasswordOnLoginPage(String)"
});
formatter.result({
  "duration": 215739200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 170668000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 3026098900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnNewsOnHomePage(String)"
});
formatter.result({
  "duration": 5447193800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "News",
      "offset": 21
    }
  ],
  "location": "StepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 79076300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnReactionOnNewsPage(String)"
});
formatter.result({
  "duration": 180036500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userSeeSelectedReactionOnNewsPage()"
});
formatter.result({
  "duration": 124554500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnPopularNewsOnNewsPage(String)"
});
formatter.result({
  "duration": 230415400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Каталог",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnNavigationmenu(String)"
});
formatter.result({
  "duration": 198996000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Catalog",
      "offset": 21
    }
  ],
  "location": "StepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 1895906400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnCatalogNavigationClassifierOnCatalogPage(String)"
});
formatter.result({
  "duration": 608871600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мобильные телефоны и аксессуары",
      "offset": 19
    }
  ],
  "location": "StepDefinition.userClickOnCatalogNavigationListItemOnCatalogPage(String)"
});
formatter.result({
  "duration": 331221000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userSeeCatalogNavigationActiveListItem()"
});
formatter.result({
  "duration": 66707800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мобильные телефоны",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnDropdownNavigationListItemOnCatalogPage(String)"
});
formatter.result({
  "duration": 2175639800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Phones Catalog",
      "offset": 21
    }
  ],
  "location": "StepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 2071112200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смартфон HONOR 30 BMH-AN10 8GB/128GB (изумрудно-зеленый)",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnMobilePhoneOnMobilePhonesCatalog(String)"
});
formatter.result({
  "duration": 874033700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product",
      "offset": 21
    }
  ],
  "location": "StepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 1945634900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Предложений",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 1484681100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnOffersListItemOnProductPage(String)"
});
formatter.result({
  "duration": 2285807700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userSeeBuyButtonIsGreenOnProductPage()"
});
formatter.result({
  "duration": 1139665600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)",
      "offset": 12
    }
  ],
  "location": "StepDefinition.userEnterOnSearchInput(String)"
});
formatter.result({
  "duration": 1608195900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Xiaomi Redmi 9A 2GB/32GB международная версия (серый)",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnItemOnSearchWindow(String)"
});
formatter.result({
  "duration": 681901200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product",
      "offset": 21
    }
  ],
  "location": "StepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 1753802200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Предложений",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 2458893800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnOffersListItemOnProductPage(String)"
});
formatter.result({
  "duration": 359813300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userSeeBuyButtonIsGreenOnProductPage()"
});
formatter.result({
  "duration": 1148132400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "В корзине",
      "offset": 15
    }
  ],
  "location": "StepDefinition.userClickOnButton(String)"
});
formatter.result({
  "duration": 1137972000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cart",
      "offset": 21
    }
  ],
  "location": "StepDefinition.userSeeHeadingOnNewsPage(String)"
});
formatter.result({
  "duration": 57475900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userRemoveAllItemsOnCartPage()"
});
formatter.result({
  "duration": 27117965100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userSeeConfirmRemoveMessageOnCartPage()"
});
formatter.result({
  "duration": 322906800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userClickOnLogoOnCartPage()"
});
formatter.result({
  "duration": 2288781600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.userIsOnHomePage()"
});
formatter.result({
  "duration": 66567300,
  "status": "passed"
});
});