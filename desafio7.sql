SELECT 
    UCASE(CONCAT(e.first_name, ' ', e.last_name)) AS 'Nome completo',
    h.START_DATE AS 'Data de início',
    e.SALARY AS 'Salário'
FROM
    hr.job_history AS h
        INNER JOIN
    hr.employees AS e ON h.employee_id = e.employee_id
WHERE
    MONTH(h.start_date) <= 3
ORDER BY 1 , 2;
