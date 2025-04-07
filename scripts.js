// Sample music data structure
const musicData = {
    albums: [
        {
            id: 4,
            title: 'DAMN',
            artist: 'Kendrick Lamar',
            cover: '/covers/DAMN.png',
            songs: [
                { id: 46, title: 'BLOOD', url: '/Song/DAMN/BLOOD.mp3', genre: 'Hip Hop' },
                { id: 47, title: 'DNA', url: '/Song/DAMN/DNA.mp3', genre: 'Hip Hop' },
                { id: 48, title: 'YAH', url: '/Song/DAMN/YAH.mp3', genre: 'Hip Hop' },
                { id: 49, title: 'ELEMENT', url: '/Song/DAMN/ELEMENT.mp3', genre: 'Hip Hop' },
                { id: 50, title: 'FEEL', url: '/Song/DAMN/FEEL.mp3', genre: 'Hip Hop' },
                { id: 51, title: 'LOYALTY', url: '/Song/DAMN/LOYALTY.mp3', genre: 'Hip Hop' },
                { id: 52, title: 'PRIDE', url: '/Song/DAMN/PRIDE.mp3', genre: 'Hip Hop' },
                { id: 53, title: 'HUMBLE', url: '/Song/DAMN/HUMBLE.mp3', genre: 'Hip Hop' },
                { id: 54, title: 'LUST', url: '/Song/DAMN/LUST.mp3', genre: 'Hip Hop' },
                { id: 55, title: 'LOVE', url: '/Song/DAMN/LOVE.mp3', genre: 'Hip Hop' },
                { id: 56, title: 'XXX', url: '/Song/DAMN/XXX.mp3', genre: 'Hip Hop' },
                { id: 57, title: 'FEAR', url: '/Song/DAMN/FEAR.mp3', genre: 'Hip Hop' },
                { id: 58, title: 'GOD', url: '/Song/DAMN/GOD.mp3', genre: 'Hip Hop' },
                { id: 59, title: 'DUCKWORTH', url: '/Song/DAMN/DUCKWORTH.mp3', genre: 'Hip Hop' }
            ]
        },
        {
            id: 1,
            title: 'Blonde',
            artist: 'Frank Ocean',
            cover: '/covers/Blonde.png',
            songs: [
                { id: 29, title: 'Nikes', url: '/Song/Blonde/Nikes.mp3', genre: 'R&B' },
                { id: 30, title: 'Ivy', url: '/Song/Blonde/Ivy.mp3', genre: 'R&B' },
                { id: 31, title: 'Pink + White', url: '/Song/Blonde/Pink + White.mp3', genre: 'R&B' },
                { id: 32, title: 'Be Yourself', url: '/Song/Blonde/Be Yourself.mp3', genre: 'R&B' },
                { id: 33, title: 'Solo', url: '/Song/Blonde/Solo.mp3', genre: 'R&B' },
                { id: 34, title: 'Skyline To', url: '/Song/Blonde/Skyline To.mp3', genre: 'R&B' },
                { id: 35, title: 'Self Control', url: '/Song/Blonde/Self Control.mp3', genre: 'R&B' },
                { id: 36, title: 'Good Guy', url: '/Song/Blonde/Good Guy.mp3', genre: 'R&B' },
                { id: 37, title: 'Nights', url: '/Song/Blonde/Nights.mp3', genre: 'R&B' },
                { id: 38, title: 'Solo (Reprise)', url: '/Song/Blonde/Solo (Reprise).mp3', genre: 'R&B' },
                { id: 39, title: 'Pretty Sweet', url: '/Song/Blonde/Pretty Sweet.mp3', genre: 'R&B' },
                { id: 40, title: 'Facebook Story', url: '/Song/Blonde/Facebook Story.mp3', genre: 'R&B' },
                { id: 41, title: 'Close To You', url: '/Song/Blonde/Close To You.mp3', genre: 'R&B' },
                { id: 42, title: 'White Ferrari', url: '/Song/Blonde/White Ferrari.mp3', genre: 'R&B' },
                { id: 43, title: 'Seigfried', url: '/Song/Blonde/Seigfried.mp3', genre: 'R&B' },
                { id: 44, title: 'Godspeed', url: '/Song/Blonde/Godspeed.mp3', genre: 'R&B' },
                { id: 45, title: 'Futura Free', url: '/Song/Blonde/Futura Free.mp3', genre: 'R&B' }
            ]
        },
        {
            id: 2,
            title: 'good kid, m.A.A.d city',
            artist: 'Kendrick Lamar',
            cover: '/covers/GKMC.png',
            songs: [
                { id: 1, title: 'Sherane a.k.a Master Splinters Daughter', url: '/Song/GKMC/Sherane.mp3', genre: 'Hip Hop' },
                { id: 2, title: "Bitch, Don't Kill My Vibe", url: '/Song/GKMC/Bitch, Dont Kill My Vibe.mp3', genre: 'Hip Hop' },
                { id: 3, title: 'Backseat Freestyle', url: '/Song/GKMC/Backseat Freestyle.mp3', genre: 'Hip Hop' },
                { id: 4, title: 'The Art of Peer Pressure', url: '/Song/GKMC/The Art of Peer Pressure.mp3', genre: 'Hip Hop' },
                { id: 5, title: 'Money Trees', url: '/Song/GKMC/Money Trees.mp3', genre: 'Hip Hop' },
                { id: 6, title: 'Poetic Justice', url: '/Song/GKMC/Poetic Justice.mp3', genre: 'Hip Hop' },
                { id: 7, title: 'good kid', url: '/Song/GKMC/good kid.mp3', genre: 'Hip Hop' },
                { id: 8, title: 'm.A.A.d city', url: '/Song/GKMC/m.A.A.d city.mp3', genre: 'Hip Hop' },
                { id: 9, title: 'Swimming Pools (Drank)', url: '/Song/GKMC/Swimming Pools (Drank).mp3', genre: 'Hip Hop' },
                { id: 10, title: 'Sing About Me, Im Dying of Thirst', url: '/Song/GKMC/SAMIDOT.mp3', genre: 'Hip Hop' },
                { id: 11, title: 'Real', url: '/Song/GKMC/Real.mp3', genre: 'Hip Hop' },
                { id: 12, title: 'Compton', url: '/Song/GKMC/Compton.mp3', genre: 'Hip Hop' }
            ]
        },
        {
            id: 3,
            title: 'To Pimp a Butterfly',
            artist: 'Kendrick Lamar',
            cover: '/covers/TPAB.png',
            songs: [
                { id: 13, title: "Wesley's Theory", url: '/Song/TPAB/Wesley\'s Theory.mp3', genre: 'Hip Hop' },
                { id: 14, title: 'For Free? (Interlude)', url: '/Song/TPAB/For Free (Interlude).mp3', genre: 'Hip Hop' },
                { id: 15, title: 'King Kunta', url: '/Song/TPAB/King Kunta.mp3', genre: 'Hip Hop' },
                { id: 16, title: 'Institutionalized', url: '/Song/TPAB/Institutionalized.mp3', genre: 'Hip Hop' },
                { id: 17, title: 'These Walls', url: '/Song/TPAB/These Walls.mp3', genre: 'Hip Hop' },
                { id: 18, title: 'u', url: '/Song/TPAB/u.mp3', genre: 'Hip Hop' },
                { id: 19, title: 'Alright', url: '/Song/TPAB/Alright.mp3', genre: 'Hip Hop' },
                { id: 20, title: 'For Sale? (Interlude)', url: '/Song/TPAB/For Sale (Interlude).mp3', genre: 'Hip Hop' },
                { id: 21, title: 'Momma', url: '/Song/TPAB/Momma.mp3', genre: 'Hip Hop' },
                { id: 22, title: 'Hood Politics', url: '/Song/TPAB/Hood Politics.mp3', genre: 'Hip Hop' },
                { id: 23, title: 'How Much A Dollar Cost', url: '/Song/TPAB/How Much A Dollar Cost.mp3', genre: 'Hip Hop' },
                { id: 24, title: 'Complexion (A Zulu Love)', url: '/Song/TPAB/Complexion (A Zulu Love).mp3', genre: 'Hip Hop' },
                { id: 25, title: 'The Blacker The Berry', url: '/Song/TPAB/The Blacker The Berry.mp3', genre: 'Hip Hop' },
                { id: 26, title: "You Ain't Gotta Lie (Momma Said)", url: '/Song/TPAB/You Ain\'t Gotta Lie (Momma Said).mp3', genre: 'Hip Hop' },
                { id: 27, title: 'i', url: '/Song/TPAB/i.mp3', genre: 'Hip Hop' },
                { id: 28, title: 'Mortal Man', url: '/Song/TPAB/Mortal Man.mp3', genre: 'Hip Hop' }
            ]
        },
    ]
};

