export const TopPlayersPay = `
    SELECT 
    Name_ID, name AS PlayerName,
      CAST(REPLACE(SUBSTRING(TotalPay, 2), ',', '') AS INTEGER) AS CleanTotalPay
    FROM 
      alldata
    ORDER BY 
      CleanTotalPay DESC
    LIMIT ?` // Using ? as a placeholder and not '$LIMIT' or 10 is to avoid SQL injection or make dynamic

export const SQL_Player = `SELECT Name_ID,Name, TotalPay, Nation
FROM alldata
where Name_ID = $name_id` // Both $Name_ID or ? wont allow SQL injection 

export const searchPlayerName = `
    SELECT 
    Name_ID, name AS PlayerName,
      CAST(REPLACE(SUBSTRING(TotalPay, 2), ',', '') AS INTEGER) AS CleanTotalPay
    FROM 
      alldata
      where lower(name) like lower('%' || $searchTerm || '%')
      ORDER BY 
      CleanTotalPay DESC
    LIMIT 10` // Using ? as a placeholder and not '$LIMIT' or 10 is to avoid SQL injection or make dynamic
