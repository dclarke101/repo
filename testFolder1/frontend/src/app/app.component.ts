import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService, Song } from './services/song.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  songs: Song[] = [];
  newSong: Song = { title: '', artist: '' };
  editingSong: Song | null = null;
  modalVisible = false;
  editModalVisible = false;
  currentSort = '';
  loading = false;
  error = '';

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {
    this.loading = true;
    this.error = '';
    this.songService.getSongs(this.currentSort).subscribe({
      next: (data) => {
        this.songs = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load songs. Make sure the backend is running on port 8080.';
        this.loading = false;
        console.error('Error loading songs:', err);
      }
    });
  }

  openAddModal(): void {
    this.newSong = { title: '', artist: '' };
    this.modalVisible = true;
  }

  closeAddModal(): void {
    this.modalVisible = false;
    this.newSong = { title: '', artist: '' };
  }

  addSong(): void {
    if (this.newSong.title.trim() && this.newSong.artist.trim()) {
      this.songService.createSong(this.newSong).subscribe({
        next: () => {
          this.closeAddModal();
          this.loadSongs();
        },
        error: (err) => {
          this.error = 'Failed to add song';
          console.error('Error adding song:', err);
        }
      });
    }
  }

  openEditModal(song: Song): void {
    this.editingSong = { ...song };
    this.editModalVisible = true;
  }

  closeEditModal(): void {
    this.editModalVisible = false;
    this.editingSong = null;
  }

  updateSong(): void {
    if (this.editingSong && this.editingSong.id &&
        this.editingSong.title.trim() && this.editingSong.artist.trim()) {
      this.songService.updateSong(this.editingSong.id, this.editingSong).subscribe({
        next: () => {
          this.closeEditModal();
          this.loadSongs();
        },
        error: (err) => {
          this.error = 'Failed to update song';
          console.error('Error updating song:', err);
        }
      });
    }
  }

  deleteSong(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this song?')) {
      this.songService.deleteSong(id).subscribe({
        next: () => {
          this.loadSongs();
        },
        error: (err) => {
          this.error = 'Failed to delete song';
          console.error('Error deleting song:', err);
        }
      });
    }
  }

  onSortChange(): void {
    this.loadSongs();
  }
}
