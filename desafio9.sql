USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN nome VARCHAR(45))
BEGIN
	SELECT artist.name AS artista, albuns.name AS album
    FROM SpotifyClone.Album AS albuns
    INNER JOIN
    SpotifyClone.Artist AS artist ON albuns.artist_id = artist.artist_id
    WHERE artist.name = nome
    ORDER BY 2;
END $$

DELIMITER ;
