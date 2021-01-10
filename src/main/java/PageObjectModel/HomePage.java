package PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public static WebDriver driver;

    @FindBy(xpath = "//div[@class='b-top-logo']/a/img")
    private WebElement imgLogo;

    @FindBy(xpath = "//div[@class='auth-bar__item auth-bar__item--text']")
    private WebElement signInButton;

    @FindBy(xpath = "//input[@class='fast-search__input']")
    private WebElement searchInput;

    @FindBy(xpath = "//iframe[@class='modal-iframe']")
    private WebElement searchFrame;

    public HomePage(WebDriver ldriver) {
        this.driver = ldriver;
        PageFactory.initElements(driver, this);
    }

    public WebElement getImgLogo() { return imgLogo; }

    public WebElement getSignInButton() {  return signInButton; }

    public WebElement getNewsByNumber(String newsNumber){
        return driver.findElement(By.xpath("//div[@id='widget-"+ newsNumber +"1']"));
    }

    public WebElement getNavigationMenuByName(String navigationMenuName){
        return driver.findElement(By.xpath("//span[@class='b-main-navigation__text' and contains(text(),'"+ navigationMenuName +"')]"));
    }

    public WebElement getSearchInput() { return searchInput; }

    public WebElement getSearchFrame() { return searchFrame; }

    public WebElement getSearchResultItemByName(String itemName){
        return driver.findElement(By.xpath("//a[contains(text(),'"+ itemName +"')]"));
    }
}