// DOM Elements
const albumGrid = document.getElementById('albumGrid');
const modal = document.getElementById('songModal');
const modalTitle = document.getElementById('albumTitle');
const songList = document.querySelector('.song-list');
const closeBtn = document.querySelector('.close-btn');
const audioPlayer = document.getElementById('audioPlayer');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.createElement('select');
genreFilter.id = 'genreFilter';
genreFilter.innerHTML = '<option value="all">All Genres</option>';

// Get unique genres from all songs
const genres = [...new Set(musicData.albums.flatMap(album => 
    album.songs.map(song => song.genre || 'Unknown')
))];

// Add genre options to filter
genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.appendChild(option);
});

// Add genre filter to search container
const searchContainer = document.querySelector('.search-container');
searchContainer.appendChild(genreFilter);
const favoritesBtn = document.querySelector('.favorites-btn');

// Playback Controls
const playPauseButton = document.getElementById('playPauseButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressBar = document.querySelector('.progress-bar');
const progressFill = document.getElementById('progressFill');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');
const currentSongCover = document.getElementById('currentSongCover');
const currentSongTitle = document.getElementById('currentSongTitle');
const currentSongArtist = document.getElementById('currentSongArtist');

// Settings Elements
const settingsButton = document.getElementById('settingsButton');
const settingsModal = document.getElementById('settingsModal');
const themeSelect = document.getElementById('themeSelect');
const audioQualitySelect = document.getElementById('audioQualitySelect');
const showVisualization = document.getElementById('showVisualization');

// Audio Context for Visualization
let audioContext;
let analyser;
let source;
let canvas;
let canvasCtx;
let animationId;

// Initialize Audio Context
function initAudioContext() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            source = audioContext.createMediaElementSource(audioPlayer);
            // Create equalizer filters
            const frequencies = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
            window.equalizers = frequencies.map(freq => {
                const filter = audioContext.createBiquadFilter();
                filter.type = 'peaking';
                filter.frequency.value = freq;
                filter.Q.value = 1;
                return filter;
            });
            
            // Connect the audio nodes
            source.connect(equalizers[0]);
            for (let i = 0; i < equalizers.length - 1; i++) {
                equalizers[i].connect(equalizers[i + 1]);
            }
            equalizers[equalizers.length - 1].connect(analyser);
            analyser.connect(audioContext.destination);

            // Create canvas for visualization
            canvas = document.createElement('canvas');
            canvas.className = 'audio-visualization';
            const playbackControls = document.querySelector('.playback-controls');
            if (playbackControls.querySelector('.audio-visualization')) {
                playbackControls.removeChild(playbackControls.querySelector('.audio-visualization'));
            }
            playbackControls.appendChild(canvas);
            canvasCtx = canvas.getContext('2d');
            
            // Resume audio context if it's suspended
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
        } catch (error) {
            console.error('Failed to initialize audio context:', error);
            settings.visualization = false;
            localStorage.setItem('settings', JSON.stringify(settings));
            showVisualization.checked = false;
        }
    }
}

