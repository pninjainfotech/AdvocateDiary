def mysql_data(doc_id,a_name ,a_id,c_no,dis ,p_name,a_for,against,n_date,rem):
      a_id = str(a_id)
      c_no =str(c_no)
      n_date =str(n_date)
    
      mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="16052000"
      )

     

      mycursor = mydb.cursor()
      mycursor.execute("CREATE DATABASE IF NOT EXISTS mydatabase ")
      mycursor.execute("USE mydatabase")
      mycursor.execute("CREATE TABLE IF NOT EXISTS client_data (id VARCHAR(255), Advocate_Name VARCHAR(255),Advocate_Id VARCHAR(255), Case_no VARCHAR(255) ,District VARCHAR(255) ,Parties_name VARCHAR(255) , Appearing_for VARCHAR(255) , Against VARCHAR(255) , Next_date VARCHAR(255),Remark VARCHAR(255) )")
      sql =  "INSERT INTO client_data (id, Advocate_Name, Advocate_Id, Case_no, District, Parties_name, Appearing_for, Against, Next_date, Remark) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
      val = (doc_id,a_name ,a_id,c_no,dis ,p_name,a_for,against,n_date,rem)
      mycursor.execute(sql, val)
      mydb.commit()
      #print(mycursor.rowcount, "record inserted.")
