import image1 from '../../assets/cover/image-3-min.jpg';
import image2 from '../../assets/cover/image-5-min.jpg';
import image3 from '../../assets/cover/image-4-min.jpg';
import image4 from '../../assets/cover/image-7-min.jpg';
import image5 from '../../assets/cover/image-9-min.jpg';
import image6 from '../../assets/cover/image-6-min.jpg';
import audio1 from '../../assets/audio/Felix Jaehn & Ray Dalton_Call It Love.m4a';
import audio2 from "../../assets/audio/Lil Nas X_STAR WALKIN'.m4a";
import audio3 from "../../assets/audio/Rag'N'Bone Man_Human.mp3";
import audio4 from '../../assets/audio/Oliver Tree & Robin Schulz_Miss-You.mp3';
import audio5 from '../../assets/audio/Imagine Dragons JID_Enemy.m4a';
import audio6 from '../../assets/audio/Linkin Park_Lost.m4a';

const songData = [
  {
    link: 'https://www.youtube.com/watch?v=xwYA1d0E_RM',
    artist: 'Felix Jaehn & Ray Dalton',
    track: 'Call It Love',
    favorited: true,
    cover: image1,
    song: audio1,
  },
  {
    link: 'https://www.youtube.com/watch?v=ykWEo-G5W9Q',
    artist: 'Lil Nas X',
    track: 'STAR WALKIN',
    favorited: false,
    cover: image2,
    song: audio2,
  },
  {
    link: 'https://www.youtube.com/watch?v=L3wKzyIN1yk',
    artist: "Rag'n'Bone Man",
    track: 'Human',
    favorited: false,
    cover: image3,
    song: audio3,
  },
  {
    link: 'https://www.youtube.com/watch?v=BX0lKSa_PTk',
    artist: 'Oliver Tree & Robin Schulz',
    track: 'Miss You',
    favorited: false,
    cover: image4,
    song: audio4,
  },
  {
    link: 'https://www.youtube.com/watch?v=hHB1Ikzfpmc',
    artist: 'Imagine Dragons x JID',
    track: 'Enemy',
    favorited: true,
    cover: image5,
    song: audio5,
  },
  {
    link: 'https://www.youtube.com/watch?v=7NK_JOkuSVY',
    artist: 'Linkin Park',
    track: 'Lost',
    favorited: true,
    cover: image6,
    song: audio6,
  },
];

export default songData;
