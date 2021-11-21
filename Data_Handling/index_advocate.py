import json
import sys
from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
import csv
import os
import pickle


# connect to ES on localhost on port 9200
es = Elasticsearch([{'host': 'localhost', 'port': 9200}], timeout=30, max_retries=10, retry_on_timeout=True )
if es.ping():
    print('Connected to ES!')
else:
    print('Could not connect!')
    sys.exit()

print("*********************************************************************************");




# index in ES = DB in an RDBMS
# Read each question and index into an index called questions
# Indexing only titles for this example to improve speed. In practice, its good to index CONCATENATE(title+body)
# Define the index


#Refer: https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html
# Mapping: Structure of the index
# Property/Field: name and type 

b ='''{ "settings":{  
      "analysis":{  
         "analyzer":{  
            "english_analyzer":{  
               "type":"custom",
               "filter":[  
                  "lowercase"
                 ],
               "tokenizer":"standard"
            }
            
         
            
         }
      }
   },
"mappings": {
        "properties": {
                "Advocate_Name" : {
                       "type": "text",
                        "analyzer":"english_analyzer"
                       
                },
                "Advocate_Id": {
                        "type": "integer"
                        
                },
                 "Case_no":{
                        "type":"text"
                },
                "District":{
                    "type":"text"
                },
                "Parties_name":{
                    "type":"text"
                },
                "Appearing_for":{
                    "type":"text"
                },
                "Against":{
                    "type":"text"
                },
                "Adress_of_client":{
                    "type":"text"
                },
                "email_id":{
                    "type":"text"
                },
                "Fee_and_expenses":{
                    "type":"nested"
                },
                "Next_date":{
                    "type":"date"
                },
                "Remark":{
                    "type":"text"

                }



        }
     }
   }'''


ret = es.indices.create(index='client-data', ignore=400, body=b) #400 caused by IndexAlreadyExistsException, 
print(json.dumps(ret,indent=4))

########################## Data input ##################

def data_enter(sample_input):

    count=0
    j = json.dumps(sample_input)
    with open("input.json", "w") as outfile:
        outfile.write(j)
    
    with open('input.json', 'r') as openfile:
        oopas = json.load(openfile)

    for i in oopas['Clients']:
        
        
        if  os.path.exists('f1.pkl'):
             with open('f1.pkl', 'rb') as f:
                 count_1 = pickle.load(f)


        else:
            with open('f1.pkl', 'wb') as f:
                pickle.dump(count , f)

            with open('f1.pkl', 'rb') as f:
                count_1 = pickle.load(f)

        count_1 +=1
                # print(count)
        with open('f1.pkl', 'wb') as f:
            pickle.dump(count_1, f)
        with open('f1.pkl', 'rb') as f:
            object_pi2 = pickle.load(f)
                # print(object_pi2)
        doc_id = object_pi2
        print(doc_id)

        a_name=i['Advocate_Name']
        a_id=i['Advocate_Id']
        c_no=i['case_no']
        dis=i['District']
        p_name=i['Parties_name']
        a_for=i['Appearing_for']
        against=i['Against']
        aof=i['Adress_of_client']
        e_id=i['email_id']
        fee=i['Fee_and_expenses']
        n_date=i['Next_date']
        rem=i['Remark']


        b={
            "Advocate_Name": a_name,
            "Advocate_Id":a_id, #with a sqlite db
            "case_no":c_no,
            "District":dis,
            "Parties_name":p_name,
            "Appearing_for":a_for,
            "Against":against,
            "Adress_of_client":aof,
            "email_id":e_id,
            "Fee_and_expenses":fee,
            #"Documnet":"Attachment",   #ingest plugin ES
            "Next_date":n_date,
            "Remark":rem,

        }
        res = es.index(index="questions-index", id=doc_id, body=b)
    print("Completed indexing....")

    print("*********************************************************************************");



################# Main Function ########################
if __name__=="__main__":
     while(1):
        path=input("Enter File Path:");
        if path=="END":
            break;

        sample_input= {
             "Clients": [
        {
            "Advocate_Name": "Sanskar",
            "Advocate_Id":123, #with a sqlite db
            "case_no":"10987",
            "District":"Agra",
            "Parties_name":"vivek kumar , suresh jain ",
            "Appearing_for":"vivek kumar",
            "Against":"suresh jain ",
            "Adress_of_client":"46/72632 west agra",
            "email_id":"sv114@gmail.com",
            "Fee_and_expenses":{
                "total_fee":25000,
                "paid":10000,
                "due":15000
                 },
            #"Documnet":"Attachment",   #ingest plugin ES
            "Next_date":2021-6-18,
            "Remark":"Case is going to the last stage"

        },

          {
            "Advocate_Name": "Sanskar",
            "Advocate_Id":123, #with a sqlite db
            "case_no":"54617",
            "District":"Bharatpur",
            "Parties_name":"Deepak , suyash kumar , lovely jain",
            "Appearing_for":"Deepak",
            "Against":"lovely jain ",
            "Adress_of_client":"46/72632 west agra",
            "email_id":"sv114@gmail.com",
            "Fee_and_expenses":{
                "total_fee":25000,
                "paid":10000,
                "due":15000
                 },
            #"Documnet":"Attachment",   #ingest plugin ES
            "Next_date":2020-9-8,
            "Remark":"Case is closed "

        },
        {
            "Advocate_Name": "Veer",
            "Advocate_Id":122, #with a sqlite db
            "case_no":"54617",
            "District":"Bhopal",
            "Parties_name":"luv, deep kumar , lovely jain",
            "Appearing_for":"luv",
            "Against":"lovely ",
            "Adress_of_client":"46/72632 west agra",
            "email_id":"evree12@gmail.com",
            "Fee_and_expenses":{
                "total_fee":50000,
                "paid":40000,
                "due":10000
                 },
            #"Documnet":"Attachment",   #ingest plugin ES
            "Next_date":2021-9-8,
            "Remark":"Case is closed "

        }


         ]
         }


        data_enter(sample_input)


       
        

        

