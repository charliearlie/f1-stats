import defaultAxios, { AxiosResponse } from "axios";
import merge from "lodash.merge";
import { IQualiSeason, IRaceSeason } from "../interfaces";
import { qualiPreviewResult } from "../interfaces/quali-season.interface";
import { RacePreviewResult } from "../interfaces/race-season.interface";
import calculateTimeDifference from "../lib/util/calculate-time-difference";
import { getRaceWeekendDates } from "./date-service";

import type {
  ResultResponse,
  Race,
  SeasonsResponse,
  ScheduleResponse,
  RaceTableMRData,
  ScheduleTableMRData,
  ScheduleRace,
  QualifyingResult,
  RaceResults,
  StandingsResponse,
  Standing,
} from "../lib/types";
const axios = defaultAxios.create({ baseURL: "https://ergast.com/api/f1/" });

// Really should be making these requests to our API routes. Will consider changing that in future
export const getYearRaceResults = async (selectedSeason: string) => {
  const racesResponse: AxiosResponse<ResultResponse> = await axios.get(
    `${selectedSeason}/results.json?limit=600`
  );
  const scheduleResponse: AxiosResponse<ScheduleResponse> = await axios.get(
    `/${selectedSeason}.json`
  );

  const scheduleData = scheduleResponse.data.MRData;
  const seasonResults = racesResponse.data.MRData;

  const merged = mergeScheduleAndResultData(seasonResults, scheduleData);
  const races = merged.RaceTable.Races;

  return {
    year: merged.RaceTable.season,
    results: races.map((race: Race & ScheduleRace) => ({
      circuit: {
        id: race.Circuit.circuitId,
        name: race.Circuit.circuitName,
      },
      country: race.Circuit.Location.country,
      date: race.date,
      winner: race.Results?.[0].Driver || null,
      podium: getPodium(race.Results),
      raceName: race.raceName,
      round: race.round,
      season: race.season,
      raceTime: {
        date: race.date || null,
        time: race.time || null,
      },
    })),
  } as IRaceSeason;
};

export const getRoundRaceResult = async (round: string, year: string) => {
  const response: AxiosResponse<ResultResponse> = await axios.get(
    `${year}/${round}/results.json`
  );

  if (response.data.MRData) {
    const raceData = response.data.MRData.RaceTable.Races[0];
    const results = raceData.Results;

    return {
      season: year,
      round,
      date: getRaceWeekendDates(raceData.date),
      raceName: raceData.raceName,
      circuit: raceData.Circuit.circuitName,
      results: results?.map((result, index: number) => ({
        constructor: result.Constructor.name,
        constructorId: result.Constructor.constructorId,
        driver: result.Driver.givenName + " " + result.Driver.familyName,
        driverId: result.Driver.driverId,
        driverNumber: result.number,
        driverCode: result.Driver.code,
        lapsCompleted: result.laps,
        position: result.position,
        raceTime: result.Time || { time: "", millis: "" },
        startingPosition: result.grid,
        status: result.status,
        points: result.points || "",
      })),
    };
  }

  return {};

  // console.log(qualiData);
};

export const getYearQualifyingResults = async (selectedSeason: string) => {
  const qualiResponse: AxiosResponse<ResultResponse> = await axios.get(
    `${selectedSeason}/qualifying.json?limit=600`
  );
  const scheduleResponse: AxiosResponse<ScheduleResponse> = await axios.get(
    `/${selectedSeason}.json`
  );

  const scheduleData = scheduleResponse.data.MRData;
  const seasonResults = qualiResponse.data.MRData;

  const merged = mergeScheduleAndResultData(seasonResults, scheduleData);
  const races = merged.RaceTable.Races;

  return {
    year: merged.RaceTable.season,
    results:
      races.map((race: Race & ScheduleRace) => ({
        circuit: {
          id: race.Circuit.circuitId,
          name: race.Circuit.circuitName,
        },
        country: race.Circuit.Location.country,
        date: race.date,
        fastestLap: race?.QualifyingResults?.[0] || null,
        raceName: race.raceName,
        round: race.round,
        season: race.season,
        qualifyingTime: race.Qualifying || null,
        topThree: getTopThreeQualifiers(race.QualifyingResults),
        raceTime: {
          date: race.date || null,
          time: race.time || null,
        },
        raceHasCompleted:
          race?.QualifyingResults?.length && race?.QualifyingResults?.length > 0
            ? true
            : false,
      })) || [],
  } as IQualiSeason;
};

