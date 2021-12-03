import PyPDF2
from fpdf import FPDF
import base64
import json
from elasticsearch import Elasticsearch
elastic_client = Elasticsearch(hosts=["localhost"])

# create a new PDF object with FPDF
pdf = FPDF()

# create a new cell 
#file =open("C:/users/HP/OneDrive/Desktop/data.txt","r") 
for page in range(10):
    pdf.add_page()
    pdf.set_font("Arial", size=14)
    pdf.cell(150, 12, txt="Nothing just..", ln=1, align="C")

pdf.output("Sample.pdf")

file = "Sample.pdf"
read_pdf = PyPDF2.PdfFileReader(file, strict=False)
print (read_pdf)

pdf_meta = read_pdf.getDocumentInfo()

num = read_pdf.getNumPages()
print ("PDF pages:", num)
all_pages = {}
all_pages["meta"] = {}

for meta, value in pdf_meta.items():
    print (meta, value)
    all_pages["meta"][meta] = value

for page in range(num):
    data = read_pdf.getPage(page)
    #page_mode = read_pdf.getPageMode()

    page_text = data.extractText()

    all_pages[page] = page_text

# create a JSON string from the dictionary
json_data = json.dumps(all_pages)
print ("\nJSON:", json_data)

# convert JSON string to bytes-like obj
bytes_string = bytes(json_data, 'utf-8')
print ("\nbytes_string:", bytes_string)

# convert bytes to base64 encoded string
encoded_pdf = base64.b64encode(bytes_string)
encoded_pdf = str(encoded_pdf)
print ("\nbase64:", encoded_pdf)

body_doc = {"data": encoded_pdf}

result = elastic_client.index(index="pdf", doc_type="_doc", id="42", body=body_doc)

print ("\nindex result:", result['result'])

result = elastic_client.get(index="pdf", doc_type='_doc', id=42)

result_data = result["_source"]["data"]
print ("\nresult_data:", result_data, '-- type:', type(result_data))

decoded_pdf = base64.b64decode(result_data[2:-1]).decode("utf-8")
print ("\ndecoded_pdf:", decoded_pdf)

json_dict = json.loads(decoded_pdf)
print ("\njson_str:", json_dict, "\n\ntype:", type(json_dict))

########## if you want to create another pdf file ############
'''
pdf = FPDF()

for page, value in json_dict.items():
    if page != "meta":
        pdf.add_page()
        pdf.set_font("Arial", size=14)

        output = value + " -- Page: " + str(int(page)+1)
        pdf.cell(150, 12, txt=output, ln=1, align="C")
    else:
        for meta, meta_val in json_dict["meta"].items():
            if "title" in meta.lower():
                pdf.set_title(meta_val)
            elif "producer" in meta.lower() or "creator" in meta.lower():
                pdf.set_creator(meta_val)

'''
pdf.output("Sample_from_elaticsearch.pdf")
