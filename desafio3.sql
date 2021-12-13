CREATE VIEW historico_reproducao_usuarios AS
    SELECT 
        u.name AS usuario, s.name AS nome
    FROM
        SpotifyClone.User AS u
            INNER JOIN
        SpotifyClone.UserSong AS us ON u.user_id = us.user_id
            INNER JOIN
        SpotifyClone.Song AS s ON us.song_id = s.song_id
    ORDER BY 1 , 2;