// State
let currentlyPlaying = null;
let currentAlbum = null;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let showingFavorites = false;
let isShuffled = false;
let isRepeating = false;
let shuffledPlaylist = [];
let settings = JSON.parse(localStorage.getItem('settings')) || {
    theme: 'dark',
    audioQuality: 'high',
    visualization: false,
    playbackSpeed: 1,
    crossfade: 0,
    equalizer: 'flat'
};

// Equalizer presets with frequency configurations
const equalizerPresets = {
    flat: {
        60: 0, 170: 0, 310: 0, 600: 0, 1000: 0,
        3000: 0, 6000: 0, 12000: 0, 14000: 0, 16000: 0
    },
    rock: {
        60: 4, 170: 3, 310: 2, 600: 1, 1000: 0,
        3000: -1, 6000: 2, 12000: 3, 14000: 4, 16000: 4
    },
    pop: {
        60: -1, 170: 0, 310: 2, 600: 3, 1000: 4,
        3000: 4, 6000: 2, 12000: 1, 14000: 0, 16000: -1
    },
    jazz: {
        60: 2, 170: 1, 310: 0, 600: 2, 1000: 3,
        3000: 3, 6000: 2, 12000: 1, 14000: 0, 16000: 0
    },
    classical: {
        60: 3, 170: 2, 310: 1, 600: 0, 1000: 0,
        3000: 0, 6000: 1, 12000: 2, 14000: 3, 16000: 3
    },
    bass: {
        60: 6, 170: 5, 310: 4, 600: 2, 1000: 0,
        3000: 0, 6000: 0, 12000: 0, 14000: 0, 16000: 0
    },
    electronic: {
        60: 4, 170: 3, 310: 2, 600: 1, 1000: 0,
        3000: 2, 6000: 4, 12000: 5, 14000: 5, 16000: 6
    },
    hiphop: {
        60: 5, 170: 4, 310: 2, 600: 1, 1000: 0,
        3000: 1, 6000: 2, 12000: 3, 14000: 3, 16000: 3
    },
    rnb: {
        60: 3, 170: 2, 310: 1, 600: 2, 1000: 3,
        3000: 2, 6000: 1, 12000: 1, 14000: 1, 16000: 1
    }
};

