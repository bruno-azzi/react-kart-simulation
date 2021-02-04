import React from 'react';

import './styles.scss';

import Loader from '../Loader';
import InputField from '../InputField';
import { useHomeContext } from '../../providers/HomeProvider';
import { useMainContext } from '../../providers/MainProvider';

const RacersForm = () => {
  const { racers } = useMainContext();
  const { handleInputChange, loadingSettings } = useHomeContext();

  return (
    <div className="main-block racers-form">
      <h2 className="main-block-title">Racer names</h2>

      <form>
        <div className="row" data-testid="fieldsWrapper">
          {loadingSettings ? (
            <Loader absolute />
          ) : (
            <>
              {racers && racers.length ? (
                racers.map((racer, index) => (
                  <div
                    key={racer.id}
                    className="col-xs-6 col-md-4 input-col"
                    data-testid="racerInput"
                  >
                    <InputField
                      testId={`racer_${index + 1}`}
                      id={racer.id}
                      value={racer.name}
                      placeholder={`Racer #${index + 1}`}
                      onChange={(e) =>
                        handleInputChange({
                          id: racer.id,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                ))
              ) : (
                <>
                  <p className="empty-message">
                    You can't have a race without racers :(
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default RacersForm;
