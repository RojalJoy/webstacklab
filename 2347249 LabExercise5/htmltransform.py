from lxml import etree

xml_tree = etree.parse("2347249 LabExercise5/product.xml")

xsl_tree = etree.parse("2347249 LabExercise5/transform.xsl")

transformer = etree.XSLT(xsl_tree)
transformed_tree = transformer(xml_tree)

output_html_filename = "output.html"
with open(output_html_filename, "wb") as output_file:
    output_file.write(transformed_tree)

print(f"Transformation complete. HTML output written to {output_html_filename}")