// Apply saved settings
function applySettings() {
    document.body.className = settings.theme;
    themeSelect.value = settings.theme;
    audioQualitySelect.value = settings.audioQuality;
    showVisualization.checked = settings.visualization;
    equalizerSelect.value = settings.equalizer;
    if (window.equalizers) {
        applyEqualizerPreset(settings.equalizer);
    }
    
    if (settings.visualization) {
        initAudioContext();
        if (!animationId) drawVisualization();
    } else {
        if (canvas) canvas.style.display = 'none';
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }
}

// Draw audio visualization
function drawVisualization() {
    if (!settings.visualization) return;
    
    canvas.width = canvas.clientWidth;
    canvas.height = 60;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let hueRotation = 0;
    
    function draw() {
        if (!settings.visualization) return;
        animationId = requestAnimationFrame(draw);
        
        analyser.getByteFrequencyData(dataArray);
        canvasCtx.fillStyle = getComputedStyle(document.body).getPropertyValue('--background-color');
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
        
        const barWidth = (canvas.width / bufferLength) * 2.5;
        let x = 0;
        let totalAmplitude = 0;
        
        // Calculate average amplitude for dynamic effects
        for (let i = 0; i < bufferLength; i++) {
            totalAmplitude += dataArray[i];
        }
        const averageAmplitude = totalAmplitude / bufferLength;
        
        // Rotate hue based on average amplitude
        hueRotation = (hueRotation + averageAmplitude / 100) % 360;
        
        for (let i = 0; i < bufferLength; i++) {
            // Dynamic bar height with smooth scaling
            const scale = 1 + (averageAmplitude / 512);
            const barHeight = (dataArray[i] / 2) * scale;
            
            // Dynamic color based on frequency and amplitude
            const hue = (hueRotation + (i * 360 / bufferLength)) % 360;
            const saturation = 80 + (dataArray[i] / 4);
            const lightness = 40 + (dataArray[i] / 8);
            
            canvasCtx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            
            // Add gradient effect
            const gradient = canvasCtx.createLinearGradient(x, canvas.height - barHeight, x, canvas.height);
            gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`);
            gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0.4)`);
            canvasCtx.fillStyle = gradient;
            
            // Draw rounded bars with shadow effect
            canvasCtx.beginPath();
            canvasCtx.roundRect(x, canvas.height - barHeight, barWidth - 1, barHeight, 3);
            canvasCtx.fill();
            
            x += barWidth;
        }
    }
    
    draw();
}

