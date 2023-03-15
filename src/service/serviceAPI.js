import axios from 'axios';
import { response } from 'express';
import { async } from 'q';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '178b07d62e47484c1918df64bd242568';

export const fetchSearchMovies = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&language=en-US&include_adult=false`
    );
    return response.data;
  } catch (error) {
    throw new Error(response.statusText);
  }
};

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=1`
    );
  } catch (error) {
    throw new Error(response.statusText);
  }
};
export const fetchDetailsMovie = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&page=1&&language=en-US`
    );
  } catch (error) {
    throw new Error(response.statusText);
  }
};

export const fetchCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&page=1&&language=en-US`
    );
  } catch (error) {
    throw new Error(response.statusText);
  }
};

export const fetchReviews = async id => {
  try {
  } catch (error) {
    throw new Error(response.statusText);
  }
};
