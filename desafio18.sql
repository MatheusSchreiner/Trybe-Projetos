SELECT 
    CONCAT(t1.first_name, ' ', t1.last_name) AS 'Nome completo',
    DATE_FORMAT(t2.start_date, '%d/%m/%Y') AS 'Data de início',
    DATE_FORMAT(t2.end_date, '%d/%m/%Y') AS 'Data de rescisão',
    ROUND(DATEDIFF(t2.end_date, t2.start_date) / 365, 2) AS 'Anos trabalhados'
FROM hr.employees AS t1
INNER JOIN hr.job_history AS t2 ON t1.employee_id = t2.employee_id
ORDER BY 1 ASC , 4 ASC;