// Format time in seconds to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Initialize the application
function applyEqualizerPreset(preset) {
    if (!window.equalizers) return;
    const presetGains = equalizerPresets[preset];
    window.equalizers.forEach((eq, index) => {
        const frequency = eq.frequency.value;
        eq.gain.value = presetGains[frequency] || 0;
    });
}

function init() {
    displayAlbums();
    setupEventListeners();
    updateFavoritesButton();
}

// Display albums in the grid
function displayAlbums() {
    albumGrid.innerHTML = '';
    const albumsToDisplay = showingFavorites 
        ? musicData.albums.filter(album => 
            album.songs.some(song => favorites.includes(song.id)))
        : musicData.albums;

    albumsToDisplay.forEach(album => {
        const albumElement = createAlbumElement(album);
        albumGrid.appendChild(albumElement);
    });
}

// Create album element
function createAlbumElement(album) {
    const albumDiv = document.createElement('div');
    albumDiv.className = 'album-cover';
    albumDiv.innerHTML = `
        <img src="${album.cover}" alt="${album.title}">
        <div class="album-info">
            <div class="album-title">${album.title}</div>
            <div class="album-artist">${album.artist}</div>
        </div>
    `;
    albumDiv.addEventListener('click', () => openModal(album));
    return albumDiv;
}

// Open modal with album songs
function openModal(album) {
    modalTitle.textContent = album.title;
    document.getElementById('albumArtist').textContent = album.artist;
    document.getElementById('modalAlbumCover').src = album.cover;
    songList.innerHTML = '';
    
    album.songs.forEach(song => {
        const songElement = createSongElement(song);
        songList.appendChild(songElement);
    });

    modal.style.display = 'block';
    // Add a small delay to ensure the display property is applied before adding the show class
    setTimeout(() => modal.classList.add('show'), 10);
}

// Create song element
function createSongElement(song) {
    const songDiv = document.createElement('div');
    songDiv.className = `song-item${currentlyPlaying === song.id ? ' playing' : ''}`;
    
    // Create a temporary audio element to get duration
    const tempAudio = new Audio(song.url);
    tempAudio.addEventListener('loadedmetadata', () => {
        const duration = formatTime(tempAudio.duration);
        songDiv.querySelector('.song-duration').textContent = duration;
    });
    
    songDiv.innerHTML = `
        <div class="song-details">
            <div class="song-info">
                <span class="song-title">${song.title}</span>
                <span class="song-duration">0:00</span>
            </div>
            <div class="song-metadata">
                <span class="song-genre">${song.genre || 'Unknown Genre'}</span>
                <span class="song-release">${song.releaseDate || ''}</span>
            </div>
        </div>
        <i class="fas fa-star favorite-icon ${favorites.includes(song.id) ? 'active' : ''}"></i>
    `;

    songDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-icon')) {
            toggleFavorite(song.id);
        } else {
            const currentAlbumData = musicData.albums.find(album => album.songs.some(s => s.id === song.id));
            if (currentAlbumData) {
                playSong(song, currentAlbumData);
            }
        }
    });

    return songDiv;
}

