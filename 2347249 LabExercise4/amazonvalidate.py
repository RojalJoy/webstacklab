import xmlschema
xml_file="amazon.xml"
xsd_file="amazon.xsd"

validator=xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML file is valid aganist the XSD schema.")
else:
    print("XML file is not valid aganist the XSD schema.")
    print(validator.validate(xml_file))