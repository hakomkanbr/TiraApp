import moment from "moment";

export const dateFormat = {
  dateFormat : 'DD.MM.YYYY HH:mm',
  weekFormat : 'MM/DD',
  monthFormat : 'YYYY/MM',
  dateFormatList : ['DD/MM/YYYY', 'DD/MM/YY']
}

export const momentFullDate = (e) => {
  return moment(e).format(dateFormat.dateFormat);
};
