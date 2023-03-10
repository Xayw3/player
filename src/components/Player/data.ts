import { preloadImage } from '@remotion/preload';
import image1 from '../../assets/cover/image-3-min.jpg';
import image2 from '../../assets/cover/image-5-min.jpg';
import image3 from '../../assets/cover/image-4-min.jpg';
import image4 from '../../assets/cover/image-7-min.jpg';
import image5 from '../../assets/cover/image-9-min.jpg';
import image6 from '../../assets/cover/image-6-min.jpg';

const songData = [
  {
    link: 'https://www.youtube.com/watch?v=xwYA1d0E_RM',
    artist: 'Felix Jaehn & Ray Dalton',
    track: 'Call It Love',
    favorited: true,
    cover: image1,
    song: 'https://dl.sndup.net/zzv4/Felix%20Jaehn%20&%20Ray%20Dalton_Call%20It%20Love.m4a',
  },
  {
    link: 'https://www.youtube.com/watch?v=ykWEo-G5W9Q',
    artist: 'Lil Nas X',
    track: 'STAR WALKIN',
    favorited: false,
    cover: image2,
    song: "https://dl.sndup.net/mzh3/Lil%20Nas%20X_STAR%20WALKIN'.m4a",
  },
  {
    link: 'https://www.youtube.com/watch?v=L3wKzyIN1yk',
    artist: "Rag'n'Bone Man",
    track: 'Human',
    favorited: false,
    cover: image3,
    song: "https://dl.sndup.net/q9dw/Rag'N'Bone%20Man_Human.mp3",
  },
  {
    link: 'https://www.youtube.com/watch?v=BX0lKSa_PTk',
    artist: 'Oliver Tree & Robin Schulz',
    track: 'Miss You',
    favorited: false,
    cover: image4,
    song: 'https://dl.sndup.net/mf22/Oliver%20Tree%20&%20Robin%20Schulz_Miss-You.mp3',
  },
  {
    link: 'https://www.youtube.com/watch?v=hHB1Ikzfpmc',
    artist: 'Imagine Dragons x JID',
    track: 'Enemy',
    favorited: true,
    cover: image5,
    song: 'https://dl.sndup.net/m5jg/Imagine%20Dragons%20JID_Enemy.m4a',
  },
  {
    link: 'https://www.youtube.com/watch?v=7NK_JOkuSVY',
    artist: 'Linkin Park',
    track: 'Lost',
    favorited: true,
    cover: image6,
    song: 'https://dl.sndup.net/ggvg/Linkin%20Park_Lost.m4a',
  },
];

songData.map((el) => preloadImage(el.cover));

export default songData;
