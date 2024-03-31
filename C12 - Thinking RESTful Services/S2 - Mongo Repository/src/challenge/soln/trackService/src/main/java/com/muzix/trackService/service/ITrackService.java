package com.muzix.trackService.service;

import com.muzix.trackService.domain.Track;
import com.muzix.trackService.exception.TrackAlreadyExistsException;
import com.muzix.trackService.exception.TrackNotFoundException;

import java.util.List;

public interface ITrackService {
    Track saveTrack(Track track) throws TrackAlreadyExistsException;
    boolean deleteTrack(int trackId) throws TrackNotFoundException;
    List<Track> getAllTracks() throws Exception;
    List<Track> getAllTracksAboveRating(float rating) throws Exception;
    List<Track>  getAllTracksByArtist(String artistName) throws Exception;
}
