package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "./Features/FeatureTest01.feature", glue = {"stepDefinition" }, monochrome = true,  plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
		 "junit:target/cucumber-reports/Cucumber.xml",
		 "html:target/cucumber-reports"})
//@CucumberOptions(features = "./Features/FeatureTest01.feature", glue = {"stepDefinition" }, monochrome = true, plugin = { "json:Reports/cucumber.json" })

public class testRunner {

}
