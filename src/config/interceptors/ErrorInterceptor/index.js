import { toast } from 'react-toastify';

import api from '../../api';
import {
  API_CHECKPOINTS_URL,
  fetchRaceCheckpoints,
} from '../../../services/Race';
import { ShowErrorToast, ShowSuccessToast } from '../../../components/Toast';

const ErrorInterceptor = async (error) => {
  const maxAttempts = 10;
  const timeBetweenAttemps = 5000;
  const blockCheckpointRequests = JSON.parse(
    localStorage.getItem('blockCheckpointRequests'),
  );

  if (error.config.url === API_CHECKPOINTS_URL) {
    if (!blockCheckpointRequests) {
      localStorage.setItem('blockCheckpointRequests', true);

      toast.warning('Lost connection with the race, trying to reconnect...', {
        position: 'top-center',
        autoClose: maxAttempts * timeBetweenAttemps,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });

      for (
        let currentAttempt = 1;
        currentAttempt <= maxAttempts;
        currentAttempt++
      ) {
        setTimeout(async () => {
          await fetchRaceCheckpoints()
            .then(() => {
              currentAttempt = maxAttempts;
              toast.dismiss();
              localStorage.setItem('blockCheckpointRequests', false);
              ShowSuccessToast('Reconnected with success!');
              return api(error.config);
            })
            .catch(() => {
              if (currentAttempt === maxAttempts) {
                toast.dismiss();
                ShowErrorToast('We were unable to reconnect!');
                localStorage.setItem('blockCheckpointRequests', false);
              }
            });
        }, timeBetweenAttemps * currentAttempt);
      }
    }
  } else {
    ShowErrorToast('Whoops, something went wrong!');
  }

  return Promise.reject(error);
};

export default ErrorInterceptor;
