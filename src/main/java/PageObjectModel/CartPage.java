package PageObjectModel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class CartPage {
    public static WebDriver driver;

    @FindBy(xpath = "//div[@class='cart-form__title cart-form__title_big-alter cart-form__title_condensed-additional']")
    private WebElement heading;

    @FindBy(xpath = "//div[@class='cart-form__offers-unit cart-form__offers-unit_primary']")
    private List<WebElement> listOfProducts;

    @FindBy(xpath = "//a[@class='button-style button-style_auxiliary button-style_small cart-form__button cart-form__button_remove']")
    private WebElement removeButton;

    @FindBy(xpath = "//div[@class='cart-form__offers-part cart-form__offers-part_action']")
    private WebElement offersPartAction;

    @FindBy(xpath = "//div[@class='cart-form__description cart-form__description_primary cart-form__description_base-alter cart-form__description_condensed-extra']")
    private List<WebElement> confirmDeleteMessages;

    @FindBy(xpath = "//a[@class='cart-form__image cart-form__image_logo']")
    private WebElement logo;

    public CartPage(WebDriver ldriver) {
        this.driver = ldriver;
        PageFactory.initElements(driver, this);
    }

    public WebElement getHeading() { return heading; }

    public List<WebElement> getListOfProducts() { return listOfProducts; }

    public WebElement getRemoveButton() { return removeButton; }

    public WebElement getOffersPartAction() { return offersPartAction; }

    public List<WebElement> getConfirmDeleteMessages() { return confirmDeleteMessages; }

    public WebElement getLogo() { return logo; }
}
