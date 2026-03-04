import moment from 'moment';

const dateConversion = (dateInput) => {
  const mmt = moment(dateInput, 'DD-MM-YYYY', true);
  if (mmt.isValid()) {
    return mmt.format('DD/MM/YYYY');
  } else {
    return 'Format tanggal salah';
  }
};

export default dateConversion;