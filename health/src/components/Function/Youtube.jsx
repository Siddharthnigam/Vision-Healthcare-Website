import React, { useState } from 'react';
import yt from '../Images/yt.png';

const FetchYouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState(''); // State for search query
  const [language, setLanguage] = useState(''); // State for language filter








  // const apiKey = 'AIzaSyCrmGeELvmBxh_0BXPUdtg6seY8hU_ZDxE'; 
  const apiKey = 'AIzaSyC9OIOd-fL17bhyt1Noyd02CVEQGIkU7Nw'; 











  const fetchVideos = async () => {
    if (!query) return; // Do not fetch if query is empty

    console.log('Fetching videos with query:', query, 'and language:', language);

    let languageFilter = '';
    if (language) {
      languageFilter = `&relevanceLanguage=${language}`;
    }

    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${query}&part=snippet,id&type=video&videoDuration=medium&order=date&maxResults=10${languageFilter}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      setError('An error occurred: ' + error.message);
      console.error('Error fetching videos:', error);
    }
  };

  const displayVideos = () => {
    return videos.map((video) => (
      <div key={video.id.videoId} className="mb-8 w-full lg:w-1/3">
        <iframe
          width="90%"
          height="250"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ));
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSearchClick = () => {
    fetchVideos();
  };

  return (
    <div className="youtube flex-col items-center text-zinc-900 h-screen">
      <center>
        <h1 className="text-[7vh] font-bold mb-1">Search Any Health Issue</h1>
      </center>

      <div className="w-[100%] flex justify-between">
        <div className="video flex overflow-y-scroll h-[60vh] bg-zinc-200 w-[60%] flex-col justify-center items-center">
          <div id="video-container" className="flex flex-wrap justify-evenly">
            {displayVideos()}
          </div>

          {error && (
            <div id="error-message" className="text-red-600 mt-4">
              {error}
            </div>
          )}
        </div>

        <div className="w-[30%] mr-20 flex justify-center">
          <img className="w-[100%] rounded-3xl" src={yt} alt="" />
        </div>
      </div>

      <div className="bg-zinc-800 w-[60%] flex justify-evenly mt-3 p-1">
        <input
          type="search"
          placeholder="Search for videos"
          value={query}
          onChange={handleInputChange}
          className="mb-1 p-2 w-[90%] text-zinc-900 text-lg rounded"
        />
        <button
          type="button"
          onClick={handleSearchClick}
          className="ml-2 px-6 py-1 text-[3vh] bg-gray-300 text-zinc-950 rounded-md"
        >
          Search
        </button>
      </div>

      <div className="bg-zinc-800 w-[60%] flex justify-evenly mt-3 p-1">
        <label className="text-white">Hindi</label>
        <input
          type="checkbox"
          name="language"
          value="hi"
          checked={language === 'hi'}
          onChange={handleLanguageChange}
          className="ml-2 mr-4"
        />
        <label className="text-white">English</label>
        <input
          type="checkbox"
          name="language"
          value="en"
          checked={language === 'en'}
          onChange={handleLanguageChange}
          className="ml-2"
        />
      </div>
      <br />
    </div>
  );
};

export default FetchYouTubeVideos;
