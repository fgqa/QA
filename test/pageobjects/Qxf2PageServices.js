class Qxf2PageServices{

  get qxf2ServicesTitle() {return $('//h1[contains(@class, "banner-brown")]')};

}
module.exports = new Qxf2PageServices();