CREATE VIEW top_3_artistas AS
    SELECT 
        a.name AS artista, COUNT(u.user_id) AS seguidores
    FROM
        SpotifyClone.Artist AS a
            INNER JOIN
        SpotifyClone.UserArtist AS u ON a.artist_id = u.user_id
    GROUP BY 1
    ORDER BY 1 DESC , 2
    LIMIT 3;
