CREATE VIEW estatisticas_musicais AS
    SELECT 
        COUNT(*) AS cancoes,
        (SELECT 
                COUNT(*)
            FROM
                SpotifyClone.Artist) AS artistas,
        (SELECT 
                COUNT(*)
            FROM
                SpotifyClone.Album) AS alguns
    FROM
        SpotifyClone.Song;
