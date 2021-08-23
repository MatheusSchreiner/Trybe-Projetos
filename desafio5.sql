CREATE VIEW top_2_hits_do_momento AS
    SELECT 
        s.name AS cancao, COUNT(u.user_id) AS reproducoes
    FROM
        SpotifyClone.Song AS s
            INNER JOIN
        SpotifyClone.UserSong AS u ON s.song_id = u.song_id
    GROUP BY 1
    ORDER BY 2 DESC , 1
    LIMIT 2;
