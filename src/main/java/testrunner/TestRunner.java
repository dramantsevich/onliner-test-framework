package testrunner;

import baseclass.BaseUtils;
import com.cucumber.listener.ExtentProperties;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/feature/onliner.feature",
        glue = { "stepdefinition" },
        tags= {//"@RequestForQuote"
        },
        monochrome=true,
        strict=true,
        dryRun=false,
        plugin= {
                //"pretty",
                "com.cucumber.listener.ExtentCucumberFormatter:",
                "html:src/main/resources/Reports",
                "junit:src/main/resources/Reports/cucumber.xml",
                "json:src/main/resources/Reports/cucumber.json",
        })
public class TestRunner {
        public static WebDriver driver;

        @BeforeClass
        public static void setUp() throws Throwable {
                String browser = "chrome";
                driver = BaseUtils.browserLaunch(browser);
                Date dateform = new Date();
                DateFormat date = new SimpleDateFormat("YYYY_MM_dd HH mm ss ");
                ExtentProperties extentProperties = ExtentProperties.INSTANCE;
                extentProperties.setReportPath(
                        "target/cucumber-Reports/Report-" + date.format(dateform).trim().replace(' ', '-') + ".html");
        }

        @AfterClass
        public static void tearDown() throws Throwable {
                driver.close();
                driver.quit();
        }
}
