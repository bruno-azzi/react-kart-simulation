import React from 'react';

import CsvDownloader from 'react-csv-downloader';

import Button from '../../components/Button';
import RacerList from '../../components/RacerList';
import CsvHeaders from '../../assets/csv-headers.json';
import { useMainContext } from '../../providers/MainProvider';
import GetRaceDataForCsv from '../../useCases/GetRaceDataForCsv';
import { RaceClassificationProvider } from '../../providers/RaceClassificationProvider';

import './styles.scss';

const RaceClassification = () => {
  const { racers, resetRace } = useMainContext();
  const data = GetRaceDataForCsv(racers);

  return (
    <div className="race-classification">
      <div className="row">
        <div className="col-sm-9">
          <div className="main-block">
            <h2 className="main-block-title">Race classification</h2>
            <RacerList showWinners />
          </div>
        </div>

        <div className="col-sm-3">
          <Button label="Start another race" onClick={resetRace} />
          <CsvDownloader
            className="main-btn"
            filename="Brasfoot_But_For_Racing_Ranking"
            columns={CsvHeaders}
            datas={data}
            text="Export classification"
          />
        </div>
      </div>
    </div>
  );
};

const ResultsWithProvider = () => (
  <RaceClassificationProvider>
    <RaceClassification />
  </RaceClassificationProvider>
);

export default ResultsWithProvider;