// Play song
function playSong(song, album) {
    if (!song || !album) {
        console.error('Invalid song or album data');
        return;
    }

    if (currentlyPlaying === song.id) {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    } else {
        currentlyPlaying = song.id;
        currentAlbum = album;
        audioPlayer.src = song.url;
        audioPlayer.play();
        updatePlayingState();
        updateNowPlayingInfo(song, album);
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
}

// Update now playing information
function updateNowPlayingInfo(song, album) {
    currentSongCover.src = album.cover;
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = album.artist;
}

// Get next/previous song
function getAdjacentSong(direction) {
    if (!currentAlbum) return null;
    
    const playlist = isShuffled ? shuffledPlaylist : currentAlbum.songs;
    const currentSongIndex = playlist.findIndex(song => song.id === currentlyPlaying);
    
    if (direction === 'next') {
        if (currentSongIndex === playlist.length - 1) {
            return isRepeating ? playlist[0] : null;
        }
        return playlist[currentSongIndex + 1];
    } else {
        if (currentSongIndex === 0) {
            return isRepeating ? playlist[playlist.length - 1] : null;
        }
        return playlist[currentSongIndex - 1];
    }
}

// Update playing state in UI
function updatePlayingState() {
    document.querySelectorAll('.song-item').forEach(item => {
        item.classList.remove('playing');
    });
    const playingItem = document.querySelector(`.song-item[data-id="${currentlyPlaying}"]`);
    if (playingItem) playingItem.classList.add('playing');
}

// Toggle favorite status
function toggleFavorite(songId) {
    const index = favorites.indexOf(songId);
    if (index === -1) {
        favorites.push(songId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    // Update all instances of this song's favorite icon
    document.querySelectorAll('.song-item').forEach(item => {
        const songTitle = item.querySelector('.song-title').textContent;
        const song = musicData.albums
            .flatMap(album => album.songs)
            .find(s => s.title === songTitle);
        if (song && song.id === songId) {
            const icon = item.querySelector('.favorite-icon');
            icon.classList.toggle('active', favorites.includes(songId));
        }
    });
    
    updateFavoritesButton();
    if (showingFavorites) displayAlbums();
}

// Update favorites button state
function updateFavoritesButton() {
    favoritesBtn.classList.toggle('active', showingFavorites);
}

// Shuffle array implementation
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Handle shuffle mode
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleButton.classList.toggle('active');
    if (isShuffled && currentAlbum) {
        shuffledPlaylist = shuffleArray(currentAlbum.songs);
    }
}

// Handle repeat mode
function toggleRepeat() {
    isRepeating = !isRepeating;
    repeatButton.classList.toggle('active');
}

// Setup event listeners
function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
            settingsModal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                settingsModal.style.display = 'none';
            }, 300);
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal || e.target === settingsModal) {
            modal.classList.remove('show');
            settingsModal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                settingsModal.style.display = 'none';
            }, 300);
        }
    });

    // Settings button
    settingsButton.addEventListener('click', () => {
        settingsModal.style.display = 'block';
        setTimeout(() => settingsModal.classList.add('show'), 10);
    });

    // Playback controls
    shuffleButton.addEventListener('click', toggleShuffle);
    repeatButton.addEventListener('click', toggleRepeat);

    // Additional settings
    playbackSpeedSelect.addEventListener('change', (e) => {
        settings.playbackSpeed = parseFloat(e.target.value);
        audioPlayer.playbackRate = settings.playbackSpeed;
        localStorage.setItem('settings', JSON.stringify(settings));
    });

    crossfadeSelect.addEventListener('change', (e) => {
        settings.crossfade = parseInt(e.target.value);
        localStorage.setItem('settings', JSON.stringify(settings));
    });

    equalizerSelect.addEventListener('change', (e) => {
        settings.equalizer = e.target.value;
        localStorage.setItem('settings', JSON.stringify(settings));
        applyEqualizerPreset(settings.equalizer);
    });

    favoritesBtn.addEventListener('click', () => {
        showingFavorites = !showingFavorites;
        updateFavoritesButton();
        displayAlbums();
    });

    searchInput.addEventListener('input', filterContent);
    genreFilter.addEventListener('change', filterContent);

    function filterContent() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGenre = genreFilter.value;
        const albums = document.querySelectorAll('.album-cover');
        
        albums.forEach(album => {
            const title = album.querySelector('.album-title').textContent.toLowerCase();
            const artist = album.querySelector('.album-artist').textContent.toLowerCase();
            const albumData = musicData.albums.find(a => a.title === album.querySelector('.album-title').textContent);
            
            const matchesSearch = title.includes(searchTerm) || artist.includes(searchTerm);
            const matchesGenre = selectedGenre === 'all' || 
                (albumData && albumData.songs.some(song => (song.genre || 'Unknown') === selectedGenre));
            
            album.style.display = matchesSearch && matchesGenre ? 'block' : 'none';
        });
    };

    // Playback control listeners
    playPauseButton.addEventListener('click', () => {
        if (currentlyPlaying) {
            playSong(currentAlbum.songs.find(song => song.id === currentlyPlaying), currentAlbum);
        }
    });

    prevButton.addEventListener('click', () => {
        const prevSong = getAdjacentSong('prev');
        if (prevSong) playSong(prevSong, currentAlbum);
    });

    nextButton.addEventListener('click', () => {
        const nextSong = getAdjacentSong('next');
        if (nextSong) playSong(nextSong, currentAlbum);
    });

    // Audio player event listeners
    audioPlayer.addEventListener('ended', () => {
        const nextSong = getAdjacentSong('next');
        if (nextSong) playSong(nextSong, currentAlbum);
    });

    audioPlayer.addEventListener('timeupdate', () => {
        if (!isNaN(audioPlayer.duration)) {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressFill.style.width = `${progress}%`;
            currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
            durationDisplay.textContent = formatTime(audioPlayer.duration);
        }
    });

    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    });

    // Volume control
    const volumeIcon = document.querySelector('.volume-controls i');
    let previousVolume = 1;

    function updateVolumeIcon(volume) {
        volumeIcon.className = 'fas';
        if (volume === 0) {
            volumeIcon.classList.add('fa-volume-mute');
        } else if (volume < 0.3) {
            volumeIcon.classList.add('fa-volume-off');
        } else if (volume < 0.7) {
            volumeIcon.classList.add('fa-volume-down');
        } else {
            volumeIcon.classList.add('fa-volume-up');
        }
    }

    volumeControl.addEventListener('input', (e) => {
        const volumeValue = e.target.value / 100;
        audioPlayer.volume = volumeValue;
        previousVolume = volumeValue;
        updateVolumeIcon(volumeValue);
    });

    volumeIcon.addEventListener('click', () => {
        if (audioPlayer.volume > 0) {
            previousVolume = audioPlayer.volume;
            audioPlayer.volume = 0;
            volumeControl.value = 0;
        } else {
            audioPlayer.volume = previousVolume;
            volumeControl.value = previousVolume * 100;
        }
        updateVolumeIcon(audioPlayer.volume);
    });

    // Settings listeners
    themeSelect.addEventListener('change', (e) => {
        settings.theme = e.target.value;
        localStorage.setItem('settings', JSON.stringify(settings));
        applySettings();
    });

    audioQualitySelect.addEventListener('change', (e) => {
        settings.audioQuality = e.target.value;
        localStorage.setItem('settings', JSON.stringify(settings));
    });

    showVisualization.addEventListener('change', (e) => {
        settings.visualization = e.target.checked;
        localStorage.setItem('settings', JSON.stringify(settings));
        applySettings();
    });

    // Auto-play next song
    audioPlayer.addEventListener('ended', () => {
        const nextSong = getAdjacentSong('next');
        if (nextSong) playSong(nextSong, currentAlbum);
    });
}

// Initialize the application
init();