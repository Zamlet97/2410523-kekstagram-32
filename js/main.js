
import {generateMiniatures} from './miniatures.js';
import {generateBigPicture} from'./big-picture.js';
import {onFormSubmit, getCloseLoad} from './upload-form-modal.js';
import {getData, sendData} from './api.js';
import {showAlert} from './utils.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

onFormSubmit(async (data) => {
  try {
    await sendData(data);
    getCloseLoad();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  generateMiniatures(data);
  generateBigPicture(data);
} catch {
  showAlert();
}
