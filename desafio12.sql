SELECT 
    CONCAT(t1.first_name, ' ', t1.last_name) AS 'Nome completo funcionário 1',
    t1.salary AS 'Salário funcionário 1',
    t1.phone_number AS 'Telefone funcionário 1',
    CONCAT(t2.first_name, ' ', t2.last_name) AS 'Nome completo funcionário 2',
    t2.salary AS 'Salário funcionário 2',
    t2.phone_number AS 'Telefone funcionário 2'
FROM
    hr.employees AS t1,
    hr.employees AS t2
WHERE
    t1.JOB_ID = t2.JOB_ID
        AND t1.EMPLOYEE_ID <> t2.EMPLOYEE_ID
ORDER BY 1 , 4;