const mergeScheduleAndResultData = (
  seasonData: RaceTableMRData,
  scheduleData: ScheduleTableMRData
) => {
  return merge(seasonData, scheduleData);
};

const getTopThreeQualifiers = (
  results?: QualifyingResult[]
): qualiPreviewResult[] | null => {
  if (!results || results.length <= 0) return null;

  const topThree = results.slice(0, 3);
  return topThree.map((result) => {
    return {
      constructor: result?.Constructor?.constructorId,
      driver: `${result?.Driver?.givenName} ${result?.Driver?.familyName}`,
      position: result.position,
      timeQualified: result.Q3 || result.Q2 || result.Q1,
    };
  });
};

const getPodium = (results?: RaceResults[]): RacePreviewResult[] | null => {
  if (!results || results.length <= 0) return null;
  const topThree = results.slice(0, 3);

  return topThree.map((result) => ({
    constructor: result?.Constructor?.constructorId,
    driver: `${result?.Driver?.givenName} ${result?.Driver?.familyName}`,
    position: result.position,
    time: result.Time,
  }));
};

export const getRoundQualifyingResult = async (round: string, year: string) => {
  const response: AxiosResponse<ResultResponse> = await axios.get(
    `${year}/${round}/qualifying.json`
  );

  if (response.data.MRData) {
    const qualiData = response.data.MRData.RaceTable.Races[0];
    const results = qualiData.QualifyingResults;
    const polePositionLapTime = results?.[0].Q3;

    return {
      season: year,
      round,
      date: getRaceWeekendDates(qualiData.date),
      raceName: qualiData.raceName,
      circuit: qualiData.Circuit.circuitName,
      results: results?.map((result, index) => ({
        position: result.position,
        driver: result.Driver.givenName + " " + result.Driver.familyName,
        driverId: result.Driver.driverId,
        driverNumber: result.number,
        driverCode: result.Driver.code,
        constructor: result.Constructor.name,
        constructorId: result.Constructor.constructorId,
        qualifyingSessions: {
          q1: result["Q1"] || "",
          q2: result["Q2"] || "",
          q3: result["Q3"] || "",
        },
        qualifyingTime: result.Q3 || result.Q2 || result.Q1,
        delta:
          index !== 0 && result.Q3
            ? calculateTimeDifference(polePositionLapTime, result["Q3"])
            : "",
      })),
    };
  }

  return {};
};

type GetDriverStandingsParams = {
  year?: string;
  numberOfResults?: number;
  round?: string;
};
export const getDriverStandings = async ({
  year = "current",
  numberOfResults = 20,
  round,
}: GetDriverStandingsParams) => {
  const uri = round
    ? `${year}/${round}/driverStandings.json`
    : `${year}/driverStandings.json`;
  const response: AxiosResponse<StandingsResponse> = await axios.get(uri);

  const standingsList = response.data.MRData.StandingsTable.StandingsLists;
  const standings = round
    ? standingsList.find((item) => item.round === round)?.DriverStandings!
    : response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  return standings
    .map(
      (standing) =>
        ({
          driverName:
            standing.Driver.givenName + " " + standing.Driver.familyName,
          position: standing.position,
          points: standing.points,
          wins: standing.wins,
          constructor: standing.Constructors[0].constructorId,
        } as Standing)
    )
    .slice(0, numberOfResults);
};

export const getListOfSeasons = async () => {
  const response: AxiosResponse<SeasonsResponse> = await axios.get(
    "seasons.json?limit=100"
  );
  const listOfSeasons = response.data;
  return listOfSeasons.MRData.SeasonTable.Seasons.map(
    (season) => season.season
  );
};
