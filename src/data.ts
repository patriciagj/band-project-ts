interface Albuns {
  id: number;
  title: string;
  songs: { id: number; name: string }[];
  imageUrl: string;
}

const albuns: Albuns[] = [
  {
    id: 1,
    title: 'Evanescence',
    songs: [
      { id: 1, name: 'What you Want' },
      { id: 2, name: 'Made of Stone' },
      { id: 3, name: 'The Change' },
      { id: 4, name: 'My Heart is Broken' },
      { id: 5, name: 'The Other Side' },
      { id: 6, name: 'Erase This' },
      { id: 7, name: 'Lost in Paradise' },
      { id: 8, name: 'Sick' },
      { id: 9, name: 'End of the Dream' },
      { id: 10, name: 'Oceans' },
      { id: 11, name: 'Never Go Back' },
      { id: 12, name: 'Swimming Home' },
    ],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/b/b5/Evanescence_Album.jpg',
  },
  {
    id: 2,
    title: 'Fallen',
    songs: [
      { id: 1, name: 'Going Under' },
      { id: 2, name: 'Bring Me to Life' },
      { id: 3, name: "Everybody's Fool" },
      { id: 4, name: 'My Immortal' },
      { id: 5, name: 'Haunted' },
      { id: 6, name: 'Tourniquet' },
      { id: 7, name: 'Imaginary' },
      { id: 8, name: 'Taking Over Me' },
      { id: 9, name: 'Hello' },
      { id: 10, name: 'My Last Breath' },
      { id: 11, name: 'Whisper' },
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/5/59/Fallen.jpg',
  },
  {
    id: 3,
    title: 'Syntesis',
    songs: [
      { id: 1, name: 'Overture' },
      { id: 2, name: 'Never Go Back' },
      { id: 3, name: 'Hi-Lo' },
      { id: 4, name: 'My Heart Is Broken' },
      { id: 5, name: 'Lacrymosa' },
      { id: 6, name: 'The End of the Dream' },
      { id: 7, name: 'Bring Me to Life' },
      { id: 8, name: 'Unraveling' },
      { id: 9, name: 'Imaginary' },
      { id: 10, name: 'Secret Door' },
      { id: 11, name: 'Lithium' },
      { id: 12, name: 'Lost in Paradise' },
      { id: 13, name: 'Your Star' },
      { id: 14, name: 'My immortal' },
      { id: 15, name: 'The In-Between' },
      { id: 16, name: 'Imperfection' },
    ],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/8/86/Evanescence_-_Synthesis.png',
  },
  {
    id: 4,
    title: 'The Bitter Truth',
    songs: [
      { id: 1, name: 'Artifact/The Turn' },
      { id: 2, name: 'Broken Pieces Shine' },
      { id: 3, name: 'The Game Is Over' },
      { id: 4, name: 'Yeah Right' },
      { id: 5, name: 'Feeding the Dark' },
      { id: 6, name: 'Wasted on You' },
      { id: 7, name: 'Better Without You' },
      { id: 8, name: 'Use My Voice' },
      { id: 9, name: 'Take Cover' },
      { id: 10, name: 'Far from Heaven' },
      { id: 11, name: 'Part of Me' },
      { id: 12, name: 'Blind Belief' },
    ],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/8/83/The_Bitter_Truth_por_Evanescence.JPG',
  },
  {
    id: 5,
    title: 'The Open Door',
    songs: [
      { id: 1, name: 'Sweet Sacrifice' },
      { id: 2, name: "Call Me When You're Sober" },
      { id: 3, name: 'Weight of the World' },
      { id: 4, name: 'Lithium' },
      { id: 5, name: 'Cloud Nine' },
      { id: 6, name: 'Snow White Queen' },
      { id: 7, name: 'Lacrymosa' },
      { id: 8, name: 'Like You' },
      { id: 9, name: 'Lose Control' },
      { id: 10, name: 'The Only One' },
      { id: 11, name: 'Your Star' },
      { id: 12, name: "All That I'm Living For" },
      { id: 13, name: 'Good Enough' },
    ],
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/pt/3/39/The_Open_Door_Ev..jpg',
  },
];

export default albuns;
