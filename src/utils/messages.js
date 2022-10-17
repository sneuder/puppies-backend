const error = {
  status: "Something went wrong"
};

const noRecords = (recordType) => {
  return {
    status: `${recordType} no found`
  }
};

const updatedRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} updated`
  };
};

const updatedNoRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} with no updating`
  };
};

const deletedRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} deleted`
  };
};

const deletedNoRecord = (recordType, idRecord) => {
  return {
    status: `${recordType} ${idRecord} not deleted`
  };
};

module.exports = {
  error,
  noRecords,
  updatedRecord,
  updatedNoRecord,
  deletedRecord,
  deletedNoRecord
};