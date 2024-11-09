const express = require("express");
const {
  getOngoingAnime,
  getFinishedAnime,
  getAnimeDetails,
  getListAnime,
  searchAnime,
  getAnimeEpisode,
  getBatchAnime,
  getGenreList,
  getGenreDetails,
  getScheduleAnime,
} = require("../controller/anime");
const router = express.Router();

router.get("/ongoing/:page", getOngoingAnime);
router.get("/finished/:page", getFinishedAnime);
router.get("/details/:anime_id", getAnimeDetails);
router.get("/episode/:anime_id", getAnimeEpisode);
router.get("/batch/:batch_id", getBatchAnime);
router.get("/list", getListAnime);
router.get("/search", searchAnime);
router.get("/genres", getGenreList);
router.get("/genres/:genre_id/:page", getGenreDetails);
router.get("/schedule", getScheduleAnime);



module.exports = router;
