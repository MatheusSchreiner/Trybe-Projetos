DELIMITER $$

CREATE FUNCTION SpotifyClone.quantidade_musicas_no_historico(id_user INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE songs_total INT;
    SELECT COUNT(*)
    FROM SpotifyClone.UserSong
    WHERE user_id = id_user INTO songs_total;
    RETURN songs_total;
END $$

DELIMITER ;
