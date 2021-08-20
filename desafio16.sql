DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(EMAIL varchar(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE TOTAL INT;
SELECT 
    COUNT(*)
FROM
    hr.employees AS e
        INNER JOIN
    hr.job_history AS h ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE
    e.EMAIL = EMAIL INTO TOTAL;
RETURN TOTAL;
END $$
DELIMITER ;
