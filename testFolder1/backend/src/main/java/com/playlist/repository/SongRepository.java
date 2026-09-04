package com.playlist.repository;

import com.playlist.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
    List<Song> findAllByOrderByTitleAsc();
    List<Song> findAllByOrderByArtistAsc();
}
