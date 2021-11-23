
##################### Module and imports #########################
import json
import time
import sys
from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
import csv
import json

######################### Es connection ###########################
def connect2ES():
    # connect to ES on localhost on port 9200
    es = Elasticsearch([{'host': 'localhost', 'port': 9200}] , timeout=30, max_retries=10, retry_on_timeout=True)
    if es.ping():
        print('Connected to ES!')
    else:
        print('Could not connect!')
        sys.exit()

    print("*********************************************************************************");
    return es


################################# Query  Retrieving ####################

def search_result(q , ad_id ,es):
    c=[]
    if (q=="ALL"):
        que ={
            'query':{
                'match': {
                    "Advocate_Id":ad_id
                }
                     
                
            }
        }

        res= es.search(index='client-data',body=que)
        r =(res['hits']['max_score'])
        print(res)
        print("Search Result:\n")
        for hit in res['hits']['hits']:

              if ((hit['_score']) >=r/2):
                
             
                 Advocate_Name = ad_id
                 Client_id=int(hit['_id'])
                 Case_no=hit['_source']['Case_no']
                 District=hit['_source']['District']
                 Parties_name=hit['_source']['Parties_name']
                 Appearing_for=hit['_source']['Appearing_for']
                 Against=hit['_source']['Against']
                 Adress_of_client=hit['_source']['Adress_of_client']
                 email_id=hit['_source']['email_id']
                 Total_Fee = hit['_source']['Fee_and_expenses']['total_fee']
                 Paid_Fee=hit['_source']['Fee_and_expenses']['paid']
                 Due_Fee=hit['_source']['Fee_and_expenses']['due']
                 Next_date=hit['_source']['Next_date']
                 Remark=hit['_source']['Remark']



                 d=[{
                 "Client_id" :Client_id,
                 "Case_no":Case_no,
                 "District":District,
                 "Parties_name":Parties_name,
                 "Appearing_for":Appearing_for,
                 "Against":Against,
                 "Adress_of_client":Adress_of_client,
                 "email_id":email_id,
                 "Total_Fee":Total_Fee,
                 "Paid_Fee":Paid_Fee,
                 "Due_Fee":Due_Fee,
                 "Next_date":Next_date,
                 "Remark":Remark
                 
                 }]
                 c=c+d

        #print(c)
        b={"hits":c}
        #print(b)
        jo= json.dumps(b)
        with open("index.json", "w") as outfile:
            outfile.write(jo)


        with open('index.json', 'r') as openfile:
            oop = json.load(openfile)
  #     print(oop)


        print("*********************************************************************************");
 
        return oop



############################ WHEN CLIENT SEARCH WITH NAME OF A PARTICULAR ###################################
    else:
        que ={
            'query':{
                'match': {
                    "Parties_name":q
                }
                     
                
            }
        }
        res= es.search(index='client-data',body=que)
        r =(res['hits']['max_score'])
        print(res)
        print("Search Result:\n")
        for hit in res['hits']['hits']:

              if ((hit['_score']) >=r/2):
                
             
                 Advocate_Name = ad_id
                 Client_id=int(hit['_id'])
                 Case_no=hit['_source']['Case_no']
                 District=hit['_source']['District']
                 Parties_name=hit['_source']['Parties_name']
                 Appearing_for=hit['_source']['Appearing_for']
                 Against=hit['_source']['Against']
                 Adress_of_client=hit['_source']['Adress_of_client']
                 email_id=hit['_source']['email_id']
                 Total_Fee = hit['_source']['Fee_and_expenses']['total_fee']
                 Paid_Fee=hit['_source']['Fee_and_expenses']['paid']
                 Due_Fee=hit['_source']['Fee_and_expenses']['due']
                 Next_date=hit['_source']['Next_date']
                 Remark=hit['_source']['Remark']



                 d=[{
                 "Client_id" :Client_id,
                 "Case_no":Case_no,
                 "District":District,
                 "Parties_name":Parties_name,
                 "Appearing_for":Appearing_for,
                 "Against":Against,
                 "Adress_of_client":Adress_of_client,
                 "email_id":email_id,
                 "Total_Fee":Total_Fee,
                 "Paid_Fee":Paid_Fee,
                 "Due_Fee":Due_Fee,
                 "Next_date":Next_date,
                 "Remark":Remark
                 
                 }]
                 c=c+d

        #print(c)
        b={"hits":c}
        #print(b)
        jo= json.dumps(b)
        with open("index.json", "w") as outfile:
            outfile.write(jo)


        with open('index.json', 'r') as openfile:
            oop = json.load(openfile)
  #     print(oop)


        print("*********************************************************************************");
 
        return oop


            










 ####################### Main Function ################################ 

if __name__=="__main__":

    es = connect2ES();
    

    while(1):
        query=input("Enter a Query:");


        start = time.time()
        if query=="END":
            break;

        print("Query: " +query)
        json_1=search_result("ALL" ,123,es )
       
        end = time.time()
        print(end - start)
        print(json_1)
