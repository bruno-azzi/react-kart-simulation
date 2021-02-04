import React from 'react';

import { Flipper, Flipped } from 'react-flip-toolkit';

import './styles.scss';

import { bool } from 'prop-types';
import { useMainContext } from '../../providers/MainProvider';
import TimestampToRaceTime from '../../formatters/TimestampToRaceTime';

const RacerList = ({ showWinners }) => {
  const { racers, laps } = useMainContext();

  return (
    <div className="racer-list-wrapper">
      <Flipper flipKey={racers.map((racer) => racer.id).join('')}>
        <ol className={`racer-list ${showWinners ? 'show-winners' : ''}`}>
          {racers && racers.length
            ? racers.map((racer, index) => (
                <Flipped key={racer.id} flipId={racer.id}>
                  <li key={racer.id} className="racer">
                    {showWinners ? (
                      <div className="text-wrapper">
                        <p
                          className={`data ${!(index >= 3) ? 'winner' : ''}`}
                          data-testid="racer"
                        >
                          <strong>
                            {index + 1}. {racer.name}
                          </strong>
                          <span>{TimestampToRaceTime(racer.totalTime)}</span>
                        </p>
                      </div>
                    ) : (
                      <div className="text-wrapper" data-testid="racer">
                        <p className="data">
                          <strong>{index + 1}.</strong>
                          <span>{racer.name}</span>
                        </p>
                        <p className="data">
                          <strong>Speed: </strong>
                          <span>{racer.currentSpeed}km/h</span>
                        </p>
                        <p className="data">
                          <strong>AVG Speed: </strong>
                          <span>{racer.averageSpeed}km/h</span>
                        </p>
                        <p className="data">
                          <strong>Distance: </strong>
                          <span>{racer.distance}m</span>
                        </p>
                        <p className="data">
                          <strong>
                            {racer.currentLap}/{laps} Laps
                          </strong>
                        </p>
                      </div>
                    )}
                  </li>
                </Flipped>
              ))
            : null}
        </ol>
      </Flipper>
    </div>
  );
};

RacerList.propTypes = {
  showWinners: bool,
};

RacerList.defaultProps = {
  showWinners: false,
};

export default RacerList;
