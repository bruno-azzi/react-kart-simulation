import React from 'react';

import Button from '../../components/Button';
import InputField from '../../components/InputField';
import RacersForm from '../../components/RacersForm';
import { HomeProvider, useHomeContext } from '../../providers/HomeProvider';
import { useMainContext } from '../../providers/MainProvider';

import './styles.scss';

const Home = () => {
  const {
    laps,
    startRace,
    lapsErrors,
    lapsInputRef,
    onChangeNumberOfLaps,
    loadingSettings,
  } = useHomeContext();
  const { racers } = useMainContext();

  return (
    <div className="home">
      <div className="row">
        <div className="col-sm-9">
          <RacersForm />
        </div>

        <aside className="col-sm-3 laps-aside">
          <div className="row">
            <div className="col-xs">
              <div className="main-block">
                <h2 className="main-block-title">Laps</h2>

                <InputField
                  ref={lapsInputRef}
                  value={laps}
                  maxLength={2}
                  errors={lapsErrors}
                  onChange={(e) => onChangeNumberOfLaps(e.target.value)}
                />
              </div>
            </div>

            <div className="col-xs d-flex align-items-sm-end">
              <Button
                label="Confirm"
                onClick={startRace}
                disabled={loadingSettings || !racers?.length}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const HomeWithController = () => (
  <HomeProvider>
    <Home />
  </HomeProvider>
);

export default HomeWithController;
