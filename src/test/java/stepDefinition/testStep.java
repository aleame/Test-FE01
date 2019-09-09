package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import junit.framework.Assert;

public class testStep {

	private WebDriver driver;

	@Before
	public void createDriver() {
		String path = System.getProperty("user.dir");
		System.setProperty("webdriver.chrome.driver", path + ".\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
	}

	@Given("^El Usuario ingresa al sitio de MercadoLibre \"([^\"]*)\"$")
	public void el_Usuario_ingresa_al_sitio_de_MercadoLibre(String site) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.out.println(site);
		driver.get(site);
	}

	@Given("^El Usuario desplega el menu Categorias haciend clic y se visualiza el submenu$")
	public void el_Usuario_desplega_el_menu_Categorias_haciend_clic_y_se_visualiza_el_submenu() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Actions action = new Actions(driver);
		WebElement categoriasElement = null;
		categoriasElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/a"));
		action.moveToElement(categoriasElement).build().perform();
		Thread.sleep(1000);
	}

	@Given("^El Usuario hace clic en el submenu \"([^\"]*)\" y visualiza el desplegable$")
	public void el_Usuario_hace_clic_en_el_submenu_y_visualiza_el_desplegable(String submenu) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		Actions action = new Actions(driver);
		WebElement submenuElement = null;
		switch (submenu) {
		case "Hogar y Electrodomésticos":
			submenuElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[1]/ul[2]/li[2]/a"));	
			break;
		case "Tecnología":
			submenuElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[1]/ul[2]/li[1]/a"));	
			break;
		case "Libros":
			submenuElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[1]/ul[2]/li[6]/a"));	
			break;
		case "Herramientas e Industria":
			submenuElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[1]/ul[2]/li[4]/a"));	
			break;
		case "Juguetes y Bebés":
			submenuElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[1]/ul[2]/li[5]/a"));	
			break;
		case "Deportes y Aire Libre":
			submenuElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[1]/ul[2]/li[3]/a"));	
			break;
		default:
			break;
		}
		
		action.moveToElement(submenuElement).build().perform();
		Thread.sleep(2000);
	}

	@Given("^El Usuario hace clic en el deplegable \"([^\"]*)\" y visauliza la categoria solicitada$")
	public void el_Usuario_hace_clic_en_el_deplegable_y_visauliza_la_categoria_solicitada(String desplegable) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement desplegableElement = null, categoriaElement = null, resultadosElement = null;
		switch (desplegable) {
		case "Climatización":
			desplegableElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[2]/div/div/article[1]/ul/li[1]/a"));
			break;
		case "Celulares y Smartphones":
			desplegableElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[2]/div/div/article[1]/ul/li[1]/a"));
			break;
		case "Industria Textil":
			desplegableElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[2]/div/div/article[1]/ul/li[4]/a"));
			break;
		case "Cuarto del Bebé":
			desplegableElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[2]/div/div/article[3]/h2/a"));
			break;
		case "Bicicletas":
			desplegableElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[2]/div/div/article[1]/ul/li[1]/a"));
			break;
			//Caso de validación fallida
		case "Historia":
			desplegableElement = driver.findElement(By.xpath("/html/body/header/div/div[2]/ul/li[2]/nav/section[2]/div/div/article[2]/ul/li[1]/a"));
			break;
		default:
			break;
		}
		desplegableElement.click();
		Thread.sleep(1000);
		
		//*[@id="inner-main"]/aside/div[1]/h1
		categoriaElement = driver.findElement(By.xpath("//*[@id=\"inner-main\"]/aside/div[1]/h1"));
		resultadosElement = driver.findElement(By.xpath("//*[@id=\"inner-main\"]/aside/div[2]"));
		System.out.println(categoriaElement.getText());
		Assert.assertEquals("El parametro de busqueda no es el esperado", desplegable, categoriaElement.getText());
		Assert.assertEquals("No se muestra la cantidad de resultados de la categoria seleccionada", true, resultadosElement.getText().contains("resultados"));
	}

	@Given("^El Usuario selecciona la ubicacion Capital Federal para filtar la busqueda por region$")
	public void el_Usuario_selecciona_la_ubicacion_Capital_Federal_para_filtar_la_busqueda_por_region() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement cabaElement = null;
		cabaElement = driver.findElement(By.xpath("//*[@id=\"id_state\"]/dd[1]/a/span[1]"));
		cabaElement.click();
		Thread.sleep(2000);
	}
	
	@Given("^Finalmente el Usuario selecciona una publicacion y visualiza su detalle$")
	public void finalmente_el_Usuario_selecciona_una_publicacion_y_visualiza_su_detalle() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		WebElement publicacionElement = null, publicacionChildItemClassNameElement = null, publicacionChildItemClassPriceElement, publicacionSelectedName = null, publicacionSelectedPrice = null, publicacionSelectedAuxPrice = null;
		publicacionElement = driver.findElement(By.xpath("//*[@id=\"searchResults\"]/li[1]"));
		//publicacionElement.click();
		Thread.sleep(1000);
		
		publicacionChildItemClassNameElement = publicacionElement.findElement(By.className("item__info-title"));
		publicacionChildItemClassPriceElement = publicacionElement.findElement(By.className("price__fraction"));
		String productNameList = publicacionChildItemClassNameElement.getText();
		String productPriceList = publicacionChildItemClassPriceElement.getText();
		publicacionChildItemClassNameElement.click();
		Thread.sleep(2000);
		
		publicacionSelectedName = driver.findElement(By.className("item-title__primary"));
		publicacionSelectedAuxPrice = driver.findElement(By.className("short-description__form"));
		publicacionSelectedPrice = publicacionSelectedAuxPrice.findElement(By.className("price-tag-fraction"));
		Assert.assertEquals("El nombre del producto seleccionado no es el esperado", productNameList, publicacionSelectedName.getText());
		Assert.assertEquals("El precio del producto seleccionado no es el esperado", productPriceList, publicacionSelectedPrice.getText());
	}
	
	@After
	public void after() throws Throwable {
		Thread.sleep(2000);
		driver.quit();
	}
}

