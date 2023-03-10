/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
import './player.scss';
import { useEffect, useRef, useState } from 'react';
import PlayIcon, {
  PrevIcon, NextIcon, PauseIcon, MuteIcon, FullVolumeIcon, VolumeIcon, LikeIcon, LinkIcon,
} from '../Icons/Icons';
import songData from './data';

const Player = () => {
  const [data, setData] = useState(songData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlay, setCurrentPlay] = useState('');
  const [audioIndex, setAudioIndex] = useState(0);
  const [volume, setVolume] = useState(10);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [muted, setMuted] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isLeave, setIsLeave] = useState(false);

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
    const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

    return `${minutes}:${seconds}`;
  };

  const handleNext = () => {
    if (isActive) {
      setIsLeave(true);
      setIsActive(false);

      setTimeout(() => {
        setIsActive(true);
        setIsLeave(false);

        if (data.length - 1 === audioIndex) {
          setCurrentPlay(data[0]?.song);
          setAudioIndex(0);
        } else {
          setCurrentPlay(data[audioIndex + 1]?.song);
          setAudioIndex(audioIndex + 1);
        }
      }, 300);
    }
  };

  const handleTimeChange = (e: any) => {
    const audio = audioPlayer.current;
    if (audio) {
      audio.currentTime = e.target.value;
    }
  };

  const getTime = () => {
    if (isPlaying) {
      setInterval(() => {
        const duration = audioPlayer.current ? audioPlayer.current.duration : 0;
        const time = audioPlayer.current ? audioPlayer.current.currentTime : 0;

        setTimeRemaining(duration);
        setCurrentTime(time);
      }, 100);

      audioPlayer?.current?.addEventListener('ended', handleNext);
    }
  };

  const togglePlay = () => {
    if (currentPlay === '') {
      setCurrentPlay(data[audioIndex]?.song);
    }

    if (audioPlayer.current !== null) {
      if (!isPlaying) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const handlePrev = () => {
    if (isActive) {
      setIsLeave(true);
      setIsActive(false);

      setTimeout(() => {
        setIsActive(true);
        setIsLeave(false);

        if (audioIndex === 0) {
          setCurrentPlay(data[data.length - 1]?.song);
          setAudioIndex(data.length - 1);
        } else {
          setCurrentPlay(data[audioIndex - 1]?.song);
          setAudioIndex(audioIndex - 1);
        }
      }, 300);
    }
  };

  const changeFavorited = () => {
    const newData = [...data];
    newData[audioIndex].favorited = !data[audioIndex].favorited;
    setData(newData);
  };

  useEffect(() => {
    getTime();

    if (audioPlayer.current !== null) {
      audioPlayer.current.volume = volume / 100;
    }
  }, [volume, isPlaying, currentPlay, audioIndex]);

  console.log(data);

  return (
    <div className="player">
      <audio src={currentPlay} muted={muted} autoPlay={isPlaying} ref={audioPlayer} />
      <div className="player_top">
        <div className="player_cover">
          <div
            className={`player_cover__item ${isActive ? 'active' : ''} ${isLeave ? 'leave' : ''}`}
            style={{ backgroundImage: `url(${data[audioIndex].cover})` }}
          />
        </div>
        <div className="btns">
          <button
            className="btn"
            style={{ color: data[audioIndex].favorited === true ? 'red' : '' }}
            onClick={changeFavorited}
          >
            <LikeIcon />
          </button>
          <a className="btn" target="_blank" href={data[audioIndex].link} rel="noreferrer"><LinkIcon /></a>
          <button className="btn" onClick={handlePrev}><PrevIcon /></button>
          <button className="btn" onClick={handleNext}><NextIcon /></button>
          {
            isPlaying
              ? <button className="btn btn_xl" onClick={togglePlay}><PauseIcon /></button>
              : <button className="btn btn_xl" onClick={togglePlay}><PlayIcon /></button>
          }
        </div>
        <div className="progress__bar">
          <div className="progress__current" style={{ width: '15%' }} />
        </div>
      </div>
      <div className="player_bottom">
        <div className="audio_wrapper">
          <div className="audio_info">
            <p className="audio_name">{data[audioIndex]?.artist}</p>
            <p className="audio_track">{data[audioIndex]?.track}</p>
          </div>
          <p className="audio_duration">{formatTime(timeRemaining)}</p>
        </div>
        <div className="progress_wrapper">
          <input
            type="range"
            max={timeRemaining}
            style={{ backgroundSize: `${((currentTime * 100) / timeRemaining).toFixed(0)}% 100%` }}
            value={currentTime}
            onChange={handleTimeChange}
          />
        </div>
        <div className="sound_wrapper">
          <p className="audio_duration">{formatTime(currentTime)}</p>
          <div className="volume_wrapper">
            <button className="btn" onClick={() => setMuted(!muted)}>
              {
                (muted || volume === 0) ? <MuteIcon /> : (volume > 79) ? <FullVolumeIcon /> : <VolumeIcon />
              }
            </button>
            <input
              type="range"
              min={0}
              max={100}
              style={{ width: '40%', backgroundSize: `${volume}% 100%` }}
              value={volume}
              onChange={(e) => setVolume(e.target.valueAsNumber)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
