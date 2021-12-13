DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN JOB_TITLE varchar(100))
BEGIN
SELECT 
ROUND(AVG(e.SALARY),2) as 'Média salarial'
FROM
hr.employees as e
INNER JOIN
hr.jobs as j on e.JOB_ID = j.JOB_ID
WHERE j.JOB_TITLE = JOB_TITLE;
END $$
DELIMITER ;
